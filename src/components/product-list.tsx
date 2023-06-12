import {
  useCallback, useEffect, useState,
} from 'react';
import { Box } from '@mui/material';
import { useGetProductsQuery } from '@/store/services/product-service';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from './product-card';

export default function ProductList() {
  const [page, setPage] = useState(1);
  const initialLimit = typeof window !== 'undefined'
    ? Number(window.sessionStorage.getItem('products-count')) || 20
    : 20;
  const [limit, setLimit] = useState(initialLimit);

  const { data } = useGetProductsQuery({ page, limit });
  const productList = data?.data;
  const loadMore = useCallback(() => {
    const newPage = limit > 20 ? (limit / 20) + 1 : page + 1;
    setPage(newPage);
    setLimit(20);
  }, [limit, page]);

  useEffect(() => () => {
    if (productList?.length) {
      sessionStorage.setItem('products-count', productList.length.toString());
    }
  }, [productList?.length]);

  if (!productList?.length) {
    return null;
  }

  return (
    <InfiniteScroll
      next={loadMore}
      hasMore={data?.meta?.count !== 0}
      loader={<h1>LOADING....</h1>}
      dataLength={productList.length}
    >
      <Box>
        <Box display="flex" gap={2} p={4} flexWrap="wrap" justifyContent="center">
          {productList.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Box>
      </Box>
    </InfiniteScroll>
  );
}

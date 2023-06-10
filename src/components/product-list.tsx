import { useState } from 'react';
import { Box } from '@mui/material';
import { useGetProductsQuery } from '@/store/services/product-service';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import ProductCard from './product-card';
import Pagination from './pagination';

export default function ProductList() {
  const params = useSearchParams();

  const [page, setPage] = useState(Number(params.get('page')) || 1);
  const limit = 20;
  const router = useRouter();
  const pathname = usePathname();
  const handlePagination = (pageNumber: number) => {
    router.replace(`${pathname}?page=${pageNumber}&limit=${limit}`);
    setPage(pageNumber);
  };

  const { data } = useGetProductsQuery({ page, limit });
  const productList = data?.data;
  const pageCount = data?.meta?.total ? Math.ceil(data.meta.total / limit) : 0;
  if (!productList?.length) {
    return null;
  }

  return (
    <Box>
      <Box display="flex" gap={2} p={4} flexWrap="wrap" justifyContent="center">
        {productList.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Box>
      <Box justifyContent="center" display="flex">
        <Pagination setPage={handlePagination} pageCount={pageCount} page={page} />
      </Box>
    </Box>
  );
}

import { useEffect } from 'react';
import {
  Card, CardActions, CardContent, CardMedia, Rating, Typography,
} from '@mui/material';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { IProduct } from '@/interfaces/product-interface';
import StarIcon from '../../public/star.svg';
import StarEmptyIcon from '../../public/star-empty.svg';

export default function ProductCardI(props: { product: IProduct }) {
  const { product } = props;
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  useEffect(() => () => {
    if (inView && entry?.target) {
      sessionStorage.setItem('ref-id', product.id);
    }
  }, [entry?.target, inView, product.id]);

  useEffect(() => {
    if (document.readyState === 'complete') {
      const refId = sessionStorage.getItem('ref-id');
      const count = sessionStorage.getItem('products-count');
      if (refId === entry?.target.id && count) {
        entry.target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [entry?.target]);

  return (
    <Link href={`/products/${product.id}`} style={{ textDecoration: 'unset' }} ref={ref} id={product.id}>
      <Card
        elevation={0}
        sx={{
          position: 'relative',
          minHeight: 80,
          width: 250,
          borderRadius: '16px',
          pb: 4,
          height: '100%',
        }}
      >
        <CardMedia
          component="img"
          image={product.picture}
          alt="product name"
        />
        <CardContent sx={{ pt: '12px' }}>
          <Typography fontSize={16}>
            {product.title}
          </Typography>
          <Rating
            sx={{ gap: '4px' }}
            precision={0.5}
            value={product.rating}
            icon={<StarIcon />}
            emptyIcon={<StarEmptyIcon />}
            readOnly
          />
        </CardContent>
        <CardActions sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          px: 2,
        }}
        >
          <Typography variant="h5" component="div" fontWeight={800}>
            {`${product.price} ₽`}
          </Typography>
        </CardActions>
      </Card>
    </Link>
  );
}

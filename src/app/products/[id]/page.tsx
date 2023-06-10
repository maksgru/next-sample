'use client';

import { useGetProductByIdQuery } from '@/store/services/product-service';
import { useParams, useRouter } from 'next/navigation';
import ProductDetails from '@/components/product-details';
import MainContainer from '@/containers/main-container';
import { Button, Stack } from '@mui/material';
import ProductDescription from '@/components/product-description';
import ArrowLeftIcon from '../../../../public/arrow-left.svg';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const { data } = useGetProductByIdQuery(params.id);
  if (!data) {
    return null;
  }
  return (
    <MainContainer>
      <Stack direction="column" gap={2}>
        <Button
          startIcon={<ArrowLeftIcon />}
          onClick={() => router.back()}
          sx={{
            position: 'absolute',
            top: 72,
            left: 33,
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Back
        </Button>
        <ProductDetails product={data} />
        <ProductDescription description={data.description} />
      </Stack>
    </MainContainer>
  );
}

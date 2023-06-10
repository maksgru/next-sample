'use client';

import OrderList from '@/components/order-list';
import MainContainer from '@/containers/main-container';
import { Box } from '@mui/material';

export default function ProductPage() {
  return (
    <MainContainer>
      <Box display="flex" gap={2} p={4}>
        <OrderList />
      </Box>
    </MainContainer>
  );
}

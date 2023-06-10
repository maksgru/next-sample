import { Box, Stack } from '@mui/material';
// import Pagination from './pagination';
import orderListFixture from '@/fixtures/order-list-fixture';
import OrderCard from './order-card';

export default function OrderList() {
  return (
    <Box width={1}>
      <Stack
        direction="column"
        justifyContent="center"
        width={1}
        px="15%"
        gap={3}
      >
        {orderListFixture.map((order) => (
          <OrderCard key={order.number} />
        ))}
      </Stack>
      <Box justifyContent="center" display="flex">
        {/* <Pagination /> */}
      </Box>
    </Box>
  );
}

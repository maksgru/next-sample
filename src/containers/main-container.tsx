import React from 'react';
import { Box } from '@mui/material';
import Header from '@/components/header';

export default function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ pt: '72px', pb: '40px' }}>
      <Header />
      {children}
    </Box>
  );
}

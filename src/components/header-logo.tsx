import { Stack } from '@mui/material';
import Image from 'next/image';

export default function HeaderLogo() {
  return (
    <Stack
      direction="row"
      alignItems="center"
    >
      <Image
        src="/blue-cube.png"
        alt="header logo"
        width={150}
        height={24}
        style={{ objectFit: 'contain' }}
      />
    </Stack>
  );
}

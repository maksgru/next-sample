import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/theme/mui-theme-provider';
import StoreProvider from '@/store/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Detmir',
  description: 'Detmir web app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

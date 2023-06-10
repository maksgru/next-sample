'use client';

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/theme/light-theme';
import createEmotionCache from '@/utils/create-emotion-cache';
import { ThemeProvider } from '@mui/material/styles';

const clientSideEmotionCache = createEmotionCache();

export default function MuiThemeProvider({
  children,
  emotionCache = clientSideEmotionCache,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

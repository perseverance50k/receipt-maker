import { FC, PropsWithChildren } from 'react';

import type { Metadata } from 'next';

import '@fontsource/poppins';

import { ThemeProvider } from '@mui/material';

import { theme } from '@theme';

export const metadata: Metadata = {
  title: 'Receipt Maker',
  description: 'Online custom receipt generator for your business!',
};

export interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;

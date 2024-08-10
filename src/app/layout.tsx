import { FC, PropsWithChildren } from 'react';

import type { Metadata } from 'next';

import '@fontsource/inter';
import '@fontsource/poppins';

import '@styles/globals.css';

export const metadata: Metadata = {
  title: 'Receipt Maker',
  description: 'Online custom receipt generator for your business!',
};

export interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

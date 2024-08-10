import { FC, PropsWithChildren } from 'react';

import type { Metadata } from 'next';

import '@fontsource/poppins';

import './globals.css';

export const metadata: Metadata = {
  title: 'Receipt Maker',
  description: 'Online custom receipt generator for your business!',
};

export interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

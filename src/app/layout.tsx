import { FC, PropsWithChildren } from 'react';

import type { Metadata } from 'next';

import '@fontsource/inter';
import '@fontsource/poppins';

import { Navbar } from '@components';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: 'Receipt Maker',
  description: 'Online custom receipt generator for your business!',
};

export interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/static/receipt.svg" />
      <body>
        <Navbar />
        <div className="pt-[64px] lg:pt-0">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;

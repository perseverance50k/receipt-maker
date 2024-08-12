import { FC, PropsWithChildren } from 'react';

import type { Metadata } from 'next';

// We need to explicitly import every font weight in order to be able to use them.
// The import like '@fontsource/inter' defaults to weight 400 (based on docs)
// Docs: https://www.npmjs.com/package/@fontsource/inter
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

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
        <div className="flex flex-col items-center pt-[64px]">
          <div className="w-full max-w-screen-2xl">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

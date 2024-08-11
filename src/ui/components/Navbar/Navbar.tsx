import { FC } from 'react';

import Link from 'next/link';

import { DesktopHorizontalMenu, MobileDropdownMenu } from './components';

export const Navbar: FC = () => {
  return (
    <div className="navbar bg-base-100 z-10 absolute">
      <div className="flex-1">
        <Link className="btn btn-ghost text-lg font-inter font-bold" href="/">
          Receipt Maker
        </Link>
      </div>
      <div className="flex-none">
        <DesktopHorizontalMenu />
        <MobileDropdownMenu />
      </div>
    </div>
  );
};

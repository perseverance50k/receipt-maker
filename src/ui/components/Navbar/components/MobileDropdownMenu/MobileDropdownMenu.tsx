'use client';

import { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MenuIcon } from './components';

import { routes } from '../../config';

export const MobileDropdownMenu: FC = () => {
  const pathname = usePathname();

  const renderItems = () => {
    return routes.map((route) => (
      <li key={route.name}>
        <Link
          href={route.path}
          className={pathname === route.path ? 'bg-slate-100' : undefined}
        >
          {route.name}
        </Link>
      </li>
    ));
  };

  return (
    <div className="dropdown dropdown-end sm:hidden">
      <button className="btn btn-square btn-ghost">
        <MenuIcon />
      </button>
      <ul className="menu menu-compact dropdown-content mt-5 p-2 shadow-lg bg-base-100 rounded-box w-52">
        {renderItems()}
      </ul>
    </div>
  );
};

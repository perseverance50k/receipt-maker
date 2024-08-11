'use client';

import { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routes } from '../../config';

export const DesktopHorizontalMenu: FC = () => {
  const pathname = usePathname();

  const renderItems = () => {
    return routes.map((route) => (
      <li key={route.name}>
        <Link
          href={route.path}
          className={`btn font-inter mx-2 ${pathname === route.path ? 'bg-gray-200' : 'bg-gray-50'}`}
        >
          {route.name}
        </Link>
      </li>
    ));
  };

  return (
    <ul className="hidden sm:menu sm:menu-horizontal sm:p-0">
      {renderItems()}
    </ul>
  );
};

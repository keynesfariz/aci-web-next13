import Link from 'next/link';
import React from 'react';

interface MenuProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

interface MenuItemProps {
  href: string;
  children: React.ReactNode;
}

const Menu = ({ title, children, className = '' }: MenuProps) => (
  <ul className={className}>
    <li className="mb-3 font-heading font-semibold uppercase tracking-widest text-white/70 lg:mb-6">
      {title}
    </li>
    {children}
  </ul>
);

const MenuItem = ({ href, children }: MenuItemProps) => (
  <li
    key={href}
    className="mb-2 ml-4 font-sans font-bold last:mb-0 md:ml-0 lg:mb-4 lg:text-3xl">
    <Link
      href={href}
      className="decoration-white/70 decoration-2 underline-offset-4 hover:underline">
      {children}
    </Link>
  </li>
);

Menu.Item = MenuItem;

export default Menu;

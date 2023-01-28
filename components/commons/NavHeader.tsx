import Link from 'next/link';
import type { CategoryLinkType } from '../../constants/navigations';
import { categories } from '../../constants/navigations';

interface NavHeaderProps {
  expanded?: boolean;
}

const NavHeader = ({ expanded = true }: NavHeaderProps) => (
  <nav
    className={`hidden space-x-4 text-lg transition-all duration-150 ease-in-out md:block lg:space-x-6 ${
      expanded ? 'lg:text-xl xl:space-x-8' : ''
    }`}>
    {Object.keys(categories).map((href) => (
      <Link
        key={href}
        href={href}
        className="font-bold decoration-white/70 decoration-2 underline-offset-4 hover:underline">
        {categories[href as CategoryLinkType]}
      </Link>
    ))}
  </nav>
);

export default NavHeader;

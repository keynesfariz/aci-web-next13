'use client';

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import useScrollDirection, {
  ScrollDirections,
} from '../../hooks/useScrollDirection';
import useToggle from '../../hooks/useToggle';
import type { SocialLinks } from '../../queries/getSocialLinks';
import HeaderOverlay from '../parts/HeaderOverlay';
import IconButton from '../parts/IconButton';
import Logo from '../parts/Logo';
import NavHeader from './NavHeader';
import NavMenu from './NavMenu';

interface HeaderProps {
  socialLinks?: SocialLinks;
}

const Header = ({ socialLinks }: HeaderProps) => {
  const scrollDirection = useScrollDirection();
  const [showMenu, toggleMenu] = useToggle(false);
  const [showSearch, toggleSearch] = useToggle(false);

  const shouldExpand =
    scrollDirection === ScrollDirections.UP || showMenu || showSearch;

  const handleToggleMenu = () => {
    toggleSearch(false);
    toggleMenu();
  };

  const handleToggleSearch = () => {
    toggleMenu(false);
    toggleSearch();
  };

  return (
    <header className="sticky top-0 z-20 bg-brand text-white">
      <div
        className={`aci-container flex h-14 items-center justify-between transition-all duration-300 ease-in-out md:h-20 ${
          shouldExpand ? 'lg:h-28' : ''
        }`}>
        <div
          className={`w-40 transition-all duration-150 ease-in-out md:w-44 ${
            shouldExpand ? 'lg:w-72' : ''
          }`}>
          <Logo />
        </div>
        <NavHeader expanded={shouldExpand} />
        <div className="flex items-center">
          <IconButton onClick={handleToggleSearch}>
            {showSearch ? <XMarkIcon /> : <MagnifyingGlassIcon />}
          </IconButton>
          <div className="mx-2 h-6 border-r-2 border-white/30" />
          <IconButton onClick={handleToggleMenu} active={showMenu}>
            {showMenu ? <XMarkIcon /> : <Bars3Icon />}
          </IconButton>
        </div>
      </div>
      <HeaderOverlay visible={showMenu}>
        <NavMenu socialLinks={socialLinks} />
      </HeaderOverlay>
      <HeaderOverlay visible={showSearch}>
        <form action="#">Search something...</form>
      </HeaderOverlay>
    </header>
  );
};

export default Header;

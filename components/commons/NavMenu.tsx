import type {
  CategoryLinkType,
  InformationLinkType,
} from '../../constants/navigations';
import { categories, informations } from '../../constants/navigations';
import type { SocialLinks } from '../../queries/getSocialLinks';
import IconInstagram from '../icons/IconInstagram';
import IconTiktok from '../icons/IconTiktok';
import IconTwitter from '../icons/IconTwitter';
import IconYoutube from '../icons/IconYoutube';
import Menu from '../parts/Menu';

const socialIcons: Record<keyof SocialLinks, any> = {
  instagram: <IconInstagram />,
  tiktok: <IconTiktok />,
  twitter: <IconTwitter />,
  youtube: <IconYoutube />,
};

interface NavMenuProps {
  socialLinks?: SocialLinks;
}

const NavMenu = ({ socialLinks }: NavMenuProps) => (
  <nav className="aci-container rounded-b-xl bg-brand py-4 text-xl shadow-xl">
    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:px-12 md:pb-12 md:pt-8">
      <Menu title="kategori" className="md:w-2/5">
        {Object.keys(categories).map((href) => (
          <Menu.Item key={href} href={href}>
            {categories[href as CategoryLinkType]}
          </Menu.Item>
        ))}
      </Menu>
      <Menu
        title="informasi"
        className="border-t-2 border-white/10 pt-4 md:w-2/5 md:border-none md:pt-0">
        {Object.keys(informations).map((href) => (
          <Menu.Item key={href} href={href}>
            {informations[href as InformationLinkType]}
          </Menu.Item>
        ))}
      </Menu>
      <Menu
        title="Media Sosial"
        className="space-x-4 border-t-2 border-white/10 pt-4 md:space-x-0 md:space-y-2 md:border-none md:pt-0 lg:space-y-3">
        {socialLinks &&
          Object.keys(socialLinks).map((social) => (
            <a
              key={social}
              className="inline-block h-8 w-8 transition-transform duration-150 ease-in-out hover:-translate-y-1 md:block md:h-10 md:w-10 lg:h-14 lg:w-14"
              href={socialLinks[social as keyof SocialLinks] as string}
              rel="noopener noreferrer"
              target="_blank">
              {socialIcons[social as keyof SocialLinks]}
            </a>
          ))}
      </Menu>
    </div>
  </nav>
);

export default NavMenu;

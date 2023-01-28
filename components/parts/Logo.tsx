import Image from 'next/image';
import Link from 'next/link';
import { SITE_NAME } from '../../constants/site-meta';
import LogoHorizontal from '../../public/aci-logo-h.png';
import LogoVertical from '../../public/aci-logo-v.png';

interface LogoProps {
  vertical?: boolean;
}

const Logo = ({ vertical }: LogoProps) => (
  <Link href="/">
    <Image
      src={vertical ? LogoVertical : LogoHorizontal}
      alt={SITE_NAME}
      className="object-cover object-center"
    />
  </Link>
);

export default Logo;

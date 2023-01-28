import { Barlow, Barlow_Semi_Condensed, Martel } from '@next/font/google';

export const fontSans = Barlow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--aci-font-sans',
});

export const fontHeading = Barlow_Semi_Condensed({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--aci-font-heading',
});

export const fontSerif = Martel({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--aci-font-serif',
});

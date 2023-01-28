export const SITE_NAME = 'Art Calls Indonesia';

export const SITE_PAGE_META = {
  title: 'Beranda',
  description:
    'Di sini tak ada sikut-sikutan. Peluang-peluang seni untuk para pegiat seni pendatang baru se-Indonesia!',
  image: `${process.env.ACI_APP_URL}aci-logo-2.png`,
  url: '/',
};

export type PageMetaType = Partial<typeof SITE_PAGE_META>;

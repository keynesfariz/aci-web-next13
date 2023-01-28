export const categories = {
  'open-calls': 'Open Calls',
  articles: 'Articles',
  'bersama-aci': 'Bersama ACI',
  direktori: 'Direktori',
};

export type CategoryLinkType = keyof typeof categories;

export const informations = {
  'tentang-aci': 'Tentang ACI',
  advertising: 'Advertising',
  'ajuan-kontak': 'Ajuan & Kontak',
  donasi: 'Donasi',
  'link-list': 'Link-List',
  bergabung: 'Bergabung',
};

export type InformationLinkType = keyof typeof informations;

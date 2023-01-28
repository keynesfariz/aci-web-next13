import directus from './directus';

export interface SocialLinks {
  instagram: string | null;
  tiktok: string | null;
  twitter: string | null;
  youtube: string | null;
}

const getSocialLinks = async () => {
  const data = await directus<SocialLinks>('social_media');
  const socialLinks: any = {};

  Object.keys(data).forEach((social) => {
    if (social !== 'id' && data[social as keyof SocialLinks] !== null) {
      socialLinks[social as keyof SocialLinks] =
        data[social as keyof SocialLinks];
    }
  });

  return socialLinks as SocialLinks;
};

export default getSocialLinks;

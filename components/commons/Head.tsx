import type { PageMetaType } from '../../constants/site-meta';
import { SITE_NAME, SITE_PAGE_META } from '../../constants/site-meta';

interface HeadProps {
  meta?: PageMetaType;
}

const Head = ({ meta }: HeadProps) => {
  const pageMeta = {
    ...SITE_PAGE_META,
    ...meta,
  };

  return (
    <>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={pageMeta.description} />
      <meta property="og:title" content={pageMeta.title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={pageMeta.description} />
      <meta
        property="og:url"
        content={`${process.env.ACI_APP_URL}${pageMeta.url}`}
      />
      <meta property="og:image" content={pageMeta.image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:title" content={pageMeta.title} />
      <meta name="twitter:description" content={pageMeta.description} />
      <title>{`${pageMeta.title} | ${SITE_NAME}`}</title>
    </>
  );
};

export default Head;

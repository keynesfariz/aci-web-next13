import Header from '../components/commons/Header';
import ScreenSize from '../components/parts/ScreenSize';
import { fontHeading, fontSans, fontSerif } from '../constants/fonts';
import getSocialLinks from '../queries/getSocialLinks';
import '../styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const socialLinks = await getSocialLinks();

  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontSans.variable} ${fontSerif.variable}`}>
      <body className="bg-brand">
        <Header socialLinks={socialLinks} />
        <main className="bg-white text-stone-700 md:text-lg lg:text-xl">
          <div className="aci-container py-4">
            <ScreenSize />
            {children}
          </div>
        </main>
        <footer className="bg-brand">
          <div className="aci-container">some footer</div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;

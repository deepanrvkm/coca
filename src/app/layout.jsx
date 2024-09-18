import SessionProviderWrapper from '@/components/provider/SessionProviderWrapper';
import { Header, Footer } from '@/components/sections';
import './globals.css';

export const metadata = {
  title: 'Coca',
  description: 'Coca by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <Header />
          {children}
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}

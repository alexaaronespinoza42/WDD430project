import '../styles/globals.css'; // ✅ Correcto (sube a /src y entra a /styles)

import { Providers } from '../providers';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Handcrafted Haven',
  description: 'A marketplace for handmade artisan products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-6">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

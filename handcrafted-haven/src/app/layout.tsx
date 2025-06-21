import '../styles/globals.css'; // ✅ Correcto (sube a /src y entra a /styles)

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

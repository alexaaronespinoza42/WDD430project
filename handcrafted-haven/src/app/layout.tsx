// src/app/layout.tsx
import '../styles/globals.css';
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
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
     <nav className="container mx-auto px-4 py-4 flex justify-between items-center text-black">
        <Link href="/">
          <span className="text-2xl font-bold">Handcrafted Haven</span>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/sellers">Sellers</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">Handcrafted Haven</Link>
        <ul className="flex gap-4">
          <li><Link href="/" className="text-2xl font-bold text-black">Home</Link></li>
          <li><Link href="/seller" className="text-2xl font-bold text-black">Seller</Link></li>
          <li><Link href="/add-product" className="text-2xl font-bold text-black">Add Product</Link></li>
        </ul>
      </nav>
    </header>
  );
}

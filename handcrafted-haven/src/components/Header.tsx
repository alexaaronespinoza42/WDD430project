import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Handcrafted Haven</Link>
        <ul className="flex gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/seller">Seller</Link></li>
          <li><Link href="/add-product">Add Product</Link></li>
        </ul>
      </nav>
    </header>
  );
}

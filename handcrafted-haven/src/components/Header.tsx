'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-600">Handcrafted Haven</Link>

      <nav className="flex items-center gap-4">
        {isLoggedIn && (
          <>
            <Link href="/account" className="hover:underline text-black">My Account</Link>
            <Link href="/add-product" className="hover:underline text-black">Add Product</Link>
            <span className="text-sm text-gray-700">{session.user?.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm"
            >
              Logout
            </button>
          </>
        )}

        {!isLoggedIn && (
          <button
            onClick={() => signIn('github', { callbackUrl: '/' })}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>
        )}
      </nav>
    </header>
  );
}

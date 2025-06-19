'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function AccountPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p className="text-center mt-10">Loading session...</p>;
  if (!session) return <p className="text-center mt-10">Please log in to view your account.</p>;

  const { user } = session;

  return (
    <section className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-3xl font-bold mb-4">My Account</h1>
      <div className="text-gray-700 space-y-4">
        {user?.image && (
          <Image
            src={user.image}
            alt="User Avatar"
            width={80}
            height={80}
            className="rounded-full"
          />
        )}
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Provider:</strong> GitHub</p>
      </div>
    </section>
  );
}

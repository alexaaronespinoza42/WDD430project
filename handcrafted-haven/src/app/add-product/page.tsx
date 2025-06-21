'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProductPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simula envío
    alert('Producto simulado creado (no se guardó nada).');

    // Redirige al home
    router.push('/');
  };

  return (
    <section className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Product Name</label>
          <input
            type="text"
            required
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Handmade Wallet"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Price ($)</label>
          <input
            type="number"
            required
            className="w-full border rounded px-3 py-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g. 20.00"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            required
            className="w-full border rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short product description..."
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Create Product
        </button>
      </form>
    </section>
  );
}

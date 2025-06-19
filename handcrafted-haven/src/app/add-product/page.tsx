'use client';

import { useState } from 'react';

export default function AddProductPage() {
  const [form, setForm] = useState({
    name: '',
    image: '',
    price: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Product added!');
      setForm({ name: '', image: '', price: '', description: '' });
    } else {
      alert('Error adding product.');
    }
  };

  return (
    <section className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add a New Product</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" className="border p-2 rounded" />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="border p-2 rounded" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Product Description" className="border p-2 rounded" />
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Publish</button>
      </form>
    </section>
  );
}

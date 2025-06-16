// src/app/products/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';

const mockProducts = [
  {
    id: '1',
    name: 'Macramé Necklace',
    price: '25.00',
    description: 'Beautifully crafted macramé necklace made with natural materials.',
    image: '/images/collar-macrame.jpg',
  },
  {
    id: '2',
    name: 'Handmade Notebook',
    price: '15.00',
    description: 'A unique handmade notebook with recycled paper and custom cover.',
    image: '/images/cuaderno-artesanal.jpg',
  },
  {
    id: '3',
    name: 'Hand-Painted Mug',
    price: '18.50',
    description: 'Colorful ceramic mug hand-painted by local artists.',
    image: '/images/taza-pintada.jpg',
  },
];

export default function ProductPage() {
  const params = useParams();
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <section className="max-w-3xl mx-auto mt-10 p-4 border rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">${product.price}</p>
      <p>{product.description}</p>
    </section>
  );
}

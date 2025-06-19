// src/app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Espera a que headers() se resuelva
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = host?.startsWith('localhost') ? 'http' : 'https';
  const base = `${protocol}://${host}`;

  const res = await fetch(`${base}/api/products`);
  const products: Product[] = await res.json();

  const product = products.find(p => p.id === params.id);
  if (!product) return notFound();

  return (
    <section className="max-w-lg mx-auto p-6">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-xl text-gray-700 mt-2">${product.price}</p>
      {product.description && <p className="mt-4">{product.description}</p>}
    </section>
  );
}

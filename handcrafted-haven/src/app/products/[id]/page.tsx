import { notFound } from 'next/navigation';
import { products } from '../../../data/products';

export default function ProductPage({ params }: { params: { id: string } }) {
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

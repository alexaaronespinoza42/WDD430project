'use client';

import { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id === params.id);
        setProduct(found || null);
      });
  }, [params.id]);

  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <section className="max-w-2xl mx-auto mt-10 p-6 border rounded shadow">
      <img src={product.image} alt={product.name} className="mb-6 w-full h-auto rounded" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-gray-700 mb-2">${product.price}</p>
      <p className="text-gray-600">{product.description}</p>
    </section>
  );
}

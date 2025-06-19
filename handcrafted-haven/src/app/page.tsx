'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <section className="text-center py-12 bg-gray-100 rounded-lg text-black">
        <h1 className="text-4xl font-bold mb-4">Handcrafted Haven</h1>
        <p className="text-lg mb-6">
          Discover and support artisans who create unique, handmade products.
        </p>
        <a
          href="#products"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Browse Products
        </a>
      </section>

      <section id="products" className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

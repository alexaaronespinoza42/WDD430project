'use client';

import ProductCard from '../../components/ProductCard';

const sellerProducts = [
  {
    id: '1',
    name: 'Macramé Necklace',
    price: '25.00',
    image: '/images/collar-macrame.jpg',
  },
  {
    id: '4',
    name: 'Woven Bracelet',
    price: '12.00',
    image: '/images/collar-macrame.jpg',
  },
];

export default function SellerPage() {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Artisan Profile</h1>
      <p className="mb-4 text-gray-700">These are your published products.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sellerProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}

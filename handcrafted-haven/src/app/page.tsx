// src/app/page.tsx
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  {
    id: '1',
    name: 'Macramé Necklace',
    price: '25.00',
    image: '/images/collar-macrame.jpg',
  },
  {
    id: '2',
    name: 'Handmade Notebook',
    price: '15.00',
    image: '/images/cuaderno-artesanal.jpg',
  },
  {
    id: '3',
    name: 'Hand-Painted Mug',
    price: '18.50',
    image: '/images/taza-pintada.jpg',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-12 bg-gray-100 rounded-lg text-black">
        <h1 className="text-4xl font-bold mb-4">Handcrafted Haven</h1>
        <p className="text-lg mb-6">
          Discover and support artisans who create unique, handmade products.
        </p>
        <a
          href="#products"
          className="inline-block px-6 py-3 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition"
        >
          Browse Products
        </a>
      </section>


      {/* Products Section */}
      <section id="products" className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}

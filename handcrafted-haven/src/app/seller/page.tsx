import ProductCard from '@/components/ProductCard';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const sellerProducts: Product[] = [
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

export default function SellerPage() {
  return (
    <section className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold mb-6">Seller Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sellerProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}        
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}

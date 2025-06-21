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

// Datos hardcoded (puedes agregar los tuyos)
const products: Product[] = [
  {
    id: '1',
    name: 'Producto 1',
    price: '10',
    image: '/images/product1.jpg',
    description: 'Descripción del producto 1',
  },
  {
    id: '2',
    name: 'Producto 2',
    price: '20',
    image: '/images/product2.jpg',
    description: 'Descripción del producto 2',
  },
  {
    id: '3',
    name: 'Producto 3',
    price: '30',
    image: '/images/product3.jpg',
    description: 'Descripción del producto 3',
  },
];

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <p className="text-center mt-10">Producto no encontrado.</p>;
  }

  return (
    <section className="max-w-2xl mx-auto mt-10 p-6 border rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="mb-6 w-full h-auto rounded"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-gray-700 mb-2">${product.price}</p>
      <p className="text-gray-600">{product.description}</p>
    </section>
  );
}

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Macramé Necklace',
    price: '25.00',
    image: '/images/collar-macrame.jpg',
    description: 'Beautiful macramé necklace.',
  },
  {
    id: '2',
    name: 'Handmade Notebook',
    price: '15.00',
    image: '/images/cuaderno-artesanal.jpg',
    description: 'Recycled paper, handmade notebook.',
  },
  {
    id: '3',
    name: 'Hand-Painted Mug',
    price: '$18.50',
    image: '/images/taza-pintada.jpg',
    description: 'Hand painted Mug, Ecuadorian culture.',
  },
];

interface Props {
  params: { id: string };
}

// **Declara async la función para cumplir con la firma esperada**
export default async function ProductPage({ params }: Props) {
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

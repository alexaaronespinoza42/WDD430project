// src/app/page.tsx
import ProductCard from '../components/ProductCard';

const productosEjemplo = [
  {
    id: '1',
    nombre: 'Collar de macramé',
    precio: '25.00',
    imagen: '/images/collar-macrame.jpg',
  },
  {
    id: '2',
    nombre: 'Cuaderno artesanal',
    precio: '15.00',
    imagen: '/images/cuaderno-artesanal.jpg',
  },
  {
    id: '3',
    nombre: 'Taza pintada a mano',
    precio: '18.50',
    imagen: '/images/taza-pintada.jpg',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-12 bg-gray-100 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Handcrafted Haven</h1>
        <p className="text-lg mb-6">
          Descubre y apoya a artesanos que crean productos únicos y hechos a mano.
        </p>
        <a
          href="#productos"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Explorar productos
        </a>
      </section>

      {/* Sección de productos */}
      <section id="productos" className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productosEjemplo.map((prod) => (
            <ProductCard
              key={prod.id}
              nombre={prod.nombre}
              precio={prod.precio}
              imagen={prod.imagen}
            />
          ))}
        </div>
      </section>
    </>
  );
}

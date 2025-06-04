// src/components/ProductCard.tsx
interface ProductCardProps {
  nombre: string;
  precio: string;
  imagen: string;
}

export default function ProductCard({ nombre, precio, imagen }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{nombre}</h3>
        <p className="text-gray-700 font-medium">${precio}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Ver detalles
        </button>
      </div>
    </div>
  );
}

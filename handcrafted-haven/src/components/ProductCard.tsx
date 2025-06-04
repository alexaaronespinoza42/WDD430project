// src/components/ProductCard.tsx
interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 font-medium">${price}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
}

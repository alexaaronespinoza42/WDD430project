import { NextRequest, NextResponse } from 'next/server';

let products = [
  {
    id: '1',
    name: 'Macramé Necklace',
    price: '25.00',
    image: '/images/collar-macrame.jpg',
    description: 'Beautifully crafted macramé necklace made with natural materials.',
  },
  {
    id: '2',
    name: 'Handmade Notebook',
    price: '15.00',
    image: '/images/cuaderno-artesanal.jpg',
    description: 'A unique handmade notebook with recycled paper and custom cover.',
  },
  {
    id: '3',
    name: 'Hand-Painted Mug',
    price: '18.50',
    image: '/images/taza-pintada.jpg',
    description: 'Colorful ceramic mug hand-painted by local artists.',
  },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const newProduct = {
    ...data,
    id: (products.length + 1).toString(),
  };
  products.push(newProduct);
  return NextResponse.json({ message: 'Product created', product: newProduct }, { status: 201 });
}
    
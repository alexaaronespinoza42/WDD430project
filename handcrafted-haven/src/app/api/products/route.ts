import { NextResponse } from 'next/server';

const products = [
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
];

export async function GET() {
  return NextResponse.json(products);
}

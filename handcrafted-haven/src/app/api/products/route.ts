import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'products.json');

export async function GET(request: NextRequest) {
  const json = fs.readFileSync(dataPath, 'utf-8');
  const products: any[] = JSON.parse(json);
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const newProduct = (await request.json()) as {
    name: string;
    image: string;
    price: string;
    description: string;
  };

  const json = fs.readFileSync(dataPath, 'utf-8');
  const products = JSON.parse(json) as Array<Record<string, any>>;

  const nextId = (products.length + 1).toString();
  const product = { id: nextId, ...newProduct };
  products.push(product);

  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));

  return NextResponse.json({ product }, { status: 201 });
}

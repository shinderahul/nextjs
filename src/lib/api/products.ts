// lib/api/products.ts

export interface Product {
  id?: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
}

export async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return null;
  }
  try {
    return await res.json();
  } catch {
    return null;
  }
}

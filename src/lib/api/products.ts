// lib/api/products.ts

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

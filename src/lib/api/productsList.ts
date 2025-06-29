// lib/api/productsList.ts

export async function getProductList() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
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

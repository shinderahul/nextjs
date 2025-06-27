import { useEffect, useState } from "react";

interface Product {
  id?: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
}

export const useProducts = (category: string = "all") => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    if (category && category !== "all") {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  return { products, loading };
};

import { useEffect, useState } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface UseProductsListOptions {
  initialData?: Product[];
}

export const useProductsList = ({
  initialData = [],
}: UseProductsListOptions = {}) => {
  const [products, setProducts] = useState<Product[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (initialData.length === 0) {
      setLoading(true);
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data: Product[]) => setProducts(data))
        .finally(() => setLoading(false));
    }
  }, [initialData.length]);

  return { products, loading };
};

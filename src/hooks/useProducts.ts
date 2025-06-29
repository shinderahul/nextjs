"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { Product } from "@/type/produts";

interface UseProductsOptions {
  category?: string;
  page?: number;
  limit?: number;
  sortBy?: "price_asc" | "price_desc" | "title_asc" | "title_desc";
  search?: string;
}

export const useProducts = ({
  category = "all",
  page = 1,
  limit = 6,
  sortBy,
  search = "",
}: UseProductsOptions = {}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    if (category !== "all") {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data: Product[] = await res.json();

        let processed = [...data];

        // Filter by debounced search
        if (debouncedSearch) {
          processed = processed.filter((p) =>
            p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
          );
        }

        // Sort logic
        if (sortBy) {
          processed.sort((a, b) => {
            switch (sortBy) {
              case "price_asc":
                return a.price - b.price;
              case "price_desc":
                return b.price - a.price;
              case "title_asc":
                return a.title.localeCompare(b.title);
              case "title_desc":
                return b.title.localeCompare(a.title);
              default:
                return 0;
            }
          });
        }

        // Pagination
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginated = processed.slice(start, end);

        setProducts(processed); // all filtered products
        setFilteredProducts(paginated); // paginated view
        setLoading(false);
      } catch (err) {
        console.error("Error loading products", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, page, limit, sortBy, debouncedSearch]);

  return {
    products: filteredProducts,
    total: products.length,
    loading,
  };
};

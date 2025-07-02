"use client";

import { createContext, useEffect, useState } from "react";
import { Product } from "@/types/products";
import { ProductContextType } from "@/types/products";
import { useDebounce } from "@/hooks/useDebounce";

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState<string>("all");
    const [search, setSearch] = useState<string>("");
    const [sort, setSort] = useState<string>("");
    const [page, setPage] = useState<number>(1);


    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const limit = 6;
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
                if (sort) {
                    processed.sort((a, b) => {
                        switch (sort) {
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
    }, [category, page, limit, sort, debouncedSearch]);

    return (
        <ProductContext.Provider
            value={{
                products: filteredProducts,
                loading,
                category,
                setCategory,
                search,
                setSearch,
                sort,
                setSort,
                page,
                setPage,
                total: products.length,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

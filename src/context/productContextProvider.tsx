"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/types/products";
import { ProductContextType } from "@/types/products";
import { useDebounce } from "@/hooks/useDebounce";

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Initialize state from URL params
    const [category, setCategory] = useState<string>(searchParams.get("category") || "all");
    const [search, setSearch] = useState<string>(searchParams.get("search") || "");
    const [sort, setSort] = useState<string>(searchParams.get("sort") || "");
    const [page, setPage] = useState<number>(parseInt(searchParams.get("page") || "1", 10));

    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const limit = 6;
    const debouncedSearch = useDebounce(search, 300);

    // Sync state to URL params
    useEffect(() => {
        const params = new URLSearchParams();
        if (category && category !== "all") params.set("category", category);
        if (search) params.set("search", search);
        if (sort) params.set("sort", sort);
        if (page > 1) params.set("page", String(page));
        router.replace(`?${params.toString()}`, { scroll: false });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, search, sort, page]);

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

                setProducts(processed);

                // Pagination
                const start = (page - 1) * limit;
                const end = start + limit;
                const paginated = processed.slice(start, end);

                setFilteredProducts(paginated);
                setLoading(false);
            } catch (err) {
                console.error("Error loading products", err);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category, page, limit, sort, debouncedSearch]);

    // Pagination helpers
    const totalPages = Math.ceil(products.length / limit);

    const goToNextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));
    const goToPrevPage = () => setPage((prev) => Math.max(prev - 1, 1));
    const goToPage = (p: number) => setPage(Math.max(1, Math.min(p, totalPages)));

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
                totalPages,
                goToNextPage,
                goToPrevPage,
                goToPage,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

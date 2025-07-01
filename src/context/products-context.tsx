"use client";

import { createContext, useEffect, useState } from "react";
import { Product } from "@/types/products";
import { ProductContextType } from "./products-types";

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("all");

    useEffect(() => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    const filteredProducts =
        category === "all"
            ? products
            : products.filter((p) => p.category === category);

    return (
        <ProductContext.Provider
            value={{
                products: filteredProducts,
                loading,
                category,
                setCategory,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

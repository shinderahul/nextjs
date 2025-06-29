"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/app/(shop)/products/productCard";
import Loader from "@/components/common/loader";
import { useState } from "react";

const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

export default function ShopAsyncPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [search, setSearch] = useState(searchParams.get("search") || "");
    const category = searchParams.get("category") || "all";
    const page = Number(searchParams.get("page") || 1);
    const sort = searchParams.get("sort") as "price_asc" | "price_desc" | "title_asc" | "title_desc";

    const { products, total, loading } = useProducts({
        category,
        page,
        limit: 6,
        sortBy: sort,
        search,
    });

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.push(`?category=${e.target.value}`);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.push(`?category=${category}&sort=${e.target.value}`);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-6">Filter Products</h1>

            <div className="flex flex-wrap gap-4 mb-6">
                {/* Category Dropdown */}
                <select value={category} onChange={handleCategoryChange} className="border p-2 rounded">
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>

                {/* Sort Dropdown */}
                <select value={sort} onChange={handleSortChange} className="border p-2 rounded">
                    <option value="">Sort</option>
                    <option value="price_asc">Price ↑</option>
                    <option value="price_desc">Price ↓</option>
                    <option value="title_asc">Title A-Z</option>
                    <option value="title_desc">Title Z-A</option>
                </select>

                {/* Search Input */}
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Search title"
                    className="border p-2 rounded w-64"
                />
            </div>

            {loading && <Loader />}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination Info */}
            <div className="mt-6">
                <p className="text-sm text-white-600">
                    Showing {(page - 1) * 6 + 1} – {Math.min(page * 6, total)} of {total}
                </p>
            </div>
        </div>
    );
}

"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/products/productCard";
import Loader from "@/components/common/loader";
import { useState } from "react";
import CategorySelect from "@/components/products/filters/categoryFilter";
import SortSelect from "@/components/products/filters/sortByDropdown";
import SearchInput from "@/components/products/filters/searchBox";
import PaginationInfo from "@/components/products/filters/pagination";

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
                <CategorySelect
                    categories={categories}
                    value={category}
                    onChange={handleCategoryChange}
                />
                <SortSelect value={sort} onChange={handleSortChange} />
                <SearchInput
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Search title"
                />
            </div>

            {loading && <Loader />}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <PaginationInfo page={page} limit={6} total={total} className="mt-6" />
        </div>
    );
}

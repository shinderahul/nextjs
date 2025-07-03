"use client";

import ProductCard from "@/components/products/productCard";
import Loader from "@/components/common/loader";
import CategorySelect from "@/components/products/filters/categoryFilter";
import SortSelect from "@/components/products/filters/sortByDropdown";
import SearchInput from "@/components/products/filters/searchBox";
import PaginationInfo from "@/components/products/filters/pagination";
import { useProductContext } from "@/hooks/useProductContext";
import ResetFilters from "@/components/products/filters/resetFilters";
import ActiveFilters from "@/components/products/filters/activeFilters";

const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

export default function ShopAsyncPage() {
    const {
        category,
        setCategory,
        search,
        setSearch,
        sort,
        setSort,
        page,
        setPage,
        products, total, loading
    } = useProductContext();


    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
        setPage(1);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(e.target.value);
        setPage(1);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(1);
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
                <ResetFilters />
            </div>

            {loading && <Loader />}
            <ActiveFilters />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <PaginationInfo page={page} limit={6} total={total} className="mt-6" />
        </div>
    );
}

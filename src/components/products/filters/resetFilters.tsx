"use client";
import { useProductContext } from "@/hooks/useProductContext";

export default function ResetFilters() {
    const {
        setSearch,
        setCategory,
        setSort,
        setPage,
    } = useProductContext();

    const resetAll = () => {
        setSearch("");
        setCategory("all");
        setSort("");
        setPage(1);
    };

    return (
        <button
            onClick={resetAll}
            className="px-4 py-2 rounded bg-gray-700 text-white font-semibold hover:bg-gray-800 transition cursor-pointer"
        >
            Reset All Filters
        </button>
    );
}

"use client";
import { useProductContext } from "@/hooks/useProductContext";

export default function ActiveFilters() {
    const {
        category,
        search,
        sort,
        page,
    } = useProductContext();

    return (
        <div className="flex gap-3 flex-wrap mb-4 text-sm">
            {category !== "all" && (
                <span className="bg-green-900 text-green-200 px-3 py-1 rounded-full font-medium capitalize">
                    Category: {category}
                </span>
            )}
            {search && (
                <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full font-medium">
                    Search: {search}
                </span>
            )}
            {sort && (
                <span className="bg-purple-900 text-purple-200 px-3 py-1 rounded-full font-medium capitalize">
                    Sort: {sort.replace("_", " ")}
                </span>
            )}
            {page > 1 && (
                <span className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full font-medium">
                    Page: {page}
                </span>
            )}
        </div>
    );
}

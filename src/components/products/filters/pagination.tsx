import { PaginationInfoProps } from "@/types/products";
import { useProductContext } from "@/hooks/useProductContext";


function scrollToTop() {
    if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

export default function PaginationInfo({
    page,
    limit,
    total,
    className = "",
}: PaginationInfoProps) {
    const start = total === 0 ? 0 : (page - 1) * limit + 1;
    const end = Math.min(page * limit, total);

    const { totalPages, goToPrevPage, goToNextPage, goToPage } = useProductContext();

    const handlePrev = () => {
        goToPrevPage();
        scrollToTop();
    };

    const handleNext = () => {
        goToNextPage();
        scrollToTop();
    };

    const handlePage = (idx: number) => {
        goToPage(idx);
        scrollToTop();
    };

    return (
        <div className={`flex flex-col items-center gap-2 ${className}`}>
            <p className="text-sm text-gray-300">
                Showing {start} - {end} of {total}
            </p>
            <div className="flex gap-2 cursor-pointer">
                <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-800 disabled:opacity-50"
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                    <button
                        key={idx + 1}
                        onClick={() => handlePage(idx + 1)}
                        className={`px-3 py-1 cursor-pointer rounded ${page === idx + 1
                            ? "bg-green-600 text-white"
                            : "bg-gray-700 text-white hover:bg-gray-800"
                            }`}
                    >
                        {idx + 1}
                    </button>
                ))}
                <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className="px-3 py-1 cursor-pointer rounded bg-gray-700 text-white hover:bg-gray-800 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
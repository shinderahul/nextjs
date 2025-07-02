import { PaginationInfoProps } from "@/types/products";


export default function PaginationInfo({
    page,
    limit,
    total,
    className = "",
}: PaginationInfoProps) {
    const start = total === 0 ? 0 : (page - 1) * limit + 1;
    const end = Math.min(page * limit, total);

    return (
        <p className={`text-sm text-gray-300 ${className}`}>
            Showing {start} – {end} of {total}
        </p>
    );
}
import { SortSelectProps } from "@/types/products";

const sortOptions = [
    { value: "", label: "Sort" },
    { value: "price_asc", label: "Price ↑" },
    { value: "price_desc", label: "Price ↓" },
    { value: "title_asc", label: "Title A-Z" },
    { value: "title_desc", label: "Title Z-A" },
];

export default function SortSelect({ value, onChange, className = "" }: SortSelectProps) {
    return (
        <select value={value} onChange={onChange} className={`border p-2 rounded ${className}`}>
            {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}
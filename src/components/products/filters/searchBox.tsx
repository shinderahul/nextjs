import { SearchInputProps } from "@/types/products";

export default function SearchInput({
    value,
    onChange,
    placeholder = "Search...",
    className = "",
}: SearchInputProps) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`border p-2 rounded w-64 ${className}`}
        />
    );
}
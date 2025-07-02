import { CategorySelectProps } from "@/types/products";

export default function CategorySelect({
    categories,
    value,
    onChange,
    className = "",
}: CategorySelectProps) {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`border p-2 rounded ${className}`}
        >
            {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
            ))}
        </select>
    );
}
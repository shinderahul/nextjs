"use client";
// ProductCardContainer.tsx
import ProductCard from "@/components/products/productCard";
import { useProducts } from "@/hooks/useProducts";

export function ProductCardContainer() {
    const { products } = useProducts();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {products?.map((product) => {
                // below is the key part of the container/presentational pattern
                // The container fetches the data and passes it to the presentational component
                // The presentational component is responsible for rendering the UI
                // This separation allows for better reusability and testability
                // It also allows for easier state management and side effects in the container
                // The presentational component can be reused in different contexts without worrying about data fetching
                // This is a simple example, but it can be extended to include more complex logic and
                // state management in the container
                // For example, you could add pagination, filtering, sorting, etc. in the container
                // The presentational component would then just receive the filtered, sorted, and paginated data
                // This pattern is commonly used in React applications to separate concerns and improve code organizations
                return <ProductCard key={product.id} product={product} />
            }
            )}
        </div>
    );
}

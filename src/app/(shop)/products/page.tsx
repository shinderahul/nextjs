// app/(shop)/products/page.tsx
import ProductGrid from "@/components/products/productGrid";

export async function generateMetadata() {
    return {
        title: "Products | ArchitectKit",
        description: "Browse all available products with pricing and descriptions.",
    };
}
export default async function ProductsList() {

    return <ProductGrid />;
}

// app/(shop)/products/page.tsx
import ProductGrid from "@/components/products/productGrid";
import { getProductList } from "@/lib/api/productsList";

export async function generateMetadata() {
    return {
        title: "Products | ArchitectKit",
        description: "Browse all available products with pricing and descriptions.",
    };
}
export default async function ProductsList() {
    const products = await getProductList();

    return <ProductGrid initialProducts={products} />;
}

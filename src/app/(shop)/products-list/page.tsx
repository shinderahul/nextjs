// app/(shop)/products/page.tsx
import ProductGrid from "@/components/products/productGrid";

export const dynamic = "force-dynamic"; // optional: disable static rendering

async function getProductsList() {
    const res = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 60 },
    });
    return res.json();
}

export default async function ProductsList() {
    const products = await getProductsList();

    return <ProductGrid initialProducts={products} />;
}

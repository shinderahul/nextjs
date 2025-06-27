"use client";
import ProductCard from "@/app/(shop)/products/productCard";
import Loader from "@/components/common/loader";
import { useProducts } from "@/hooks/useProducts";



export default function ShopAsyncPage() {
    const { products, loading } = useProducts();
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-6">Client-Side Products</h1>

            {loading && <Loader />}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

import NotFoundProduct from "@/app/(shop)/products/notFoundProduct";
import ProductCard from "@/components/products/productCard";
import { getProduct } from "@/lib/api/products";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;

    if (resolvedParams?.id) {
        return {
            title: `Product - ${resolvedParams.id}`,
            description: `Details for product ${resolvedParams.id}`,
        };
    }
}

interface ProductProps {
    params: Promise<{ id: string }>;
}

export default async function Product({ params }: ProductProps) {
    const resolvedParams = await params;
    const product = await getProduct(resolvedParams.id);

    if (!product || !product.id) {
        return <NotFoundProduct />;
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-8">
            <ProductCard product={product} />
        </main>
    );
}
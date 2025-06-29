import NotFoundProduct from "@/app/(shop)/products/notFoundProduct";
import ProductCard from "@/components/products/productCard";
import { getProduct } from "@/lib/api/products";

export async function generateMetadata({ params }: { params: { id: string } }) {
    if (params?.id) {
        return {
            title: `Product - ${params.id}`,
            description: `Details for product ${params.id}`,
        };
    }
}

interface ProductProps {
    params: { id: string };
}

export default async function Product({ params }: ProductProps) {
    const product = await getProduct(params.id);

    if (!product || !product.id) {
        return <NotFoundProduct />;
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-8">
            <ProductCard product={product} />
        </main>
    );
}

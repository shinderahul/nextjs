import Image from "next/image";
import NotFoundProduct from "@/app/(shop)/products/notFoundProduct";

export async function generateMetadata({ params }: { params: { id: string } }) {
    return {
        title: `Product - ${params.id}`,
        description: `Details for product ${params.id}`,
    };
}

interface ProductProps {
    params: { id: string };
}

async function getProduct(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
        return null;
    }
    try {
        return await res.json();
    } catch {
        return null;
    }
}

export default async function Product({ params }: ProductProps) {
    const product = await getProduct(params.id);

    if (!product || !product.id) {
        return <NotFoundProduct />;
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-8">
            <div className="max-w-xl w-full bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700">
                <h1 className="text-2xl font-bold mb-4 text-white">{product.title}</h1>
                <Image
                    src={product.image}
                    alt={product.title}
                    width={160}
                    height={160}
                    className="object-contain mx-auto mb-4 bg-gray-800 rounded"
                />
                <p className="text-gray-300 mb-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold text-green-400">${product.price}</span>
                    <span className="text-sm bg-gray-800 text-gray-200 rounded px-2 py-1">{product.category}</span>
                </div>
            </div>
        </main>
    );
}

// SSG page in App Router
import React from "react";

type Product = {
    id: number;
    title: string;
};

async function getProducts(): Promise<Product[]> {
    const res = await fetch("https://fakestoreapi.com/products", {
        // This is the default behavior — SSG/static cache
        cache: "force-cache",
    });
    return res.json();
}

export default async function SSGProductsPage() {
    const products = await getProducts();

    return (
        <main className="min-h-screen bg-gradient-to-b from-green-50 to-white p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
                    Static Site Generated Products List
                </h1>
                <ul className="space-y-4">
                    {products.map((product) => (
                        <li
                            key={product.id}
                            data-testid="product-item"
                            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
                        >
                            <p className="text-lg font-medium text-gray-800">{product.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

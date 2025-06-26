import Link from "next/link";

export default function NotFoundProduct() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-8">
            <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700 max-w-lg w-full flex flex-col items-center">
                <h2 className="text-3xl font-bold text-red-400 mb-4">Product Not Found</h2>
                <p className="text-gray-300 mb-4 text-center">
                    The product you are looking for does not exist.<br />
                    Try adding a number after <span className="font-mono text-green-400">/products/</span> in the URL (e.g., <span className="font-mono text-green-400">/products/1</span>).
                </p>
                <Link
                    href="/products/1"
                    className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                >
                    Go to Product 1
                </Link>
            </div>
        </main>
    );
}
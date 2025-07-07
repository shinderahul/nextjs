import { ProductCardContainer } from "@/components/patterns/containerPresentational/productCardContainer";
import Link from "next/link";

export default function ContainerPresentationalPatternPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8 flex items-center justify-center">
            <div className="w-full max-w-6xl">
                <h1 className="text-2xl font-bold text-white mb-6">Container/Presentational Pattern Example</h1>

                <h3 className="text-lg font-semibold text-green-400 mt-6 mb-2">What is it?</h3>
                <ul className="list-disc list-inside mb-6 text-gray-300 pl-4">
                    <li>
                        <span className="font-semibold text-white">Container Components:</span> Handle logic, state, data fetching.
                    </li>
                    <li>
                        <span className="font-semibold text-white">Presentational Components:</span> Handle rendering and styling only.
                    </li>
                </ul>

                <h3 className="text-lg font-semibold text-green-400 mt-6 mb-2">Why use it?</h3>
                <ul className="list-disc list-inside mb-8 text-gray-300 pl-4">
                    <li>Clear separation of concerns.</li>
                    <li>Better reusability &amp; testability.</li>
                    <li>Scalable for large apps.</li>
                </ul>
                <p className="mb-8 px-4 py-3 rounded bg-gray-800 text-gray-200 border-l-4 border-green-500 shadow">
                    <span className="font-semibold text-green-400">To read more:</span> <span className="font-mono text-sm">src/components/patterns/container-presentational/productCardContainer.tsx</span>
                </p>

                <ProductCardContainer />

                <div className="mt-10">
                    <Link
                        href="/component-design-patterns"
                        className="inline-block px-6 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                    >
                        ← Back to Patterns
                    </Link>
                </div>

            </div>
        </main>
    )
}
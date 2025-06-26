import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <h1 className="text-6xl font-extrabold text-red-400 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-white mb-2">Page Not Found</h2>
            <p className="text-gray-400 mb-8 text-center max-w-md">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                className="px-6 py-2 rounded bg-red-400 text-white font-semibold hover:bg-red-600 transition"
            >
                Go Home
            </Link>
        </div>
    );
}

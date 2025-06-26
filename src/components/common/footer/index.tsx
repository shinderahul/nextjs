

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-700 py-6 text-center text-sm text-gray-600">
            <p>
                © {new Date().getFullYear()} Rahul Shinde • All rights reserved.
            </p>
            <div className="mt-2 flex justify-center gap-4 text-blue-500">
                <Link href="/about" prefetch className="hover:underline">
                    About
                </Link>
                <Link href="/contact" prefetch className="hover:underline">
                    Contact
                </Link>
                <a
                    href="https://github.com/shinderahul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    GitHub
                </a>
            </div>
        </footer>
    );
}

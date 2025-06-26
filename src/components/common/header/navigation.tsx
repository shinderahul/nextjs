"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center gap-4">
            <div className="relative">
                <button
                    className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition"
                    onClick={() => setOpen((v) => !v)}
                    onBlur={() => setTimeout(() => setOpen(false), 100)}
                >
                    Features
                </button>
                {open && (
                    <div className="absolute right-0 mt-2 w-52 text-white bg-gray-800 rounded shadow-lg z-10">
                        <Link
                            href="/ssg"
                            className="block px-4 py-2 hover:bg-gray-700"
                            onClick={() => setOpen(false)}
                        >
                            Static Site Generated
                        </Link>
                        <Link
                            href="/ssr"
                            className="block px-4 py-2 hover:bg-gray-700"
                            onClick={() => setOpen(false)}
                        >
                            Server-Side Rendered
                        </Link>
                    </div>
                )}
            </div>
            <Link href="/about" className="mr-4">
                About
            </Link>
            <Link href="/contact">
                Contact
            </Link>
        </nav>
    );
};

export default Navigation;
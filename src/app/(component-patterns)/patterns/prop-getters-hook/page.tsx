'use client';
import { useInput } from "@/hooks/useInput";
import Link from "next/link";


export default function PropGettersHookPatternPage() {
    const username = useInput({ initialValue: "" });
    const email = useInput({ initialValue: "" });

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8 flex items-center justify-center">
            <div className="w-full max-w-3xl">
                <h1 className="text-2xl font-bold text-white mb-6">Prop Getters Hook</h1>

                <h3 className="text-lg font-semibold text-green-400 mt-6 mb-2">What is it?</h3>
                <ul className="list-disc list-inside mb-6 text-gray-300 pl-4">
                    <li>
                        <span className="font-semibold text-white">Prop Getters:</span> A pattern where a hook returns a function that supplies all necessary props for a component, merging internal logic with user-provided props.
                    </li>
                    <li>
                        Useful for reusable hooks/components that need to expose event handlers, accessibility, and more, while letting the consumer extend or override props.
                    </li>
                </ul>

                <h3 className="text-lg font-semibold text-green-400 mt-6 mb-2">Why use it?</h3>
                <ul className="list-disc list-inside mb-8 text-gray-300 pl-4">
                    <li>Encapsulates logic and state, but gives consumers full control over props.</li>
                    <li>Prevents prop clobbering and makes advanced composition easy.</li>
                    <li>Great for building accessible, flexible UI primitives and hooks.</li>
                </ul>
                <p className="mb-8 px-4 py-3 rounded bg-gray-800 text-gray-200 border-l-4 border-green-500 shadow">
                    <span className="font-semibold text-green-400">To read more:</span>{" "}
                    <span className="font-mono text-sm">src/app/(component-patterns)/patterns/prop-getters-hook/page.tsx</span>
                </p>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-green-400 mt-6 mb-2">Prop Getter Input Example</h3>
                    <input
                        {...username.getInputProps({
                            placeholder: "Username",
                            className:
                                "w-full px-4 py-2 mb-3 rounded border border-gray-700 bg-gray-900 text-white focus:outline-none focus:border-green-500 transition",
                        })}
                    />
                    <input
                        {...email.getInputProps({
                            placeholder: "Email",
                            className:
                                "w-full px-4 py-2 rounded border border-gray-700 bg-gray-900 text-white focus:outline-none focus:border-green-500 transition",
                        })}
                    />
                    <div className="mt-2 text-gray-400 text-sm">
                        Username: <span className="font-mono">{username.value}</span>
                        <br />
                        Email: <span className="font-mono">{email.value}</span>
                    </div>
                </div>

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
    );
}
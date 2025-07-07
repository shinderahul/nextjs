'use client';
import { SmartInput } from "@/components/patterns/controlledVsUncontrolled/smartInput";
import Link from "next/link";
import React, { useState } from "react";

export default function ControlledVsUncontrolledPatternPage() {
    const [name, setName] = useState("");

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8 flex items-center justify-center">
            <div className="w-full max-w-3xl">
                <h1 className="text-2xl font-bold text-white mb-6">Controlled vs Uncontrolled Components</h1>

                <h3 className="text-lg font-semibold text-green-400 mt-6 mb-2">What is it?</h3>
                <ul className="list-disc list-inside mb-6 text-gray-300 pl-4">
                    <li>
                        <span className="font-semibold text-white">Controlled Components:</span> React state is the &quot;single source of truth&quot;. The component’s value is managed by React via <span className="font-mono">useState</span> and updated via <span className="font-mono">onChange</span>.
                    </li>
                    <li>
                        <span className="font-semibold text-white">Uncontrolled Components:</span> The DOM itself keeps track of the input state. You can use <span className="font-mono">defaultValue</span> and refs to access the value.
                    </li>
                </ul>

                <h3 className="text-lg font-semibold text-green-400 mt-6 mb-2">Why use it?</h3>
                <ul className="list-disc list-inside mb-8 text-gray-300 pl-4">
                    <li>Controlled: Predictable, easy to validate, and integrates well with React state and forms.</li>
                    <li>Uncontrolled: Simpler for quick forms, less code, and sometimes better performance for large forms.</li>
                </ul>
                <p className="mb-8 px-4 py-3 rounded bg-gray-800 text-gray-200 border-l-4 border-green-500 shadow">
                    <span className="font-semibold text-green-400">To read more:</span>{" "}
                    <span className="font-mono text-sm">src/components/patterns/controlledVsUncontrolled/smartInput.tsx</span>
                </p>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-green-400 mt-6 mb-2">Controlled Input Example</h3>
                    <SmartInput value={name} onChange={(e) => setName(e.target.value)} />
                    <div className="mt-2 text-gray-400 text-sm">Value in React state: <span className="font-mono">{name}</span></div>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-blue-400 mt-6 mb-2">Uncontrolled Input Example</h3>
                    <SmartInput defaultValue="Hello" />
                    <div className="mt-2 text-gray-400 text-sm">Value managed internally by the component.</div>
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
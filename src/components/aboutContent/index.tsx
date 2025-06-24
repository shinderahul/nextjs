'use client';

import React from 'react';

export default function AboutContent() {
    return (
        <section className="max-w-3xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg text-gray-400 mb-6">
                Wen&#39;re a team of passionate frontend engineers focused on building scalable, performant, and delightful user interfaces.
                Our core mission is to architect seamless web experiences using modern technologies like React, Next.js, and TypeScript.
            </p>

            <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li><strong>Performance First</strong> – Optimize everything from load time to runtime.</li>
                <li><strong>Scalability</strong> – Modular design that grows with the product.</li>
                <li><strong>Clean Code</strong> – Maintainable, readable, and testable components.</li>
                <li><strong>Collaboration</strong> – Design with developers, product managers, and users in mind.</li>
            </ul>

            <p className="mt-6 text-sm text-gray-500 italic">
                &quot;Great frontend isn&#39;t just about pretty UIs — it&apos;s about engineering them to last.&quot;
            </p>
        </section>
    );
}

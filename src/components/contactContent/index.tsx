'use client';

import React from 'react';

export default function ContactContent() {
    return (
        <section className="max-w-2xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
                Whether you&apos;re looking to collaborate, have questions about frontend architecture, or just want to say hi — we&apos;d love to hear from you!
            </p>

            <div className="space-y-4">
                <p>
                    📧 <strong>Email:</strong> rahulbshinde89@gmail.com
                </p>
                <p>
                    🧑‍💼 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/shinde89" target="_blank" className="text-blue-600 underline">Rahul Shinde</a>
                </p>
                <p>
                    🌍 <strong>Location:</strong> Mumbai, India
                </p>
            </div>

            <p className="mt-6 text-sm text-gray-400 italic">
                &quot;The best architectures come from open conversations.&quot;
            </p>
        </section>
    );
}

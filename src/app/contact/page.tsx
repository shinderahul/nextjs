'use client';
import Loader from "@/components/common/loader";
import dynamic from "next/dynamic";
import React from "react";

const ContactContent = dynamic(() => import('@/components/contactContent'), {
    loading: () => <Loader />,
    ssr: false,
});

export default function Contact() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8">
            <ContactContent />
        </main>
    );
}

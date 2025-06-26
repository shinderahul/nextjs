"use client";
import Loader from "@/components/common/loader";
import dynamic from "next/dynamic";
import React from "react";

const AboutContent = dynamic(() => import('@/components/aboutContent'), {
    loading: () => <Loader />,
    ssr: false,
});

export default function About() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-8">
            <AboutContent />
        </main>
    );
}

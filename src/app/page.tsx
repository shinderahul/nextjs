"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Loader from "@/components/common/loader";
import { Suspense, useState } from "react";

const ChartComponent = dynamic(() => import("@/components/chartComponent"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Navigation Links */}
        <div className="flex items-center justify-center gap-2">
          <Link
            href="/ssg"
            className="px-4 py-2 rounded-lg bg-green-100 text-green-800 font-semibold hover:bg-green-200 transition"
          >
            Static Site Generated
          </Link>
          <span className="mx-2 text-gray-400 font-bold">|</span>
          <Link
            href="/ssr"
            className="px-4 py-2 rounded-lg bg-blue-100 text-blue-800 font-semibold hover:bg-blue-200 transition"
          >
            Server-Side Rendered
          </Link>
        </div>

        {/* Chart Section */}
        <div className="flex flex-col items-center justify-center w-full">
          {showMore ? (
            <Suspense fallback={<Loader />}>
              <ChartComponent />
            </Suspense>
          ) : (
            <button
              className="mt-4 px-4 py-2 text-black cursor-pointer rounded bg-gray-200 hover:bg-gray-300 transition"
              onClick={() => setShowMore(true)}
            >
              Show Chart
            </button>
          )}
          {showMore && (
            <button
              className="mt-2 px-3 py-1 text-sm text-gray-700 rounded bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => setShowMore(false)}
            >
              Hide Chart
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

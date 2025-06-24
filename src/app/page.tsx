"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Loader from "@/components/common/loader";
import { Suspense, useState } from "react";

const ChartComponent = dynamic(() => import("@/components/chartComponent"), {
  ssr: false,
});

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>
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

        <div className="flex flex-col items-center justify-center w-full">
          {showMore ? (
            <Suspense fallback={<Loader />}>
              <ChartComponent />
            </Suspense>
          ) : (
            <button
              className="mt-4 px-4 py-2 text-black cursor-pointer rounded bg-gray-200 hover:bg-gray-300 transition"
              onClick={() => setShowMore(!showMore)}
            >
              Show Chart
            </button>
          )}
        </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
          prefetch
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          About
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
          prefetch
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Contact
        </Link>
        {/* <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </Link> */}
      </footer>
    </div>
  );
}

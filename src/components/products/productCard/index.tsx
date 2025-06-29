"use client";
import { ProductProps } from "@/type/produts";
import Image from "next/image";



export default function ProductCard({ product: { title, image, description, price, category } }: ProductProps) {

    return (
        <div className="max-w-xl w-full bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700">
            <h1 className="text-2xl font-bold mb-4 text-white">{title}</h1>
            <Image
                src={image}
                alt={title}
                width={160}
                height={160}
                className="object-contain mx-auto mb-4 bg-gray-800 rounded"
            />
            <p className="text-gray-300 mb-2">{description}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-green-400">${price}</span>
                <span className="text-sm bg-gray-800 text-gray-200 rounded px-2 py-1">{category}</span>
            </div>
        </div>
    );
}

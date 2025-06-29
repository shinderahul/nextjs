"use client";

import { useProductsList, Product } from "@/hooks/useProductsList";
import ProductCard from "@/components/products/productCard";
import Loader from "@/components/common/loader";

interface ProductGridProps {
  initialProducts: Product[];
}

export default function ProductGrid({ initialProducts }: ProductGridProps) {
  const { products, loading } = useProductsList({ initialData: initialProducts });

  if (loading) return <Loader />;

  return (
    <div className="flex justify-center w-full p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

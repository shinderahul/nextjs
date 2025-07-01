"use client";
import { useProductContext } from "@/hooks/useProductContext";
import ProductCard from "@/components/products/productCard";
import Loader from "@/components/common/loader";

export default function ProductGrid() {
  const { products, loading, category, setCategory } = useProductContext();
  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];
  if (loading) return <Loader />;

  return (
    <>
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded flex justify-center w-sm m-8 mb-0">
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <div className="flex justify-center w-full p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

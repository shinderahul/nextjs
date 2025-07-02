import { useContext } from "react";
import { ProductContextType } from "@/types/products";
import { ProductContext } from "@/context/products-context";

export const useProductContext = (): ProductContextType => {
  const ctx = useContext(ProductContext);
  if (!ctx)
    throw new Error("useProductContext must be used within a ProductProvider");
  return ctx;
};

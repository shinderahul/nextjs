import { Product } from "@/types/products";

export interface ProductContextType {
  products: Product[];
  loading: boolean;
  category: string;
  setCategory: (category: string) => void;
}

import { ProductProvider } from "@/context/products-context";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <ProductProvider>{children}</ProductProvider>;
}

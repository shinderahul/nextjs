import { ProductProvider } from "@/context/productContextProvider";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <ProductProvider>{children}</ProductProvider>;
}

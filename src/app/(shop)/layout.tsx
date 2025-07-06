import Loader from "@/components/common/loader";
import { ProductProvider } from "@/context/productContextProvider";
import { Suspense } from "react";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<Loader />}><ProductProvider>{children}</ProductProvider></Suspense>;
}

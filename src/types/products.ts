export interface Product {
  id?: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface ProductProps {
  product: Product;
}

export interface UseProductsListOptions {
  initialData?: Product[];
}

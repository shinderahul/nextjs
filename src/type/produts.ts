export interface Product {
  id?: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
}

export interface ProductProps {
  product: Product;
}

export interface UseProductsListOptions {
  initialData?: Product[];
}

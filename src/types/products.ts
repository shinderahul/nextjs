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

export interface ProductContextType {
  products: Product[];
  loading: boolean;
  category: string;
  setCategory: (category: string) => void;
}

export interface CategorySelectProps {
  categories: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export interface SortSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export interface PaginationInfoProps {
  page: number;
  limit: number;
  total: number;
  className?: string;
}

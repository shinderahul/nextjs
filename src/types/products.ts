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
  total: number;
  category: string;
  setCategory: (category: string) => void;
  search: string;
  setSearch: (val: string) => void;
  sort: string;
  setSort: (val: string) => void;
  page: number;
  setPage: (val: number) => void;
  totalPages: number;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  goToPage: (p: number) => void;
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

export type sortByOptions =
  | "price_asc"
  | "price_desc"
  | "title_asc"
  | "title_desc"
  | "";

export interface UseProductsOptions {
  category?: string;
  page?: number;
  limit?: number;
  sortBy?: sortByOptions;
  search?: string;
}

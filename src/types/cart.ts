import type { SearchResult } from "./search";

export interface CartItem extends SearchResult {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: SearchResult) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}
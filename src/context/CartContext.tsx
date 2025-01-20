import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { CartItem, CartContextType } from '@/types/cart';
import type { SearchResult } from '@/types/search';
import { toast } from 'sonner';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((product: SearchResult) => {
    console.log('🛒 Adding item to cart:', product);
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      if (existingItem) {
        console.log('📝 Item already exists, updating quantity');
        toast.info("Item already in cart. Quantity increased.");
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      console.log('✨ New item added to cart');
      toast.success("Item added to cart");
      return [...currentItems, { ...product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    console.log('🗑️ Removing item from cart:', productId);
    setItems(currentItems => currentItems.filter(item => item.id !== productId));
    toast.info("Item removed from cart");
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) return;
    console.log(`📊 Updating quantity for item ${productId} to ${quantity}`);
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    console.log('🧹 Clearing cart');
    setItems([]);
    toast.info("Cart cleared");
  }, []);

  const total = useMemo(() => {
    const calculatedTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log('💰 Cart total calculated:', calculatedTotal);
    return calculatedTotal;
  }, [items]);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
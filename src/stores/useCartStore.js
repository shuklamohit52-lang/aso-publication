import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: JSON.parse(localStorage.getItem('cart')) || [],
  
  addToCart: (book) => {
    const items = get().items;
    const existingItem = items.find(item => item.id === book.id);
    
    let updatedItems;
    if (existingItem) {
      updatedItems = items.map(item =>
        item.id === book.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedItems = [...items, { ...book, quantity: 1 }];
    }
    
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    set({ items: updatedItems });
  },
  
  removeFromCart: (bookId) => {
    const updatedItems = get().items.filter(item => item.id !== bookId);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    set({ items: updatedItems });
  },
  
  updateQuantity: (bookId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(bookId);
      return;
    }
    
    const updatedItems = get().items.map(item =>
      item.id === bookId ? { ...item, quantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    set({ items: updatedItems });
  },
  
  clearCart: () => {
    localStorage.setItem('cart', JSON.stringify([]));
    set({ items: [] });
  },
  
  getTotal: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getItemCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0);
  }
}));

export default useCartStore;

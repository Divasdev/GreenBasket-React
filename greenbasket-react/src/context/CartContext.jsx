import { createContext, useContext, useState } from 'react';

// CartContext provides global cart state across the app
const CartContext = createContext();

export function CartProvider({ children }) {
   const [cartItems, setCartItems] = useState([]);

   // Add a product to the cart
   const addToCart = (product) => {
      setCartItems((prev) => {
         const existing = prev.find((item) => item.id === product.id);
         if (existing) {
            // Increment quantity if already in cart
            return prev.map((item) =>
               item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            );
         }
         return [...prev, { ...product, qty: 1 }];
      });
   };

   // Remove a product from the cart entirely
   const removeFromCart = (productId) => {
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
   };

   // Change the quantity of an item (set to 0 to remove)
   const updateQty = (productId, qty) => {
      if (qty <= 0) {
         removeFromCart(productId);
      } else {
         setCartItems((prev) =>
            prev.map((item) => (item.id === productId ? { ...item, qty } : item))
         );
      }
   };

   // Clear the entire cart
   const clearCart = () => setCartItems([]);

   // Total number of items in the cart (shown on cart badge)
   const cartCount = cartItems.reduce((total, item) => total + item.qty, 0);

   // Total price of everything in the cart
   const cartTotal = cartItems.reduce(
      (total, item) => total + item.price * item.qty,
      0
   );

   return (
      <CartContext.Provider
         value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, cartCount, cartTotal }}
      >
         {children}
      </CartContext.Provider>
   );
}

// Custom hook — use this inside any component: const { cartItems, addToCart } = useCart();
export function useCart() {
   return useContext(CartContext);
}

export default CartContext;

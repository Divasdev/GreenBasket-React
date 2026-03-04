import { createContext, useContext, useState } from 'react';

// WishlistContext provides global wishlist state across the app
const WishlistContext = createContext();

export function WishlistProvider({ children }) {
   const [wishlistItems, setWishlistItems] = useState([]);

   // Toggle a product in/out of the wishlist
   const toggleWishlist = (product) => {
      setWishlistItems((prev) => {
         const exists = prev.find((item) => item.id === product.id);
         if (exists) {
            return prev.filter((item) => item.id !== product.id);
         }
         return [...prev, product];
      });
   };

   // Check if a product is already in the wishlist
   const isWishlisted = (productId) =>
      wishlistItems.some((item) => item.id === productId);

   const wishlistCount = wishlistItems.length;

   return (
      <WishlistContext.Provider
         value={{ wishlistItems, toggleWishlist, isWishlisted, wishlistCount }}
      >
         {children}
      </WishlistContext.Provider>
   );
}

// Custom hook — use this inside any component: const { toggleWishlist, isWishlisted } = useWishlist();
export function useWishlist() {
   return useContext(WishlistContext);
}

export default WishlistContext;

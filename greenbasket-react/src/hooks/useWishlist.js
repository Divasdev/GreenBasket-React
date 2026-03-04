import { useContext } from 'react';
import WishlistContext from '../context/WishlistContext';

/**
 * useWishlist – shortcut hook for accessing WishlistContext.
 * Import and use this in any component:
 *   const { toggleWishlist, isWishlisted, wishlistCount } = useWishlist();
 */
function useWishlist() {
   return useContext(WishlistContext);
}

export default useWishlist;

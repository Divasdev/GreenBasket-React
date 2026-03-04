import { useContext } from 'react';
import CartContext from '../context/CartContext';

/**
 * useCart – shortcut hook for accessing CartContext.
 * Import and use this in any component:
 *   const { cartItems, addToCart, cartCount } = useCart();
 */
function useCart() {
   return useContext(CartContext);
}

export default useCart;

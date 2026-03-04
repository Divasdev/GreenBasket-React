// Header / Navbar Component
// TODO: Convert the <header> section from index.html
// - Top bar with phone number, promo text, and social links
// - Logo + location selector + search bar + icon links
// - Bottom nav with Browse Categories + navigation links + Recently Viewed dropdown
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import styles from './Header.module.css';

function Header() {
   const { cartCount } = useCart();
   const { wishlistCount } = useWishlist();

   return (
      <header className={styles.header}>
         {/* TODO: Build your header here */}
         <p>Header – build me! (Cart: {cartCount} | Wishlist: {wishlistCount})</p>
         <nav>
            <Link to="/">Home</Link> |{' '}
            <Link to="/shop">Shop</Link> |{' '}
            <Link to="/cart">Cart ({cartCount})</Link> |{' '}
            <Link to="/wishlist">Wishlist</Link> |{' '}
            <Link to="/about">About</Link>
         </nav>
      </header>
   );
}

export default Header;

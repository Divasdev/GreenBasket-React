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
      <>
         <header className={styles.header}>


            {<div className="topmost-div">
               <span className="call-us">Call-Us-:+91 7005869756</span>
               <span className="promo-tag">
                  Sign up and GET 25% OFF for your first order.{" "}
                  <a href="" className="signuplink">
                     Sign Up now
                  </a>
               </span>
               <div className="social-links">
                  <a href="">
      <img
         src="../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/facebook.png"
         className="facebook-logo"
         alt="facebook"
      />
                  </a>
                  <a href="">
         <img
            src="../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/instagram.png"
            className="instagram-logo"
            alt="instagram"
         />
                  </a>
                  <a href="">
            <img
               src="../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/twitter.png"
               className="twitter-logo"
               alt="twitter"
            />
                  </a>
               </div>
            </div>
            }




            <p>Header – build me! (Cart: {cartCount} | Wishlist: {wishlistCount})</p>
            <nav>
               <Link to="/">Home</Link> |{' '}
               <Link to="/shop">Shop</Link> |{' '}
               <Link to="/cart">Cart ({cartCount})</Link> |{' '}
               <Link to="/wishlist">Wishlist</Link> |{' '}
               <Link to="/about">About</Link>
            </nav>
         </header>
      </>
   );
}

export default Header;

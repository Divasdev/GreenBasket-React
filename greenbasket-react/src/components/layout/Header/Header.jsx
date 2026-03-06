import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import styles from './Header.module.css';

// Image imports
import facebook from '../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/facebook.png';
import instagram from '../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/instagram.png';
import twitter from '../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/twitter.png';
import logo from '../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/logo.jpeg';
import searchIcon from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/search.png';
import ecomIcon from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/ecom.png';
import cartIcon from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/cart.png';
import userIcon from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/user.png';
import moreIcon from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/more.png';
import apple from '../../../assets/assets/images/products/fruits/apple.png';
import mango from '../../../assets/assets/images/products/fruits/mango.png';
import banana from '../../../assets/assets/images/products/fruits/banana.png';

function Header() {
   const { cartCount } = useCart();
   const { wishlistCount } = useWishlist();
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <header className={styles.header}>

         {/* TOP BAR */}
         <div className="topmost-div">
            <span className="call-us">Call-Us-: +91 7005869756</span>
            <span className="promo-tag">
               Sign up and GET 25% OFF for your first order.{' '}
               <Link to="/coming-soon" className="signuplink">Sign Up now</Link>
            </span>
            <div className="social-links">
               <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} className="facebook-logo" alt="facebook" />
               </a>
               <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} className="instagram-logo" alt="instagram" />
               </a>
               <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} className="twitter-logo" alt="twitter" />
               </a>
            </div>
         </div>

         {/* MAIN HEADER */}
         <div className="header-container">

            {/* LEFT: logo + location */}
            <div className="header-left">
               <Link to="/">
                  <img src={logo} className="logosvg" alt="GreenBasket logo" />
               </Link>
               <Link to="/" className="logo">GreenBasket</Link>
               <div className="location-box">
                  <label className="location-label" htmlFor="location-select">Location</label>
                  <select id="location-select" className="location-select">
                     <option>New York, USA</option>
                     <option>Los Angeles, USA</option>
                     <option>Chicago, USA</option>
                  </select>
               </div>
            </div>

            {/* CENTER: search bar */}
            <div className="search-area">
               <img src={searchIcon} className="search-icon" alt="" aria-hidden="true" />
               <input
                  type="text"
                  className="search-input"
                  placeholder="Search for products"
                  aria-label="Search products"
               />
            </div>

            {/* RIGHT: icons */}
            <div className="header-right">
               <Link to="/wishlist" className="icon-link">
                  <img src={ecomIcon} className="wishlisticon" alt="wishlist" />
                  <span className="icon-label">Wishlist {wishlistCount > 0 && `(${wishlistCount})`}</span>
               </Link>
               <Link to="/cart" className="cart-link icon-link" title="Cart">
                  <img src={cartIcon} className="carticon" alt="cart" />
                  <span className="cart-badge">{cartCount}</span>
                  <span className="icon-label">Cart</span>
               </Link>
               <Link to="/my-account" className="icon-link">
                  <img className="usericon" src={userIcon} alt="user account" />
                  <span className="icon-label">Account</span>
               </Link>
            </div>
         </div>

         {/* BOTTOM NAV */}
         <section className="bottom-header-container">

            {/* Hamburger button (replaces the old checkbox hack) */}
            <div className="browsediv">
               <button
                  className="browse"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-expanded={isMenuOpen}
                  aria-label="Browse all categories"
               >
                  <img src={moreIcon} width="20" alt="" aria-hidden="true" />
                  Browse All Categories
               </button>
            </div>

            {/* Mobile menu overlay */}
            {isMenuOpen && (
               <div
                  className={styles.menuOverlay}
                  onClick={() => setIsMenuOpen(false)}
                  aria-hidden="true"
               />
            )}

            <nav className={`bottom-nav ${isMenuOpen ? styles.menuOpen : ''}`}>
               <ul className="nav-list">
                  <li><NavLink to="/" end>Home</NavLink></li>
                  <li><NavLink to="/shop">Shop</NavLink></li>
                  <li><NavLink to="/coming-soon">Fruits</NavLink></li>
                  <li><NavLink to="/coming-soon">Vegetables</NavLink></li>
                  <li><NavLink to="/coming-soon">Beverages</NavLink></li>
                  <li><NavLink to="/about">About Us</NavLink></li>
                  <li><NavLink to="/coming-soon">Blogs</NavLink></li>
               </ul>
            </nav>

            {/* Recently Viewed dropdown */}
            <div className="recently-viewed">
               <button className="recent-btn">
                  Recently Viewed <span className="caret">▾</span>
               </button>
               <div className="recent-dropdown">
                  <ul className="recent-list">
                     <li className="recent-item">
                        <img src={apple} alt="Red Apple" className="recent-thumb" />
                        <div className="recent-meta">
                           <strong>Red Apple</strong>
                           <span className="price">₹45 / kg</span>
                        </div>
                     </li>
                     <li className="recent-item">
                        <img src={banana} alt="Banana" className="recent-thumb" />
                        <div className="recent-meta">
                           <strong>Banana</strong>
                           <span className="price">₹30 / kg</span>
                        </div>
                     </li>
                     <li className="recent-item">
                        <img src={mango} alt="Mango" className="recent-thumb" />
                        <div className="recent-meta">
                           <strong>Mango</strong>
                           <span className="price">₹60</span>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </section>

      </header>
   );
}

export default Header;

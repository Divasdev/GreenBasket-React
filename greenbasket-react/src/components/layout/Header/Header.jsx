// Header / Navbar Component
// TODO: Convert the <header> section from index.html
// - Top bar with phone number, promo text, and social links
// - Logo + location selector + search bar + icon links
// - Bottom nav with Browse Categories + navigation links + Recently Viewed dropdown
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import styles from './Header.module.css';

import facebook from '../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/facebook.png';
import instagram from '../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/instagram.png';
import twitter from '../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/twitter.png';
import logo from '../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/logo.jpeg';

import search from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/search.png';

import ecom from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/ecom.png';

import cart from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/cart.png';


import user from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/user.png';

import more from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/more.png';

import apple from '../../../assets/assets/images/products/fruits/apple.png';


import mango from '../../../assets/assets/images/products/fruits/mango.png';

import banana from '../../../assets/assets/images/products/fruits/banana.png';

function Header() {
   const { cartCount } = useCart();
   const { wishlistCount } = useWishlist();

   return (
      <>
         <header className={styles.header}>

            {/*TOP-BAR*/}
            <div className="topmost-div">
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
                        src={facebook}
                        className="facebook-logo"
                        alt="facebook"
                     />
                  </a>
                  <a href="">
                     <img
                        src={instagram}
                        className="instagram-logo"
                        alt="instagram"
                     />
                  </a>
                  <a href="">
                     <img
                        src={twitter}
                        className="twitter-logo"
                        alt="twitter"
                     />
                  </a>
               </div>
            </div>

            {/*MAIN-HEADER*/}

            <div className="header-container">
               {/* LEFT: logo + location */}
               <div className="header-left">
                  <img
                     src={logo}
                     className="logosvg"
                     alt="logo"
                  />
                  <h1 className="logo">GreenBasket</h1>


                  <div className="location-box">
                     <label className="location-label" htmlFor="location-select">
                        Location
                     </label>
                     <select id="location-select" className="location-select">
                        <option>New York, USA</option>
                        <option>Los Angeles, USA</option>
                        <option>Chicago, USA</option>
                     </select>
                  </div>
               </div>



               {/* CENTER: search bar */}

               <div className="search-area">
                  <img
                     src={search}
                     className="search-icon"
                     alt="search"
                  />
                  <input
                     type="text"
                     className="search-input"
                     placeholder="Search for products"
                     aria-label="Search products"
                  />
               </div>




               {/* RIGHT: icons */}
               <div className="header-right">
                  <a href="wishlist.html" className="icon-link">
                     <img
                        src={ecom}
                        className="wishlisticon"
                        alt="wishlist"
                     />
                     <span className="icon-label">Wishlist</span>
                  </a>
                  <a href="cart.html" className="cart-link icon-link" title="Cart">
                     <img
                        src={cart}
                        className="carticon"
                        alt="cart"
                     />
                     <span className="cart-badge">3</span>
                     <span className="icon-label">Cart</span>
                  </a>
                  <a href="myaccount.html" className="icon-link">
                     <img
                        className="usericon"
                        src={user}
                        alt="user"
                     />
                     <span className="icon-label">Account</span>
                  </a>
               </div>

               <section className="bottom-header-container">
                  <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                  <div className="browsediv">
                     <label htmlFor="menu-toggle" className="browse">
                        <img
                           src={more}
                           width="20px"
                           alt="menu"
                        />
                        Browse All Categories
                     </label>
                  </div>
                  <nav className="bottom-nav">
                     <ul className="nav-list">
                        <li>
                           <a href="index.html">Home</a>
                        </li>
                        <li>
                           <a href="shop.html">Shop</a>
                        </li>
                        <li>
                           <a href="coming-soon.html">Fruits</a>
                        </li>
                        <li>
                           <a href="coming-soon.html">Vegetables</a>
                        </li>
                        <li>
                           <a href="coming-soon.html">Beverages</a>
                        </li>
                        <li>
                           <a href="about.html">About Us</a>
                        </li>
                        <li>
                           <a href="coming-soon.html">Blogs</a>
                        </li>
                     </ul>
                  </nav>
                  {/* Recently viewed dropdown */}
                  <div className="recently-viewed">
                     <button className="recent-btn">
                        Recently Viewed <span className="caret">▾</span>
                     </button>
                     <div className="recent-dropdown">
                        <ul className="recent-list">
                           <li className="recent-item">
                              <img
                                 src={apple}
                                 alt="Apple"
                                 className="recent-thumb"
                              />
                              <div className="recent-meta">
                                 <strong>Red Apple</strong>
                                 <span className="price">₹45 / kg</span>
                              </div>
                           </li>
                           <li className="recent-item">
                              <img
                                 src={banana}
                                 alt="Tomato"
                                 className="recent-thumb"
                              />
                              <div className="recent-meta">
                                 <strong>Banana</strong>
                                 <span className="price">₹30 / kg</span>
                              </div>
                           </li>
                           <li className="recent-item">
                              <img
                                 src={mango}
                                 alt="Milk"
                                 className="recent-thumb"
                              />
                              <div className="recent-meta">
                                 <strong>Mango</strong>
                                 <span className="price">₹60</span>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </section>





            </div>









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

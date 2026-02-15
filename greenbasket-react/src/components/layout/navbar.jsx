import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <header>
      {/*- TOP HEADER*/}
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
              src="assets/images/HubSpot Brand Kit/Logo/JPEG/facebook.png"
              className="facebook-logo"
              alt="facebook"
            />
          </a>
          <a href="">
            <img
              src="assets/images/HubSpot Brand Kit/Logo/JPEG/instagram.png"
              className="instagram-logo"
              alt="instagram"
            />
          </a>
          <a href="">
            <img
              src="assets/images/HubSpot Brand Kit/Logo/JPEG/twitter.png"
              className="twitter-logo"
              alt="twitter"
            />
          </a>
        </div>
      </div>
      <div className="header-container">
        {/* LEFT: logo + location */}
        <div className="header-left">
          <img
            src="assets/images/HubSpot Brand Kit/Logo/SVG/shopping-bag.png"
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
            src="assets/images/HubSpot Brand Kit/Logo/SVG/search.png"
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
          <Link to="/wishlist" className="icon-link">
            <img
              src="assets/images/HubSpot Brand Kit/Logo/SVG/e-commerce.png"
              className="wishlisticon"
              alt="wishlist"
            />
            <span className="icon-label">Wishlist</span>
          </Link>
          <Link to="/cart" className="cart-link icon-link" title="Cart">
            <img
              src="assets/images/HubSpot Brand Kit/Logo/SVG/shopping-bag.png"
              className="carticon"
              alt="cart"
            />
            <span className="cart-badge">3</span>
            <span className="icon-label">Cart</span>
          </Link>
          <Link to="/account" className="icon-link">
            <img
              className="usericon"
              src="assets/images/HubSpot Brand Kit/Logo/SVG/user.png"
              alt="user"
            />
            <span className="icon-label">Account</span>
          </Link>
        </div>
      </div>{" "}
      {/* end of header-container */}
      {/*header bootom row*/}
      <section className="bottom-header-container">
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <div className="browsediv">
          <label htmlFor="menu-toggle" className="browse">
            <img
              src="assets/images/HubSpot Brand Kit/Logo/SVG/more.png"
              width="20px"
              alt="menu"
            />
            Browse All Categories
          </label>
        </div>
        <nav className="bottom-nav">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/">Fruits</Link>
            </li>
            <li>
              <Link to="/">Vegetables</Link>
            </li>
            <li>
              <Link to="/">Beverages</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
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
                  src="assets/images/Products/apple.png"
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
                  src="assets/images/Products/tomato.png"
                  alt="Tomato"
                  className="recent-thumb"
                />
                <div className="recent-meta">
                  <strong>Tomato</strong>
                  <span className="price">₹30 / kg</span>
                </div>
              </li>
              <li className="recent-item">
                <img
                  src="assets/images/Products/milk.png"
                  alt="Milk"
                  className="recent-thumb"
                />
                <div className="recent-meta">
                  <strong>Milk (1L)</strong>
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




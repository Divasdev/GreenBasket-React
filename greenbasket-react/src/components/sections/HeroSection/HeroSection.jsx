import { Link } from 'react-router-dom';
import heroImg from '../../../assets/assets/images/hero_image.png';
import badgeIcon from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/ecom.png';
import cartIcon from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/cart.png';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <div className="hero-text-badge">
            <img src={cartIcon} className="badge-icon" alt="" aria-hidden="true" />
            <span>The Best Online Grocery Store</span>
          </div>

          <h1 className="Hero-header fade-in-up">
            Your One-Stop Shop for <span className="highlight-text">Quality Groceries</span>
          </h1>

          <p className="hero-tagline fade-in-up" style={{ animationDelay: '0.2s' }}>
            "Freshness Handpicked, Delivered Faster Than You Think"
          </p>

          <div className="hero-buttons">
            <Link to="/shop" className="hero-shopnow-btn">Shop Now →</Link>
            <Link to="/shop" className="view-all-products">View All Products</Link>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={heroImg} alt="Happy woman holding grocery basket" className="hero-img" />
        <div className="hero-iamge-floating-text">
          <div className="image-tag">
            <img src={badgeIcon} width="20" alt="" aria-hidden="true" />
            <span>Secure Payment</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

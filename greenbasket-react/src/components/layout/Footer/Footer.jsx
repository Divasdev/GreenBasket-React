import { Link } from 'react-router-dom';
import cartIcon from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/cart.png';
import facebook from '../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/facebook.png';
import twitter from '../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/twitter.png';
import instagram from '../../../assets/assets/images/HubSpot Brand Kit/Logo/JPEG/instagram.png';
// pinterest.png not present in assets — using instagram as fallback
const pinterest = instagram;


function Footer() {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Footer">
      <div className="container footer-container">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <img src={cartIcon} alt="GreenBasket logo" className="footer-logo" width="48" height="48" />
            <div className="brand-text">
              <strong className="brand-name">GreenBasket.</strong>
              <p className="brand-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <div className="social-icons">
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="facebook" width="28" height="28" />
                </a>
                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="twitter" width="28" height="28" />
                </a>
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="instagram" width="28" height="28" />
                </a>
                <a href="https://pinterest.com" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                  <img src={pinterest} alt="pinterest" width="28" height="28" />
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/coming-soon">Blog</Link></li>
                <li><Link to="/coming-soon">Contact Us</Link></li>
                <li><Link to="/coming-soon">Careers</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Customer Services</h4>
              <ul>
                <li><Link to="/my-account">My Account</Link></li>
                <li><Link to="/track-order">Track Your Order</Link></li>
                <li><Link to="/coming-soon">Returns</Link></li>
                <li><Link to="/coming-soon">FAQ</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Information</h4>
              <ul>
                <li><Link to="/coming-soon">Privacy</Link></li>
                <li><Link to="/coming-soon">Terms &amp; Conditions</Link></li>
                <li><Link to="/coming-soon">Return Policy</Link></li>
              </ul>
            </div>
            <div className="footer-col contact-col">
              <h4>Contact Info</h4>
              <address>
                <p>+0123-456-789</p>
                <p>example@gmail.com</p>
                <p>8502 Preston Rd.<br />Inglewood, Maine 98380</p>
              </address>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>Copyright &copy; 2024 <strong>GreenBasket</strong> Website Design. All Rights Reserved.</p>
          <div className="footer-controls">
            <select aria-label="Language selector" className="footer-select">
              <option>English</option>
              <option>Español</option>
            </select>
            <select aria-label="Currency selector" className="footer-select">
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

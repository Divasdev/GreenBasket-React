import { useNavigate } from 'react-router-dom';
import basketImg from '../../../assets/assets/images/promo/shopping basket.png';

function WeeklyDeals() {
  const navigate = useNavigate();

  return (
    <section className="deals-promo-container" aria-label="Weekly deals promo">
      <div className="promo-wrapper">
        {/* LEFT SIDE — TEXT */}
        <article className="deal-promo">
          <span className="promo-header">Weekly Deals</span>
          <h2 className="promo-tagline">
            Unbeatable Offers: Your <br />
            <span className="highlighted-promo-text">Weekly Grocery Specials</span>
          </h2>
          <p className="promo-para">Weekly Wonders — Fresh Deals, Fresh Savings</p>
          <button
            className="promo-btn"
            type="button"
            aria-label="Shop weekly grocery specials"
            onClick={() => navigate('/shop')}
          >
            Shop Now →
          </button>
        </article>

        {/* RIGHT SIDE — IMAGE */}
        <figure className="promo-image" aria-hidden="true">
          <img src={basketImg} alt="Basket filled with groceries" className="promo-imagee" />
        </figure>
      </div>
    </section>
  );
}

export default WeeklyDeals;

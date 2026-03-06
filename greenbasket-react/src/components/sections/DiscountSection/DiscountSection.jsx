import { Link } from 'react-router-dom';
import useCountdown from '../../../hooks/useCountdown';
import vegPromo from '../../../assets/assets/images/promo/vegetable-promo.png';
import fruitsPromo from '../../../assets/assets/images/promo/fruits-promo.png';

// Set target date for winter discount
const DISCOUNT_END_DATE = '2026-12-31T00:00:00Z';

function DiscountSection() {
  const { days, hours, minutes, seconds } = useCountdown(DISCOUNT_END_DATE);

  return (
    <section className="discount-section" aria-label="Summer discount promo">
      <figure className="promo-side promo-left">
        <img src={vegPromo} alt="Woman buying vegetables" width="300" className="left-image" />
      </figure>

      <div className="discount-card" role="region" aria-labelledby="discount-heading">
        <div className="header-wraper">
          <header className="discount-card-header">
            <h2 id="discount-heading">Winter <span className="highlighted-discount-text">Discount</span></h2>
            <h4 className="discount-card-offerline">Get 50% off - Limited Time Offer!</h4>
          </header>
        </div>

        <div className="days-counter" aria-live="polite" aria-atomic="true">
          <div className="time-wrapper">
            <div className="timer">
              <time className="timer-days">{String(days).padStart(2, '0')}</time>
              <span className="timer-sep">:</span>
              <time className="timer-hours">{String(hours).padStart(2, '0')}</time>
              <span className="timer-sep">:</span>
              <time className="timer-minutes">{String(minutes).padStart(2, '0')}</time>
              <span className="timer-sep">:</span>
              <time className="timer-seconds">{String(seconds).padStart(2, '0')}</time>
            </div>
          </div>
          <div className="time-labels">Days &nbsp; Hours &nbsp; Minutes &nbsp; Seconds</div>
        </div>

        <Link to="/shop" className="hero-shopnow-btn" aria-label="Shop Fresh Vegetables and Fruits">
          Shop Now →
        </Link>
      </div>

      <figure className="promo-side promo-right">
        <img src={fruitsPromo} alt="Woman buying fruits" width="300" className="right-image" />
      </figure>
    </section>
  );
}

export default DiscountSection;

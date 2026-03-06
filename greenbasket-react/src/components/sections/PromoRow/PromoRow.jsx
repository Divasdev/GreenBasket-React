import { useNavigate } from 'react-router-dom';
import vegPromo from '../../../assets/assets/images/promo/vegetable-promo-image.png';
import fruitsPromo from '../../../assets/assets/images/promo/fruits-promo-card.png';

function PromoRow() {
  const navigate = useNavigate();

  return (
    <section className="promo-row">
      {/* LEFT PROMO CARD */}
      <div className="left-card promo-card">
        <div className="left-card-container">
          <div className="vegetables-promo">
            <span className="flat-discount-vegetables">Flat 20% Discount</span>
            <h2 className="promo-heading">Purely Fresh <br />Vegetables</h2>
            <p className="promo-tagline-promo">We deliver Fresh Vegetables directly from the farmers to Your doorstep.</p>
            <button className="promo-shop-btn" type="button" onClick={() => navigate('/shop')}>
              Shop Now →
            </button>
          </div>
          <div className="promo-image">
            <img src={vegPromo} alt="Basket of fresh vegetables" />
          </div>
        </div>
      </div>

      {/* RIGHT PROMO CARD */}
      <div className="promo-card right-card promo-card--yellow">
        <div className="right-card-container">
          <div className="fruits-promo">
            <span className="flat-discount-fruits">Flat 25% Discount</span>
            <h2 className="promo-heading">Fresh Fruits,<br />Pure Quality</h2>
            <p className="promo-tagline-promo">We deliver Fresh Fruits directly from the farmers to Your doorstep.</p>
            <button className="promo-shop-btn" type="button" onClick={() => navigate('/shop')}>
              Shop Now →
            </button>
          </div>
          <div className="promo-image">
            <img src={fruitsPromo} alt="Basket of fresh fruits" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoRow;

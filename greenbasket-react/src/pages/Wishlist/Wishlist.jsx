import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import ecomIcon from '../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/ecom.png';

function Wishlist() {
   const { wishlistItems, toggleWishlist } = useWishlist();
   const { addToCart } = useCart();

   return (
      <main>
         <section className="hero-section">
            <div className="hero-wrapper">
               <h3 className="hero-header">Wishlist</h3>
               <h4 className="hero-sub-header">Home / Wishlist</h4>
            </div>
         </section>

         <section style={{ padding: '3rem 1rem', minHeight: '50vh' }}>
            <div className="container">
               {wishlistItems.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '4rem' }}>
                     <img src={ecomIcon} alt="Empty wishlist" width="80" style={{ opacity: 0.3, marginBottom: '1rem' }} />
                     <h3>Your wishlist is empty</h3>
                     <p>Add items to your wishlist while shopping!</p>
                     <Link to="/shop" className="checkout-btn" style={{ display: 'inline-block', marginTop: '1rem' }}>Shop Now →</Link>
                  </div>
               ) : (
                  <div className="products-grid">
                     {wishlistItems.map((item) => (
                        <article key={item.id} className="product-card">
                           <figure className="product-media">
                              <img src={item.image} alt={item.name} className="product-image" width="400" height="300" />
                           </figure>
                           <div className="product-toprow">
                              {item.badge && <span className="product-badge">{item.badge}</span>}
                              <button
                                 className="wishlist-btn"
                                 aria-pressed="true"
                                 aria-label={`Remove ${item.name} from wishlist`}
                                 onClick={() => toggleWishlist(item)}
                              >
                                 <img src={ecomIcon} className="wishlisticon-productscard" alt="remove from wishlist" />
                              </button>
                           </div>
                           <div className="product-body">
                              <div className="fruits-rating">
                                 <p className="product-type">{item.type}</p>
                                 <span className="product-rating">⭐️ {item.rating}</span>
                              </div>
                              <h3 className="product-name">{item.name}</h3>
                              <p className="product-quantity">{item.quantity}</p>
                              <div className="product-price-wrap">
                                 <strong className="product-price">{item.price}</strong>
                                 {item.oldPrice && <span className="product-oldprice">{item.oldPrice}</span>}
                                 <button className="product-addtocart" onClick={() => addToCart(item)}>
                                    <span className="product-add">Add to Cart</span>
                                 </button>
                              </div>
                           </div>
                        </article>
                     ))}
                  </div>
               )}
            </div>
         </section>
      </main>
   );
}

export default Wishlist;

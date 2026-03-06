import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import cartIconImg from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/cart.png';
import ecomIcon from '../../../assets/assets/images/HubSpot Brand Kit/Logo/SVG/ecom.png';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const {
    id,
    name,
    image,
    badge,
    type,
    rating,
    quantity,
    price,
    oldPrice,
  } = product;

  const wishlisted = isWishlisted(id);

  return (
    <article className="product-card" aria-label={`${name} - ${quantity}`}>
      <figure className="product-media">
        <img src={image} alt={name} className="product-image" width="400" height="300" />
      </figure>

      <div className="product-toprow">
        {badge && <span className="product-badge">{badge}</span>}
        <button
          className="wishlist-btn"
          type="button"
          aria-pressed={wishlisted}
          aria-label={wishlisted ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
          onClick={() => toggleWishlist(product)}
        >
          <img
            src={ecomIcon}
            className="wishlisticon-productscard"
            alt="wishlist"
            style={{ opacity: wishlisted ? 1 : 0.5 }}
          />
        </button>
      </div>

      <div className="product-body">
        <div className="fruits-rating">
          <p className="product-type">{type}</p>
          <span className="product-rating">⭐️ {rating}</span>
        </div>
        <h3 className="product-name">{name}</h3>
        <p className="product-quantity">{quantity}</p>
        <div className="product-price-wrap">
          <strong className="product-price">{price}</strong>
          {oldPrice && <span className="product-oldprice">{oldPrice}</span>}
          <button
            className="product-addtocart"
            type="button"
            aria-label={`Add ${name} to cart`}
            onClick={() => addToCart(product)}
          >
            <img src={cartIconImg} className="carticon" alt="" aria-hidden="true" />
            <span className="product-add">Add</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

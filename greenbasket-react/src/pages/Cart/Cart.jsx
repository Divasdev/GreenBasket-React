import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQty, clearCart, cartTotal } = useCart();
  const [coupon, setCoupon] = useState('');

  return (
    <main>
      {/* Hero Breadcrumb */}
      <section className="hero-section">
        <div className="hero-wrapper">
          <h3 className="hero-header">Shopping Cart</h3>
          <h4 className="hero-sub-header">Home / Shopping Cart</h4>
        </div>
      </section>

      <section className="cart-wrapper">
        {/* LEFT: Cart Items */}
        <div className="cart-left-section">
          <div className="cart-header">
            <span className="cart-col-product">Product</span>
            <span className="cart-col-price">Price</span>
            <span className="cart-col-quantity">Quantity</span>
            <span className="cart-col-subtotal">Subtotal</span>
          </div>

          <div className="cart-list">
            {cartItems.length === 0 ? (
              <p style={{ padding: '2rem', textAlign: 'center' }}>
                Your cart is empty. <Link to="/shop">Shop Now →</Link>
              </p>
            ) : (
              cartItems.map((item) => {
                const unitPrice = parseFloat(item.price.replace('$', '')) || 0;
                const subtotal = (unitPrice * item.qty).toFixed(2);
                return (
                  <div key={item.id} className="cart-item">
                    <button className="remove-btn" aria-label={`Remove ${item.name}`} onClick={() => removeFromCart(item.id)}>×</button>
                    <div className="cart-product-info">
                      <img src={item.image} alt={item.name} className="cart-item-img" />
                      <div className="cart-item-details">
                        <span className="cart-item-name">{item.name}</span>
                        <span className="cart-item-weight">{item.quantity}</span>
                      </div>
                    </div>
                    <span className="cart-item-price">{item.price}</span>
                    <div className="cart-quantity-control">
                      <button className="qty-btn minus" onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>−</button>
                      <input type="number" value={item.qty} className="qty-input" min="1" readOnly />
                      <button className="qty-btn plus" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <span className="cart-item-subtotal">${subtotal}</span>
                  </div>
                );
              })
            )}
          </div>

          {/* Actions */}
          <div className="cart-actions">
            <div className="coupon-group">
              <input className="coupon-code" type="text" placeholder="Coupon Code" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
              <button className="apply-coupon-btn">Apply Coupon</button>
            </div>
            <button className="clear-cart-link" onClick={clearCart}>Clear Shopping Cart</button>
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <aside className="cart-right-section">
          <div className="summary-card">
            <h3 className="summary-header">Order Summary</h3>
            <div className="summary-rows">
              <div className="summary-row">
                <span className="summary-label">Items</span>
                <span className="summary-value">{cartItems.reduce((acc, i) => acc + i.qty, 0)}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Sub Total</span>
                <span className="summary-value">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Shipping</span>
                <span className="summary-value">$0.00</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Taxes</span>
                <span className="summary-value">$0.00</span>
              </div>
            </div>
            <hr className="summary-divider" />
            <div className="summary-total-row">
              <span className="summary-label">Total</span>
              <span className="summary-value">${cartTotal.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="checkout-btn" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
              Proceed to Checkout
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Cart;
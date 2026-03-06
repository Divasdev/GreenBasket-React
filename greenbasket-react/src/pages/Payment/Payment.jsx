import { useState } from 'react';
import { Link } from 'react-router-dom';

const PAYMENT_METHODS = [
   { id: 'paypal', label: 'PayPal' },
   { id: 'visa', label: 'Visa / Mastercard' },
   { id: 'googlepay', label: 'Google Pay' },
   { id: 'cod', label: 'Cash on Delivery' },
   { id: 'newcard', label: 'New Card' },
];

function Payment() {
   const [method, setMethod] = useState('visa');
   const [card, setCard] = useState({ number: '', name: '', expiry: '', cvv: '' });

   const handleCard = (e) => setCard({ ...card, [e.target.name]: e.target.value });

   return (
      <main>
         <section className="hero-section">
            <div className="hero-wrapper">
               <h3 className="hero-header">Payment</h3>
               <h4 className="hero-sub-header">Home / Shopping Cart / Checkout / Payment</h4>
            </div>
         </section>

         <section className="checkout-wrapper">
            {/* LEFT: Payment Methods */}
            <div className="billing-section">
               <h2 className="billing-header">Payment Method</h2>
               <div className="radio-group" style={{ marginBottom: '1.5rem' }}>
                  {PAYMENT_METHODS.map((pm) => (
                     <label key={pm.id} className="radio-option">
                        <input type="radio" name="payment-method" value={pm.id} checked={method === pm.id} onChange={() => setMethod(pm.id)} />
                        {' '}{pm.label}
                     </label>
                  ))}
               </div>

               {/* Card form shows when visa or newcard is selected */}
               {(method === 'visa' || method === 'newcard') && (
                  <form className="billing-form" onSubmit={(e) => e.preventDefault()}>
                     <div className="form-row">
                        <div className="form-group full-width">
                           <label className="form-label">Card Number</label>
                           <input name="number" type="text" className="form-input" placeholder="1234 5678 9012 3456" value={card.number} onChange={handleCard} />
                        </div>
                     </div>
                     <div className="form-row">
                        <div className="form-group full-width">
                           <label className="form-label">Name on Card</label>
                           <input name="name" type="text" className="form-input" placeholder="John Doe" value={card.name} onChange={handleCard} />
                        </div>
                     </div>
                     <div className="form-row">
                        <div className="form-group">
                           <label className="form-label">Expiry Date</label>
                           <input name="expiry" type="text" className="form-input" placeholder="MM/YY" value={card.expiry} onChange={handleCard} />
                        </div>
                        <div className="form-group">
                           <label className="form-label">CVV</label>
                           <input name="cvv" type="text" className="form-input" placeholder="123" value={card.cvv} onChange={handleCard} />
                        </div>
                     </div>
                  </form>
               )}
            </div>

            {/* RIGHT: Order Summary */}
            <aside className="cart-right-section">
               <div className="summary-card">
                  <h3 className="summary-header">Order Summary</h3>
                  <div className="summary-rows">
                     <div className="summary-row"><span className="summary-label">Sub Total</span><span className="summary-value">$85.40</span></div>
                     <div className="summary-row"><span className="summary-label">Shipping</span><span className="summary-value">$0.00</span></div>
                     <div className="summary-row"><span className="summary-label">Taxes</span><span className="summary-value">$0.00</span></div>
                     <div className="summary-row discount"><span className="summary-label">Coupon Discount</span><span className="summary-value">-$10.00</span></div>
                  </div>
                  <hr className="summary-divider" />
                  <div className="summary-total-row"><span className="summary-label">Total</span><span className="summary-value">$74.40</span></div>
                  <Link to="/orders" className="checkout-btn">Confirm Payment</Link>
               </div>
            </aside>
         </section>
      </main>
   );
}

export default Payment;

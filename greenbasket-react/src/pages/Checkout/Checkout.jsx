import { useState } from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
   const [form, setForm] = useState({
      firstName: '', lastName: '', company: '',
      country: '', street: '', city: '',
      state: '', zip: '', phone: '', email: '',
      deliveryAddress: 'same',
   });

   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

   return (
      <main>
         <section className="hero-section">
            <div className="hero-wrapper">
               <h3 className="hero-header">Checkout</h3>
               <h4 className="hero-sub-header">Home / Shopping Cart / Checkout</h4>
            </div>
         </section>

         <section className="checkout-wrapper">
            {/* LEFT: Billing Form */}
            <div className="billing-section">
               <h2 className="billing-header">Billing Details</h2>
               <form className="billing-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                     <div className="form-group">
                        <label className="form-label">First Name *</label>
                        <input name="firstName" type="text" className="form-input" placeholder="Ex. John" value={form.firstName} onChange={handleChange} />
                     </div>
                     <div className="form-group">
                        <label className="form-label">Last Name *</label>
                        <input name="lastName" type="text" className="form-input" placeholder="Ex. Doe" value={form.lastName} onChange={handleChange} />
                     </div>
                  </div>
                  <div className="form-row">
                     <div className="form-group full-width">
                        <label className="form-label">Company Name (Optional)</label>
                        <input name="company" type="text" className="form-input" placeholder="Enter Company Name" value={form.company} onChange={handleChange} />
                     </div>
                  </div>
                  <div className="form-row">
                     <div className="form-group full-width">
                        <label className="form-label">Country *</label>
                        <select name="country" className="form-select" value={form.country} onChange={handleChange}>
                           <option value="">Select Country</option>
                           <option value="us">USA</option>
                           <option value="in">India</option>
                           <option value="uk">UK</option>
                        </select>
                     </div>
                  </div>
                  <div className="form-row">
                     <div className="form-group full-width">
                        <label className="form-label">Street Address *</label>
                        <input name="street" type="text" className="form-input" placeholder="Enter Street Address" value={form.street} onChange={handleChange} />
                     </div>
                  </div>
                  <div className="form-row">
                     <div className="form-group full-width">
                        <label className="form-label">City *</label>
                        <select name="city" className="form-select" value={form.city} onChange={handleChange}>
                           <option value="">Select City</option>
                           <option value="ny">New York</option>
                           <option value="la">Los Angeles</option>
                        </select>
                     </div>
                  </div>
                  <div className="form-row">
                     <div className="form-group full-width">
                        <label className="form-label">State *</label>
                        <select name="state" className="form-select" value={form.state} onChange={handleChange}>
                           <option value="">Select State</option>
                           <option value="ny">New York</option>
                           <option value="ca">California</option>
                        </select>
                     </div>
                  </div>
                  <div className="form-row">
                     <div className="form-group full-width">
                        <label className="form-label">Zip Code *</label>
                        <input name="zip" type="text" className="form-input" placeholder="Enter Zip Code" value={form.zip} onChange={handleChange} />
                     </div>
                  </div>
                  <div className="form-row">
                     <div className="form-group full-width">
                        <label className="form-label">Phone *</label>
                        <input name="phone" type="tel" className="form-input" placeholder="Enter Phone Number" value={form.phone} onChange={handleChange} />
                     </div>
                  </div>
                  <div className="form-row">
                     <div className="form-group full-width">
                        <label className="form-label">Email *</label>
                        <input name="email" type="email" className="form-input" placeholder="Enter Email Address" value={form.email} onChange={handleChange} />
                     </div>
                  </div>
                  <div className="billing-section delivery-section">
                     <h4 className="form-label" style={{ fontSize: '16px' }}>Delivery Address *</h4>
                     <div className="radio-group">
                        <label className="radio-option">
                           <input type="radio" name="deliveryAddress" value="same" checked={form.deliveryAddress === 'same'} onChange={handleChange} />
                           Same as shipping address
                        </label>
                        <label className="radio-option">
                           <input type="radio" name="deliveryAddress" value="different" checked={form.deliveryAddress === 'different'} onChange={handleChange} />
                           Use a different billing address
                        </label>
                     </div>
                  </div>
               </form>
            </div>

            {/* RIGHT: Order Summary */}
            <aside className="cart-right-section">
               <div className="summary-card">
                  <h3 className="summary-header">Order Summary</h3>
                  <div className="summary-rows">
                     <div className="summary-row"><span className="summary-label">Items</span><span className="summary-value">9</span></div>
                     <div className="summary-row"><span className="summary-label">Sub Total</span><span className="summary-value">$85.40</span></div>
                     <div className="summary-row"><span className="summary-label">Shipping</span><span className="summary-value">$0.00</span></div>
                     <div className="summary-row"><span className="summary-label">Taxes</span><span className="summary-value">$0.00</span></div>
                     <div className="summary-row discount"><span className="summary-label">Coupon Discount</span><span className="summary-value">-$10.00</span></div>
                  </div>
                  <hr className="summary-divider" />
                  <div className="summary-total-row"><span className="summary-label">Total</span><span className="summary-value">$74.40</span></div>
                  <Link to="/payment" className="checkout-btn">Proceed to Payment</Link>
               </div>
            </aside>
         </section>
      </main>
   );
}

export default Checkout;

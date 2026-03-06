import { useState } from 'react';

function TrackOrder() {
   const [orderId, setOrderId] = useState('');
   const [result, setResult] = useState(null);

   const handleTrack = (e) => {
      e.preventDefault();
      // Mock tracking result — replace with API call later
      if (orderId.trim()) {
         setResult({
            id: orderId,
            status: 'In Transit',
            estimatedDelivery: '12 March 2026',
            steps: [
               { label: 'Order Placed', done: true },
               { label: 'Order Confirmed', done: true },
               { label: 'Packed', done: true },
               { label: 'Shipped', done: true },
               { label: 'Out for Delivery', done: false },
               { label: 'Delivered', done: false },
            ]
         });
      }
   };

   return (
      <main>
         <section className="hero-section">
            <div className="hero-wrapper">
               <h3 className="hero-header">Track Order</h3>
               <h4 className="hero-sub-header">Home / Track Order</h4>
            </div>
         </section>

         <section style={{ padding: '4rem 1rem', minHeight: '50vh' }}>
            <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
               <h2 style={{ marginBottom: '1.5rem' }}>Track Your Order</h2>
               <form onSubmit={handleTrack} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                  <input
                     type="text"
                     className="form-input"
                     placeholder="Enter your Order ID (e.g. #GRN-10021)"
                     value={orderId}
                     onChange={(e) => setOrderId(e.target.value)}
                     style={{ flex: 1 }}
                  />
                  <button type="submit" className="checkout-btn" style={{ whiteSpace: 'nowrap' }}>Track</button>
               </form>

               {result && (
                  <div>
                     <div style={{ background: '#f8fff8', border: '1px solid #1f7a45', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem' }}>
                        <p><strong>Order ID:</strong> {result.id}</p>
                        <p><strong>Status:</strong> <span style={{ color: '#f5a623', fontWeight: 600 }}>{result.status}</span></p>
                        <p><strong>Estimated Delivery:</strong> {result.estimatedDelivery}</p>
                     </div>

                     <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {result.steps.map((step, i) => (
                           <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                              <span style={{
                                 width: 28, height: 28, borderRadius: '50%', display: 'flex',
                                 alignItems: 'center', justifyContent: 'center',
                                 background: step.done ? '#1f7a45' : '#ddd', color: '#fff', fontSize: '14px', flexShrink: 0,
                              }}>
                                 {step.done ? '✓' : i + 1}
                              </span>
                              <span style={{ color: step.done ? '#1f7a45' : '#999', fontWeight: step.done ? 600 : 400 }}>
                                 {step.label}
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>
               )}
            </div>
         </section>
      </main>
   );
}

export default TrackOrder;

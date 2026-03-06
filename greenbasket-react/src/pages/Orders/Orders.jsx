const sampleOrders = [
   { id: '#GRN-10021', date: '2024-08-10', status: 'Delivered', total: '$74.40', items: 'Strawberry, Apple, Mango' },
   { id: '#GRN-10019', date: '2024-07-25', status: 'In Transit', total: '$32.00', items: 'Banana, Orange' },
   { id: '#GRN-10014', date: '2024-07-05', status: 'Cancelled', total: '$18.50', items: 'Grapes' },
];

const STATUS_COLORS = {
   'Delivered': '#1f7a45',
   'In Transit': '#f5a623',
   'Cancelled': '#e74c3c',
};

function Orders() {
   return (
      <main>
         <section className="hero-section">
            <div className="hero-wrapper">
               <h3 className="hero-header">My Orders</h3>
               <h4 className="hero-sub-header">Home / My Account / Orders</h4>
            </div>
         </section>

         <section style={{ padding: '3rem 1rem', minHeight: '50vh' }}>
            <div className="container">
               <h2 style={{ marginBottom: '1.5rem' }}>Order History</h2>
               <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                     <tr style={{ background: '#f5f5f5' }}>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Order ID</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Date</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Items</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Total</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
                     </tr>
                  </thead>
                  <tbody>
                     {sampleOrders.map((order) => (
                        <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
                           <td style={{ padding: '12px' }}><strong>{order.id}</strong></td>
                           <td style={{ padding: '12px' }}>{order.date}</td>
                           <td style={{ padding: '12px' }}>{order.items}</td>
                           <td style={{ padding: '12px' }}>{order.total}</td>
                           <td style={{ padding: '12px' }}>
                              <span style={{ color: STATUS_COLORS[order.status], fontWeight: 600 }}>{order.status}</span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </section>
      </main>
   );
}

export default Orders;

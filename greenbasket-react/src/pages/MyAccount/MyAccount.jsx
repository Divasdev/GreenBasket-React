import { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar1 from '../../assets/assets/images/Avatars/avatar1.png';

function MyAccount() {
   const [activeTab, setActiveTab] = useState('profile');

   return (
      <main>
         <section className="hero-section">
            <div className="hero-wrapper">
               <h3 className="hero-header">My Account</h3>
               <h4 className="hero-sub-header">Home / My Account</h4>
            </div>
         </section>

         <section style={{ padding: '3rem 1rem', minHeight: '50vh' }}>
            <div className="container" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
               {/* Sidebar */}
               <aside style={{ minWidth: '200px' }}>
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                     <img src={avatar1} alt="User avatar" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }} />
                     <h4 style={{ marginTop: '0.5rem' }}>Jenny Alexander</h4>
                     <p style={{ color: '#666', fontSize: '14px' }}>jenny@example.com</p>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                     {['profile', 'orders', 'address', 'settings'].map((tab) => (
                        <li key={tab} style={{ marginBottom: '0.5rem' }}>
                           <button
                              onClick={() => setActiveTab(tab)}
                              style={{
                                 width: '100%', padding: '10px 16px', textAlign: 'left',
                                 background: activeTab === tab ? '#1f7a45' : 'transparent',
                                 color: activeTab === tab ? '#fff' : '#333',
                                 border: 'none', borderRadius: '6px', cursor: 'pointer',
                                 textTransform: 'capitalize', fontFamily: 'inherit', fontSize: '15px',
                              }}
                           >
                              {tab}
                           </button>
                        </li>
                     ))}
                  </ul>
               </aside>

               {/* Content */}
               <div style={{ flex: 1 }}>
                  {activeTab === 'profile' && (
                     <div>
                        <h2>Edit Profile</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }} onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group"><label className="form-label">First Name</label><input type="text" className="form-input" defaultValue="Jenny" /></div>
                           <div className="form-group"><label className="form-label">Last Name</label><input type="text" className="form-input" defaultValue="Alexander" /></div>
                           <div className="form-group"><label className="form-label">Email</label><input type="email" className="form-input" defaultValue="jenny@example.com" /></div>
                           <div className="form-group"><label className="form-label">Phone</label><input type="tel" className="form-input" defaultValue="+91 7005869756" /></div>
                           <button type="submit" className="checkout-btn" style={{ width: 'fit-content' }}>Save Changes</button>
                        </form>
                     </div>
                  )}

                  {activeTab === 'orders' && (
                     <div>
                        <h2>Recent Orders</h2>
                        <p>View all your orders <Link to="/orders" style={{ color: '#1f7a45' }}>here →</Link></p>
                     </div>
                  )}

                  {activeTab === 'address' && (
                     <div>
                        <h2>My Addresses</h2>
                        <p style={{ color: '#666' }}>8502 Preston Rd. Inglewood, Maine 98380</p>
                     </div>
                  )}

                  {activeTab === 'settings' && (
                     <div>
                        <h2>Account Settings</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }} onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group"><label className="form-label">New Password</label><input type="password" className="form-input" placeholder="••••••••" /></div>
                           <div className="form-group"><label className="form-label">Confirm Password</label><input type="password" className="form-input" placeholder="••••••••" /></div>
                           <button type="submit" className="checkout-btn" style={{ width: 'fit-content' }}>Update Password</button>
                        </form>
                     </div>
                  )}
               </div>
            </div>
         </section>
      </main>
   );
}

export default MyAccount;

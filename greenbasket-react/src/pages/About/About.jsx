import heroImg from '../../assets/assets/images/hero_image.png';
import customer1 from '../../assets/assets/images/users/happy-customer1.png';
import avatar1 from '../../assets/assets/images/Avatars/avatar1.png';
import avatar2 from '../../assets/assets/images/Avatars/avatar2.png';
import avatar3 from '../../assets/assets/images/Avatars/avatar3.png';
import avatar4 from '../../assets/assets/images/Avatars/avatar4.png';

const teamMembers = [
   { image: avatar1, name: 'Jenny Alexander', role: 'Founder & CEO' },
   { image: avatar2, name: 'Bessie Cooper', role: 'Operations Manager' },
   { image: avatar3, name: 'Jane Cooper', role: 'Warehouse Manager' },
   { image: avatar4, name: 'Robert Fox', role: 'Inventory Specialist' },
];

function About() {
   return (
      <main>
         {/* Hero Breadcrumb */}
         <section className="hero-section">
            <div className="hero-wrapper">
               <h3 className="hero-header">About Us</h3>
               <h4 className="hero-sub-header">Home / About Us</h4>
            </div>
         </section>

         {/* About Content */}
         <section className="about-content">
            <div className="container about-container">
               <div className="about-image-wrapper">
                  <img src={heroImg} alt="Grocery Shopping" className="about-main-img" />
                  <div className="years-badge">
                     <span className="years-num">16</span>
                     <span className="years-text">Years<br />of Services</span>
                  </div>
               </div>
               <div className="about-text-content">
                  <h4 className="about-label">About Us</h4>
                  <h2 className="about-heading">Your Trusted Partner in <span className="highlight">Fresh Grocery Delivery</span></h2>
                  <p className="about-desc">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul className="about-features">
                     <li><span className="check-icon">✔</span> Eco-Friendly and Sustainable Practices</li>
                     <li><span className="check-icon">✔</span> Fresh and High-Quality Groceries</li>
                     <li><span className="check-icon">✔</span> Convenient and Reliable Delivery</li>
                  </ul>
                  <div className="founder-sig">
                     <span className="sig-name">Jenny Alexander</span>
                     <span className="sig-role">Jenny Alexander • Founder</span>
                  </div>
               </div>
            </div>
         </section>

         {/* Vision & Mission */}
         <section className="vision-mission-section">
            <div className="container vm-container">
               <div className="vm-image">
                  <img src={customer1} alt="Happy Customer" />
               </div>
               <div className="vm-cards">
                  <div className="vm-card">
                     <div className="vm-icon box-icon">🚀</div>
                     <h3>Our Vision</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                  </div>
                  <div className="vm-card">
                     <div className="vm-icon eye-icon">👁</div>
                     <h3>Our Mission</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Team Section */}
         <section className="team-section">
            <div className="container">
               <div className="team-header">
                  <h4>Our Team</h4>
                  <h2>Meet The Passionate<br />Team Behind Our Success</h2>
               </div>
               <div className="team-grid">
                  {teamMembers.map((member) => (
                     <div key={member.name} className="team-card">
                        <div className="team-img">
                           <img src={member.image} alt={member.name} />
                        </div>
                        <div className="team-info">
                           <h3>{member.name}</h3>
                           <p>{member.role}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </main>
   );
}

export default About;

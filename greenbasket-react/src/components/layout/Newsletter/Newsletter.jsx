// Newsletter Component
// TODO: Build a newsletter signup form (email input + subscribe button)
// This can be placed in the footer or as a standalone section
import { useState } from 'react';
import styles from './Newsletter.module.css';

function Newsletter() {
   const [email, setEmail] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      // TODO: Hook up to an email API / backend
      alert(`Subscribed: ${email}`);
      setEmail('');
   };

   return (
      <section className={styles.newsletter}>
         <h3>Subscribe to our Newsletter</h3>
         <form onSubmit={handleSubmit}>
            <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Enter your email"
               required
            />
            <button type="submit">Subscribe</button>
         </form>
      </section>
   );
}

export default Newsletter;

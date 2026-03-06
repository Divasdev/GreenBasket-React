import useNewsletter from '../../../hooks/useNewsletter';

function Newsletter() {
   const { email, setEmail, status, handleSubscribe } = useNewsletter();

   return (
      <section className="newsletter" aria-label="Subscribe to our newsletter">
         <div className="container newsletter-container">
            <article className="newsletter-contains">
               <h3 className="header-newsletter">Our Newsletter</h3>
               <h2 className="newsletter-header">
                  Subscribe to our Newsletter to <br />
                  Get <span className="highlight-text-newsletter">Updates on Our Latest Offers</span>
               </h2>
               <p className="newsletter-promo">Get 25% off on your first order by subscribing to our newsletter</p>

               <form onSubmit={handleSubscribe} className="newsletter-form" noValidate>
                  <input
                     id="newsletter-email"
                     name="email"
                     type="email"
                     className="newsletter-input"
                     placeholder="Enter Email Address"
                     required
                     aria-required="true"
                     autoComplete="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                     type="submit"
                     className="subs-btn"
                     aria-label="Subscribe to newsletter"
                     disabled={status === 'loading'}
                  >
                     {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                  <div className="newsletter-status" role="status" aria-live="polite">
                     {status === 'success' && '✅ Thank you for subscribing!'}
                     {status === 'error' && '❌ Something went wrong. Please try again.'}
                  </div>
               </form>
            </article>
         </div>
      </section>
   );
}

export default Newsletter;

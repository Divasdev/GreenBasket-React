import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
   return (
      <main>
         {/* HERO SECTION */}
         <section className="hero-section">
            <div className="hero-content">
               {/* Renamed wrapper to avoid conflict with badge styling */}
               <div className="hero-text-wrapper">
                  <div className="hero-text-badge">
                     <img src="/assets/images/HubSpot Brand Kit/Logo/SVG/shopping-cart.png" className="badge-icon" alt="icon" />
                     <span>The Best Online Grocery Store</span>
                  </div>

                  <h1 className="Hero-header fade-in-up">
                     Your One-Stop Shop for <span className="highlight-text">Quality Groceries</span>
                  </h1>

                  <p className="hero-tagline fade-in-up" style={{ animationDelay: '0.2s' }}>“Freshness Handpicked, Delivered Faster
                     Than You Think”</p>

                  <div className="hero-buttons">
                     <Link to="/shop" className="hero-shopnow-btn">Shop Now &rarr;</Link>
                     <Link to="/shop" className="view-all-products">View All Products</Link>
                  </div>
               </div>
            </div>

            <div className="hero-image-container">
               <img src="/assets/images/hero_image.png" alt="Happy woman holding grocery basket" className="hero-img" />

               <div className="hero-iamge-floating-text">
                  <div className="image-tag">
                     <img src="/assets/images/HubSpot Brand Kit/Logo/SVG/e-commerce.png" width="20" alt="" />
                     <span>Secure Payment</span>
                  </div>
               </div>
            </div>
         </section>

         {/* ITEM CATEGORIES HTML */}
         <section className="item-categories">
            <div className="categories-container">
               <h3 className="item-card-header">Categories</h3>
               <h2 className="item-card-header2">Featured <span className="item-highlighted-text">Categories</span></h2>

               <div className="categories-grid">
                  <div className="category-card">
                     <div className="thumb-wrap">
                        <img src="/assets/images/categories/vegetables.png" alt="Vegetables" className="category-thumb" />
                     </div>
                     <div className="category-body">
                        <h4 className="category-title">Vegetables</h4>
                        <p className="category-count">52 products</p>
                     </div>
                  </div>

                  <div className="category-card">
                     <div className="thumb-wrap">
                        <img src="/assets/images/categories/fruits.png" alt="Fresh Fruits" className="category-thumb" />
                     </div>
                     <div className="category-body">
                        <h4 className="category-title">Fresh Fruits</h4>
                        <p className="category-count">48 products</p>
                     </div>
                  </div>

                  <div className="category-card">
                     <div className="thumb-wrap">
                        <img src="/assets/images/Products/milk.png" alt="Milk & Eggs" className="category-thumb" />
                     </div>
                     <div className="category-body">
                        <h4 className="category-title">Milk &amp; Eggs</h4>
                        <p className="category-count">12 products</p>
                     </div>
                  </div>

                  <div className="category-card">
                     <div className="thumb-wrap">
                        <img src="/assets/images/categories/bakery.png" alt="Bakery" className="category-thumb" />
                     </div>
                     <div className="category-body">
                        <h4 className="category-title">Bakery</h4>
                        <p className="category-count">62 products</p>
                     </div>
                  </div>

                  <div className="category-card">
                     <div className="thumb-wrap">
                        <img src="/assets/images/categories/household-categories-Photoroom.png" alt="House Hold" className="category-thumb" />
                     </div>
                     <div className="category-body">
                        <h4 className="category-title">House Hold</h4>
                        <p className="category-count">25 products</p>
                     </div>
                  </div>

                  <div className="category-card">
                     <div className="thumb-wrap">
                        <img src="/assets/images/categories/dryfruits.png" alt="Dry Fruits" className="category-thumb" />
                     </div>
                     <div className="category-body">
                        <h4 className="category-title">Dry Fruits</h4>
                        <p className="category-count">8 products</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="promo-row">
            {/* LEFT PROMO CARD */}
            <div className="left-card promo-card">
               <div className="left-card-container">

                  <div className="vegetables-promo">
                     <span className="flat-discount-vegetables">
                        Flat 20% Discount
                     </span>

                     <h2 className="promo-heading">
                        Purely Fresh <br />Vegetables
                     </h2>
                     <p className="promo-tagline-promo">
                        We deliver Fresh Vegetables directly from the farmers to Your doorstep.
                     </p>

                     <Link to="/shop" className="promo-shop-btn">
                        Shop Now &#8594;
                     </Link>
                  </div>

                  <div className="promo-image">
                     <img src="/assets/images/promo/vegetable-promo-image.png" alt="Basket of fresh vegetables" />
                  </div>

               </div>
            </div>
            {/* RIGHT PROMO CARD */}
            <div className="promo-card right-card promo-card--yellow">
               <div className="right-card-container">

                  <div className="fruits-promo">
                     <span className="flat-discount-fruits">
                        Flat 25% Discount
                     </span>

                     <h2 className="promo-heading">
                        Fresh Fruits,<br />
                        Pure Quality
                     </h2>
                     <p className="promo-tagline-promo">
                        We deliver Fresh Fruits directly from the farmers to Your doorstep.
                     </p>

                     <Link to="/shop" className="promo-shop-btn">
                        Shop Now &#8594;
                     </Link>
                  </div>

                  <div className="promo-image">
                     <img src="/assets/images/promo/fruits-promo-card.png" alt="Basket of fresh fruits" />
                  </div>

               </div>
            </div>
         </section>

         {/* PRODUCTS */}
         <section className="products-section">
            <div className="products-wrap">
               <div className="product-text">
                  <h4 className="products">
                     Products
                  </h4>
                  <h2 className="featured-products">Featured <span className="highlight-products">Products</span></h2>
               </div>

               <Link to="/shop" className="view-btn">
                  View All Products &#8594;
               </Link>
            </div>

            <div className="products-grid">
               {/* Product Card 1 */}
               <article className="product-card" aria-label="Fresh strawberry-500g">
                  <figure className="product-media">
                     <img src="/assets/images/Products/strawberry-isolated-white-background-close-up.jpg"
                        alt="Fresh strawberries in a bowl-500g" className="product-image" width="400" height="300" />
                  </figure>
                  <div className="product-toprow">
                     <span className="product-badge">20% off</span>
                     <button className="wishlist-btn" type="button" aria-pressed="false" aria-label="Add to wishlist">
                        <img src="/assets/images/HubSpot Brand Kit/Logo/SVG/e-commerce.png" className="wishlisticon-productscard" alt="wishlisticon" />
                     </button>
                  </div>
                  <div className="product-body">
                     <div className="fruits-rating">
                        <p className="product-type">Fruits</p>
                        <span className="product-rating"> ⭐️ 4.8</span>
                     </div>
                     <h3 className="product-name">Fresh strawberry</h3>
                     <p className="product-quantity">500g</p>
                     <div className="product-price-wrap">
                        <strong className="product-price">$8.00</strong>
                        <span className="product-oldprice">$10.00</span>
                        <button className="product-addtocart" type="button" aria-label="Add Fresh strawberry to cart">
                           <img src="/assets/images/HubSpot Brand Kit/Logo/SVG/shopping-bag.png" className="carticon" alt="cart icon" />
                           <span className="product-add">Add</span>
                        </button>
                     </div>
                  </div>
               </article>

               {/* Duplicate Product Cards (Placeholder/Static) - Ideally map over data */}
               {/* ... (Repeating just one more for brevity in manual migration, keeping structure) ... */}
               <article className="product-card" aria-label="Fresh strawberry-500g">
                  <figure className="product-media">
                     <img src="/assets/images/Products/strawberry-isolated-white-background-close-up.jpg"
                        alt="Fresh strawberries in a bowl-500g" className="product-image" width="400" height="300" />
                  </figure>
                  <div className="product-toprow">
                     <span className="product-badge">20% off</span>
                     <button className="wishlist-btn" type="button" aria-pressed="false" aria-label="Add to wishlist">
                        <img src="/assets/images/HubSpot Brand Kit/Logo/SVG/e-commerce.png" className="wishlisticon-productscard" alt="wishlisticon" />
                     </button>
                  </div>
                  <div className="product-body">
                     <div className="fruits-rating">
                        <p className="product-type">Fruits</p>
                        <span className="product-rating"> ⭐️ 4.8</span>
                     </div>
                     <h3 className="product-name">Fresh strawberry</h3>
                     <p className="product-quantity">500g</p>
                     <div className="product-price-wrap">
                        <strong className="product-price">$8.00</strong>
                        <span className="product-oldprice">$10.00</span>
                        <button className="product-addtocart" type="button" aria-label="Add Fresh strawberry to cart">
                           <img src="/assets/images/HubSpot Brand Kit/Logo/SVG/shopping-bag.png" className="carticon" alt="cart icon" />
                           <span className="product-add">Add</span>
                        </button>
                     </div>
                  </div>
               </article>
               {/* Add more product cards as needed */}
            </div>
         </section>

         {/* Summer Discount */}
         <section className="discount-section" aria-label="Summer discount promo">
            <figure className="promo-side promo-left">
               <img src="/assets/images/promo/vegetable-promo.png" alt="Woman buying vegetables" width="300" className="left-image" />
            </figure>

            <div className="discount-card" role="region" aria-labelledby="discount-heading">
               <div className="header-wraper">
                  <header className="discount-card-header">
                     <h2 id="discount-heading">Winter <span className="highlighted-discount-text">Discount</span></h2>
                     <h4 className="discount-card-offerline">Get 50% off - Limited Time Offer!</h4>
                  </header>
               </div>
               <div className="days-counter" aria-live="polite">
                  <div className="time-wrapper">
                     <div className="timer" id="promo-timer" data-ends-at="2026-01-01T00:00:00Z">
                        <time className="timer-days" dateTime="">04</time>
                        <span className="timer-sep">:</span>
                        <time className="timer-hours" dateTime="">14</time>
                        <span className="timer-sep">:</span>
                        <time className="timer-minutes" dateTime="">48</time>
                        <span className="timer-sep">:</span>
                        <time className="timer-seconds" dateTime="">18</time>
                     </div>
                  </div>
                  <div className="time-labels">Days &nbsp; Hours &nbsp; Minutes &nbsp; Seconds</div>
               </div>
               <Link to="/shop" className="hero-shopnow-btn" aria-label="Shop Fresh Vegetables and Fruits">Shop Now &#8594;</Link>
            </div>

            <figure className="promo-side promo-right">
               <img src="/assets/images/promo/fruits-promo.png" alt="Woman buying fruits" width="300" className="right-image" />
            </figure>
         </section>

         {/* Weekly deals container */}
         <section className="deals-promo-container" aria-label="Weekly deals promo">
            <div className="promo-wrapper">
               {/* LEFT SIDE — TEXT */}
               <article className="deal-promo">
                  <span className="promo-header"> Weekly Deals</span>
                  <h2 className="promo-tagline">
                     Unbeatable Offers: Your <br />
                     <span className="highlighted-promo-text">Weekly Grocery Specials</span>
                  </h2>
                  <p className="promo-para">Weekly Wonders — Fresh Deals, Fresh Savings</p>
                  <Link to="/shop" className="promo-btn" aria-label="Shop weekly grocery specials">
                     Shop Now →
                  </Link>
               </article>
               {/* RIGHT SIDE — IMAGE */}
               <figure className="promo-image" aria-hidden="true">
                  <img src="/assets/images/promo/shopping basket.png" alt="Basket filled with groceries" className="promo-imagee" />
               </figure>
            </div>
         </section>

         {/* NEWS & BLOG */}
         <section className="news-blog-section" aria-label="News and blogs">
            <div className="products-wrap">
               <div className="product-text">
                  <h4 className="products">News & Blogs</h4>
                  <h2 className="featured-products">Our Latest <span className="highlight-products">News and Blogs </span></h2>
               </div>
               <button className="view-btn">View All &#8594;</button>
            </div>

            <div className="blog-grid">
               {/* Post 1 */}
               <article className="blog-card">
                  <figure className="blog-media">
                     <img src="/assets/images/blog/blog2.png" alt="Woman shopping for vegetables" width="420" height="240" />
                  </figure>
                  <div className="blog-meta">
                     <p className="blog-author">Jenny Alexander · <time dateTime="2024-08-14">14 August 2024</time></p>
                     <h3 className="blog-title"><a>How to Create a Grocery Shopping List: Stay Organized</a></h3>
                     <a className="read-more" href="/blog/how-to-create-a-grocery-shopping-list">Read More</a>
                  </div>
               </article>
               {/* Add more blog posts as needed */}
            </div>
         </section>

         {/* FAQ Section */}
         <section className="faq-section" aria-label="Frequently asked questions">
            <div className="container faq-container">
               <header className="faq-header">
                  <p className="eyebrow">FAQ</p>
                  <h2 className="faq-title">Frequently Asked <span className="highlight">Questions</span></h2>
               </header>
               <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                     <h3 className="accordion-question">
                        <button type="button" className="accordion-toggle">
                           <span className="q-text">Are the products fresh and of high quality?</span>
                           <span className="q-icon" aria-hidden="true">+</span>
                        </button>
                     </h3>
                     <div className="accordion-panel">
                        <p>Yes — we source fresh produce directly from trusted suppliers and conduct quality checks before dispatch.</p>
                     </div>
                  </div>
                  {/* More accordion items... */}
               </div>
            </div>
         </section>

         {/* Newsletter section */}
         <section className="newsletter" aria-label="Subscribe to our newsletter">
            <div className="container newsletter-container">
               <article className="newsletter-contains">
                  <h3 className="header-newsletter">Our Newsletter</h3>
                  <h2 className="newsletter-header">
                     Subscribe to our Newsletter to <br /> Get <span className="highlight-text-newsletter">Updates on Our Latest Offers</span>
                  </h2>
                  <p className="newsletter-promo">Get 25% off on your first order by subscribing to our newsletter</p>
                  <form id="newsletterForm" className="newsletter-form" noValidate>
                     <input id="newsletter-email" name="email" type="email" className="newsletter-input" placeholder="Enter Email Address" required aria-required="true" autoComplete="email" />
                     <button type="submit" className="subs-btn" aria-label="Subscribe to newsletter">Subscribe</button>
                     <div id="newsletterStatus" className="newsletter-status" role="status" aria-live="polite"></div>
                  </form>
               </article>
            </div>
         </section>
      </main>
   );
}

import { useState } from 'react';
import ProductCard from '../../components/ui/ProductCard/ProductCard';
import ShopSidebar from '../../components/sections/ShopSidebar/ShopSidebar';
import { products } from '../../data/products';

function Shop() {
   const [activeFilters, setActiveFilters] = useState({
      categories: [],
      priceMax: 125,
   });

   const filtered = products.filter((p) => {
      const priceNum = parseFloat(p.price.replace('$', ''));
      const inCategory = activeFilters.categories.length === 0 || activeFilters.categories.includes(p.category);
      return inCategory && priceNum <= activeFilters.priceMax;
   });

   return (
      <main>
         {/* Hero breadcrumb */}
         <section className="hero-section">
            <div className="hero-wrapper">
               <h3 className="hero-header">Shop</h3>
               <h4 className="hero-sub-header">Home / Shop</h4>
            </div>
         </section>

         <section className="shop-body">
            {/* Sidebar */}
            <ShopSidebar activeFilters={activeFilters} setActiveFilters={setActiveFilters} />

            {/* Products */}
            <article className="shop-main">
               <div className="shop-toprow">
                  <p>Showing 1–{filtered.length} of {products.length} results</p>
                  <div className="toprow-sort">
                     <span>Sort by:</span>
                     <button className="default-sort">Default Sorting <span className="caret">▾</span></button>
                  </div>
               </div>
               <div className="products-grid" id="productGrid">
                  {filtered.map((product) => (
                     <ProductCard key={product.id} product={product} />
                  ))}
               </div>
            </article>
         </section>
      </main>
   );
}

export default Shop;

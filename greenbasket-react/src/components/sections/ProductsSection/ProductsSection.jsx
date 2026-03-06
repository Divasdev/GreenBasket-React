import { Link } from 'react-router-dom';
import ProductCard from '../../ui/ProductCard/ProductCard';

/**
 * ProductsSection — reusable section for both "Featured Products" and "Best Sellers".
 * Props:
 *   eyebrow: string (e.g. "Products", "Best Seller")
 *   title: string (e.g. "Featured Products")
 *   highlight: string (highlighted word in title)
 *   products: array of product objects
 */
function ProductsSection({ eyebrow, title, highlight, products }) {
  return (
    <section className="products-section">
      <div className="products-wrap">
        <div className="product-text">
          <h4 className="products">{eyebrow}</h4>
          <h2 className="featured-products">
            {title.replace(highlight, '')}
            <span className="highlight-products">{highlight}</span>
          </h2>
        </div>
        <Link to="/shop" className="view-btn">View All Products →</Link>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;

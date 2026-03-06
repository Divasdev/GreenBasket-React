// HeroBreadcrumb Component
// TODO: Build this reusable UI component
// Example: Cart.jsx
import HeroBreadcrumb from '../../components/ui/HeroBreadcrumb/HeroBreadcrumb';


// src/components/ui/HeroBreadcrumb/HeroBreadcrumb.jsx

function HeroBreadcrumb({ title, breadcrumb }) {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <h3 className="hero-header">{title}</h3>
        <h4 className="hero-sub-header">{breadcrumb}</h4>
      </div>
    </section>
  );
}

export default HeroBreadcrumb;
function ShopSidebar({ activeFilters, setActiveFilters }) {
  const categories = ['vegetables', 'fruits', 'milk-eggs', 'bakery', 'household', 'dry-fruits', 'drinks'];
  const brands = ['FreshHarvest', 'NaturesBest', 'GoodGrains', 'FarmFresh', 'Greengrocer'];

  const toggleCategory = (cat) => {
    const cats = activeFilters.categories.includes(cat)
      ? activeFilters.categories.filter((c) => c !== cat)
      : [...activeFilters.categories, cat];
    setActiveFilters({ ...activeFilters, categories: cats });
  };

  const labels = {
    'vegetables': 'Vegetables',
    'fruits': 'Fresh Fruits',
    'milk-eggs': 'Milk & Eggs',
    'bakery': 'Bakery',
    'household': 'House Hold',
    'dry-fruits': 'Dry Fruits',
    'drinks': 'Drinks',
  };

  return (
    <article className="shop-sidebar">
      <div className="side-bar">
        <h3 className="filter-options">Filter Options</h3>

        <h4 className="category-sidebar">Category</h4>
        <ul className="category-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
          {categories.map((cat) => (
            <li key={cat}>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value={cat}
                  checked={activeFilters.categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                {' '}{labels[cat]}
              </label>
            </li>
          ))}
        </ul>

        <div className="price-wrap">
          <h4 className="filter-price">Price</h4>
          <p className="price-range-text">$25.00 - ${activeFilters.priceMax}.00</p>
          <input
            type="range" min="25" max="125" step="1"
            value={activeFilters.priceMax}
            aria-label="Price range"
            onChange={(e) => setActiveFilters({ ...activeFilters, priceMax: Number(e.target.value) })}
          />
        </div>

        <div className="review-wrap">
          <h4>Review</h4>
          <ul className="review-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
            {[5, 4, 3, 2, 1].map((stars) => (
              <li key={stars}>
                <label>
                  <input type="checkbox" name="review" value={stars} />
                  {' '}<span className="star-rating">{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</span> {stars} Star
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="brand-wrap">
          <h4>Brand</h4>
          <ul className="brand-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
            {brands.map((brand) => (
              <li key={brand}>
                <label><input type="checkbox" name="brand" value={brand} /> {brand}</label>
              </li>
            ))}
          </ul>

          <div className="avail-wrap">
            <h4>Availability</h4>
            <ul className="avail-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li><label><input type="checkbox" name="availability" value="in-stock" /> In stock</label></li>
              <li><label><input type="checkbox" name="availability" value="out-of-stock" /> Out of stock</label></li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ShopSidebar;

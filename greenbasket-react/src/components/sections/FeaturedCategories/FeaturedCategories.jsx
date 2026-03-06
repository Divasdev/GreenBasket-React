import CategoryCard from '../../ui/CategoryCard/CategoryCard';

// Category images
import vegetables from '../../../assets/assets/images/categories/vegetables.png';
import fruits from '../../../assets/assets/images/categories/fruits.png';
import milk from '../../../assets/assets/images/products/milk.png';
import bakery from '../../../assets/assets/images/categories/bakery.png';
import household from '../../../assets/assets/images/categories/household-categories-Photoroom.png';
import dryfruits from '../../../assets/assets/images/categories/dryfruits.png';

const categories = [
  { id: 1, image: vegetables, title: 'Vegetables', count: 52 },
  { id: 2, image: fruits, title: 'Fresh Fruits', count: 48 },
  { id: 3, image: milk, title: 'Milk & Eggs', count: 12 },
  { id: 4, image: bakery, title: 'Bakery', count: 62 },
  { id: 5, image: household, title: 'House Hold', count: 25 },
  { id: 6, image: dryfruits, title: 'Dry Fruits', count: 8 },
];

function FeaturedCategories() {
  return (
    <section className="item-categories">
      <div className="categories-container">
        <h3 className="item-card-header">Categories</h3>
        <h2 className="item-card-header2">Featured <span className="item-highlighted-text">Categories</span></h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} image={cat.image} title={cat.title} count={cat.count} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;

import { Link } from 'react-router-dom';

function CategoryCard({ image, title, count }) {
  return (
    <Link to="/shop" className="category-card">
      <div className="thumb-wrap">
        <img src={image} alt={title} className="category-thumb" />
      </div>
      <div className="category-body">
        <h4 className="category-title">{title}</h4>
        <p className="category-count">{count} products</p>
      </div>
    </Link>
  );
}

export default CategoryCard;

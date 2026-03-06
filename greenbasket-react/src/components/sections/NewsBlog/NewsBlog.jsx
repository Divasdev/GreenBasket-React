import BlogCard from '../../ui/BlogCard/BlogCard';
import blog1 from '../../../assets/assets/images/blog/blog2.png';
import blog2 from '../../../assets/assets/images/blog/blog1.png';
import blog3 from '../../../assets/assets/images/blog/blog3.png';

const blogPosts = [
  {
    id: 1,
    image: blog1,
    imageAlt: 'Woman shopping for vegetables',
    author: 'Jenny Alexander',
    date: '14 August 2024',
    dateTime: '2024-08-14',
    title: 'How to Create a Grocery Shopping List: Stay Organized',
    link: '/coming-soon',
  },
  {
    id: 2,
    image: blog2,
    imageAlt: 'Grocery store aisle with fresh produce',
    author: 'Jenny Alexander',
    date: '13 August 2024',
    dateTime: '2024-08-13',
    title: 'Summer Produce Guide: Fresh Fruits and Vegetables to Enjoy',
    link: '/coming-soon',
  },
  {
    id: 3,
    image: blog3,
    imageAlt: 'Woman picking fresh produce at a market',
    author: 'Jenny Alexander',
    date: '12 August 2024',
    dateTime: '2024-08-12',
    title: 'Top 10 Superfoods for a Balanced Diet: Boost Your Health',
    link: '/coming-soon',
  },
];

function NewsBlog() {
  return (
    <section className="news-blog-section" aria-label="News and blogs">
      <div className="products-wrap">
        <div className="product-text">
          <h4 className="products">News &amp; Blogs</h4>
          <h2 className="featured-products">Our Latest <span className="highlight-products">News and Blogs</span></h2>
        </div>
        <button className="view-btn">View All →</button>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default NewsBlog;

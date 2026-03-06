import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  const { image, imageAlt, author, date, dateTime, title, link } = post;

  return (
    <article className="blog-card">
      <figure className="blog-media">
        <img src={image} alt={imageAlt} width="420" height="240" />
      </figure>

      <div className="blog-meta">
        <p className="blog-author">
          {author} · <time dateTime={dateTime}>{date}</time>
        </p>
        <h3 className="blog-title">
          <Link to={link}>{title}</Link>
        </h3>
        <Link className="read-more" to={link}>Read More</Link>
      </div>
    </article>
  );
}

export default BlogCard;

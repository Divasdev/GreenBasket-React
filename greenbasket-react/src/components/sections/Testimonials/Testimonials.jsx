import { useState } from 'react';
import avatar1 from '../../../assets/assets/images/Avatars/avatar1.png';
import avatar2 from '../../../assets/assets/images/Avatars/avatar2.png';
import avatar3 from '../../../assets/assets/images/Avatars/avatar3.png';
import avatar4 from '../../../assets/assets/images/Avatars/avatar4.png';
import avatar5 from '../../../assets/assets/images/Avatars/avatar5.png';

const testimonials = [
  {
    id: 1,
    text: '"I\'ve tried several grocery delivery services, and this one is by far the best. The website is user-friendly, the selection is vast, and the customer service is outstanding. Highly recommend!"',
    rating: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️',
    score: '5.0',
    name: 'Bessie Cooper',
    role: 'Housewife',
    avatar: avatar1,
  },
  {
    id: 2,
    text: '"The freshness and quality of the produce is unmatched. My family loves the variety available and delivery is always on time!"',
    rating: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️',
    score: '5.0',
    name: 'Jenny Alexander',
    role: 'Founder & CEO',
    avatar: avatar2,
  },
  {
    id: 3,
    text: '"Great prices, fast delivery and top quality. I have been shopping here for 6 months and I am never going back to a physical store!"',
    rating: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️',
    score: '4.9',
    name: 'Jane Cooper',
    role: 'Working Professional',
    avatar: avatar3,
  },
];

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[currentIndex];

  return (
    <section className="testimonials-section" aria-label="Customer testimonials">
      <div className="container testimonials-container">
        <header className="testimonials-header">
          <p className="eyebrow">Testimonials</p>
          <h2 className="testimonials-title">
            Testimonials from <br />
            <span className="highlight">Our Loyal Customers</span>
          </h2>
        </header>

        <div className="testimonials-inner">
          {/* Avatars row */}
          <div className="testimonials-avatars" role="tablist" aria-label="Customer avatars">
            {avatars.map((av, i) => (
              <img
                key={i}
                src={av}
                alt={`Customer avatar ${i + 1}`}
                className={`avatar-img ${i === 2 ? 'avatar-center' : ''}`}
              />
            ))}
          </div>

          {/* Testimonial content + controls */}
          <div className="testimonial-panel">
            <div className="arrow-wrap">
              <button className="testimonial-prev" aria-label="Previous testimonial" onClick={prev}>◀</button>
            </div>
            <div className="text-wrap">
              <article className="testimonial" aria-live="polite" key={t.id}>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-rating" aria-hidden="true">
                  {t.rating} <strong>{t.score}</strong>
                </div>
                <footer className="testimonial-author">
                  <strong className="author-name">{t.name}<br /></strong>
                  <span className="author-role">{t.role}</span>
                </footer>
              </article>
            </div>
            <div className="arrow-wrap-right">
              <button className="testimonial-next" aria-label="Next testimonial" onClick={next}>▶</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

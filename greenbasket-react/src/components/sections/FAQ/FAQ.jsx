import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Are the products fresh and of high quality?',
    answer: 'Yes — we source fresh produce directly from trusted suppliers and conduct quality checks before dispatch.',
    defaultOpen: false,
  },
  {
    id: 2,
    question: 'What are your delivery hours?',
    answer: 'We deliver from 7:00 AM to 10:00 PM daily. For bulk or scheduled deliveries, please contact customer support for exact time slots.',
    defaultOpen: true,
  },
  {
    id: 3,
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards, UPI, netbanking and cash on delivery (where available).',
    defaultOpen: false,
  },
  {
    id: 4,
    question: 'Do you offer any discounts or promotions?',
    answer: 'Yes — check the homepage banners and your account for personalized offers. New users often get welcome discounts.',
    defaultOpen: false,
  },
  {
    id: 5,
    question: 'How can I provide feedback about my experience?',
    answer: 'You can leave feedback via the app/website under Order History, or email support@greenbasket.example with your order details.',
    defaultOpen: false,
  },
  {
    id: 6,
    question: 'Do you offer bulk ordering for events or businesses?',
    answer: 'Yes — we provide bulk ordering and business accounts. Contact our sales team at sales@greenbasket.example for volume pricing and delivery planning.',
    defaultOpen: false,
  },
];

function FAQ() {
  // Track which item is open (null = none)
  const [openId, setOpenId] = useState(2); // item 2 is open by default

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="faq-section" aria-label="Frequently asked questions">
      <div className="container faq-container">
        <header className="faq-header">
          <p className="eyebrow">FAQ</p>
          <h2 className="faq-title">Frequently Asked <span className="highlight">Questions</span></h2>
        </header>

        <div className="accordion" role="region">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="accordion-item">
                <h3 className="accordion-question">
                  <button
                    type="button"
                    className="accordion-toggle"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${faq.id}`}
                    onClick={() => toggle(faq.id)}
                  >
                    <span className="q-text">{faq.question}</span>
                    <span className="q-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`panel-${faq.id}`}
                    className="accordion-panel"
                    role="region"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

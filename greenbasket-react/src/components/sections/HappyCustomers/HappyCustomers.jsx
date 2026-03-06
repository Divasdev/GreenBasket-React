import customer1 from '../../../assets/assets/images/users/happy-customer1.png';
import customer2 from '../../../assets/assets/images/users/happy-customer2.png';
import customer3 from '../../../assets/assets/images/users/happy-customer3.png';
import customer4 from '../../../assets/assets/images/users/happy-customer4.png';
import customer5 from '../../../assets/assets/images/users/happy-customer5.png';

const customers = [
  { src: customer1, alt: 'Happy customer 1 with groceries' },
  { src: customer2, alt: 'Happy customer 2 with groceries' },
  { src: customer3, alt: 'Happy customer 3 with groceries' },
  { src: customer4, alt: 'Happy customer 4 with groceries' },
  { src: customer5, alt: 'Happy customer 5 with groceries' },
];

function HappyCustomers() {
  return (
    <section className="happy-customers" aria-label="Happy customers">
      <div className="container happy-customers-container">
        <div className="happy-customer-list">
          {customers.map((c, i) => (
            <div key={i} className="happy-customer-item">
              <figure>
                <img src={c.src} alt={c.alt} width="260" height="220" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HappyCustomers;

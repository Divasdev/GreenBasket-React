/**
 * products.js – sample product data extracted from the HTML pages.
 * TODO: Replace with real API calls or a backend when you're ready.
 *
 * Each product has:
 *   id        – unique identifier
 *   name      – product name
 *   category  – e.g. 'Fruits', 'Vegetables'
 *   image     – path relative to src/assets/images
 *   price     – current price (number)
 *   oldPrice  – original price before discount (number, optional)
 *   discount  – discount label e.g. '20% off' (string, optional)
 *   rating    – star rating (number)
 *   quantity  – unit description e.g. '500g', '1kg'
 */
export const products = [
   {
      id: 1,
      name: 'Fresh Strawberry',
      category: 'Fruits',
      image: 'assets/assets/images/Products/strawberry-isolated-white-background-close-up.jpg',
      price: 8.00,
      oldPrice: 10.00,
      discount: '20% off',
      rating: 4.8,
      quantity: '500g',
   },
   {
      id: 2,
      name: 'Red Apple',
      category: 'Fruits',
      image: 'assets/assets/images/Products/apple.png',
      price: 45,
      oldPrice: null,
      discount: null,
      rating: 4.6,
      quantity: '1kg',
   },
   {
      id: 3,
      name: 'Tomato',
      category: 'Vegetables',
      image: 'assets/assets/images/Products/tomato.png',
      price: 30,
      oldPrice: null,
      discount: null,
      rating: 4.5,
      quantity: '1kg',
   },
   {
      id: 4,
      name: 'Milk',
      category: 'Dairy',
      image: 'assets/assets/images/Products/milk.png',
      price: 60,
      oldPrice: null,
      discount: null,
      rating: 4.7,
      quantity: '1L',
   },
   // TODO: Add more products here as you build out the shop page
];

/**
 * categories.js – category data used in the Categories section on Home page.
 */
export const categories = [
   { id: 1, title: 'Vegetables', count: 52, image: 'assets/assets/images/categories/vegetables.png' },
   { id: 2, title: 'Fresh Fruits', count: 48, image: 'assets/assets/images/categories/fruits.png' },
   { id: 3, title: 'Milk & Eggs', count: 12, image: 'assets/assets/images/Products/milk.png' },
   { id: 4, title: 'Bakery', count: 62, image: 'assets/assets/images/categories/bakery.png' },
   { id: 5, title: 'House Hold', count: 25, image: 'assets/assets/images/categories/household-categories-Photoroom.png' },
   { id: 6, title: 'Dry Fruits', count: 8, image: 'assets/assets/images/categories/dryfruits.png' },
];

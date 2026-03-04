# React Migration Tasks

Welcome to the React Migration Plan for **GreenBasket**! This document breaks down the process of converting the original HTML/CSS/JS files (located in `old-html,css,js`) into a modern, component-based React application.

## Phase 1: Project Setup
- [ ] Ensure Node.js is installed on your machine.
- [ ] Initialize the React project with Vite (e.g., `npm create vite@latest greenbasket-react -- --template react` or use the existing `greenbasket-react` initialized folder).
- [ ] Navigate to your project folder (`cd greenbasket-react`).
- [ ] Run `npm install` to install core dependencies.
- [ ] Install React Router for navigation: `npm install react-router-dom`.
- [ ] Check if `vite.config.js` and `package.json` are appropriately set up.
- [ ] Start the development server using `npm run dev` to verify the installation works.

## Phase 2: Folder Structure Creation
Create the following directories inside the `src` folder for a scalable architecture:
- [ ] `src/assets/` - For images, global CSS, and fonts.
- [ ] `src/components/` - For reusable UI components (e.g., Header, Footer, Cards).
- [ ] `src/components/ui/` - (Optional) For base UI like generic Buttons, Inputs.
- [ ] `src/pages/` - For page-level components (Home, Shop, Cart, etc.).
- [ ] `src/context/` - For global state management (e.g., CartContext, UserContext).
- [ ] `src/hooks/` - For custom React hooks.
- [ ] `src/utils/` - For utility functions and constants.

## Phase 3: Asset Migration
- [ ] Copy all images from `old-html,css,js/assets/images/` to `src/assets/images/`.
- [ ] Copy global styles from `old-html,css,js/assets/css/styles.css` to `src/index.css` or `src/assets/css/global.css`.
- [ ] Update any image or font paths in the CSS to reflect the new Vite asset handling (using relative paths or `/assets/...`).

## Phase 4: Setting up Global Layout & Routing
- [ ] Create a `Layout.jsx` component that includes the global `Header` and `Footer`.
- [ ] Set up routing in `src/App.jsx` using `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`.
- [ ] Define placeholder route components in `src/pages/` to test routing (e.g., `Home.jsx`, `Shop.jsx`, `Cart.jsx`).
- [ ] Wrap the main application with necessary Context Providers (e.g., `CartProvider`).

## Phase 5: Building Reusable Components
Extract common UI patterns from the HTML files into React components:
- [ ] **Header / Navbar**: Convert the `<header>` in `index.html` to `Header.jsx`. Handle responsive menu toggles with React state instead of hidden checkboxes.
- [ ] **Footer**: Convert the footer HTML (if present) into `Footer.jsx`.
- [ ] **ProductCard**: Create `ProductCard.jsx` taking props (image, title, price, discount) based on the article cards in `index.html`.
- [ ] **CategoryCard**: Create `CategoryCard.jsx` based on the `.category-card` loops.
- [ ] **PromoCard**: Create `PromoCard.jsx` for the discount and weekly deal banners.

## Phase 6: Converting Pages
Convert individual HTML files into React Page Components inside `src/pages/`:
- [ ] **Home Page** (`index.html` -> `Home.jsx`): Compose using Hero, Categories, Promos, and Best Seller components.
- [ ] **Shop Page** (`shop.html` -> `Shop.jsx`): Map through a list of products and render `ProductCard`s.
- [ ] **Cart Page** (`cart.html` -> `Cart.jsx`): Build cart table and summary sections.
- [ ] **Checkout Page** (`checkout.html` -> `Checkout.jsx`): Create form inputs and order summary.
- [ ] **Wishlist Page** (`wishlist.html` -> `Wishlist.jsx`): Render favored items.
- [ ] **User Account Pages** (`myaccount.html`, `orders.html` -> `AccountLayout.jsx`, `Profile.jsx`, `Orders.jsx`).
- [ ] **Other informational pages** (`about.html`, `coming-soon.html` -> `About.jsx`, `ComingSoon.jsx`).

## Phase 7: Migrating Vanilla JS to React Hooks/Logic
- [ ] Convert Vanilla JS countdown timers (e.g., in the Summer Discount section) to a `useEffect` and `useState` interval inside the relevant component.
- [ ] Convert manual DOM manipulators (e.g., `document.querySelector('.cart-badge')`) into React state bindings.
- [ ] Handle form submissions (search, login, checkout) with React forms or controlled inputs (e.g., `useState`).

## Phase 8: State Management Integration
- [ ] Create `CartContext.jsx` to hold cart items and manage global cart quantity.
- [ ] Wire up "Add to Cart" buttons in `ProductCard` to dispatch actions to the CartContext.
- [ ] Update the Header's `.cart-badge` to dynamically display the total items from context.

## Phase 9: Cleanup and Optimization
- [ ] Verify there are no `class="..."` attributes remaining (must be `className="..."`).
- [ ] Ensure all `<img>` tags have `alt` text and self-close (`<img />`).
- [ ] Ensure `for` attributes in labels are changed to `htmlFor`.
- [ ] Run `npm run lint` if ESLint is configured, to check for code quality.
- [ ] Finally, run `npm run build` to verify the application builds without errors.

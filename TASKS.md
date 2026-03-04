# React Migration Plan – **GreenBasket**
> **Current Goal:** Migrate all UI components (HTML/CSS) by **March 10th**.
> **Logic (Phase 7 & 8):** Deferred until UI is complete.

## Phase 1: Project Setup (COMPLETED)
- [x] Ensure Node.js is installed on your machine.
- [x] Initialize the React project with Vite.
- [x] Navigate to your project folder (`cd greenbasket-react`).
- [x] Run `npm install` to install core dependencies.
- [x] Install React Router for navigation: `npm install react-router-dom`.
- [x] Check if `vite.config.js` and `package.json` are appropriately set up.
- [x] Start the development server using `npm run dev` to verify the installation works.

## Phase 2: Folder Structure Creation (COMPLETED)
- [x] `src/assets/` - For images, global CSS, and fonts.
- [x] `src/components/` - For reusable UI components (Layout, UI, Sections).
- [x] `src/pages/` - For page-level components (Home, Shop, Cart, etc.).
- [x] `src/context/` - For global state management (CartContext, WishlistContext).
- [x] `src/hooks/` - For custom React hooks.
- [x] `src/data/` - For utility data and constants.

## Phase 3: Asset Migration (COMPLETED)
- [x] Copy all images from `old-html,css,js/assets/images/` to `src/assets/assets/images/`.
- [x] Copy global styles to `src/styles/global.css`.
- [x] Update any image or font paths in the CSS (Done in global.css).

## Phase 4: Setting up Global Layout & Routing (COMPLETED)
- [x] Set up routing in `src/App.jsx` using `BrowserRouter`, `Routes`, and `Route`.
- [x] Define placeholder route components in `src/pages/`.
- [x] Wrap the main application with necessary Context Providers (`CartProvider`, `WishlistProvider`).
- [x] Create `Header` and `Footer` component stubs and include them in `App.jsx`.

---

## Phase 5: Building Reusable Components (READY FOR PRACTICE)

Extract common UI patterns from the HTML files into React components:
- [ ] **Header / Navbar**: Convert the `<header>` in `index.html` to `Header.jsx`.
- [ ] **Footer**: Convert the footer HTML into `Footer.jsx`.
- [ ] **ProductCard**: Create `ProductCard.jsx` taking props (image, title, price, discount).
- [ ] **CategoryCard**: Create `CategoryCard.jsx` based on the `.category-card` loops.
- [ ] **PromoCard**: Create `PromoCard.jsx` for the discount and weekly deal banners.











## Phase 6: Converting Pages (READY FOR PRACTICE)
Convert individual HTML files into React Page Components inside `src/pages/`:
- [ ] **Home Page** (`index.html` -> `Home/Home.jsx`)
- [ ] **Shop Page** (`shop.html` -> `Shop/Shop.jsx`)
- [ ] **Cart Page** (`cart.html` -> `Cart/Cart.jsx`)
- [ ] **Checkout Page** (`checkout.html` -> `Checkout/Checkout.jsx`)
- [ ] **Wishlist Page** (`wishlist.html` -> `Wishlist/Wishlist.jsx`)
- [ ] **User Account Pages** (`myaccount.html`, `orders.html`)
- [ ] **About Page** (`about.html` -> `About/About.jsx`)

## Phase 7: Migrating Vanilla JS to React Hooks/Logic (DEFERRED)
- [ ] Convert Vanilla JS countdown timers to `useCountdown`.
- [ ] Convert manual DOM manipulators to state bindings.
- [ ] Handle form submissions with React forms.

## Phase 8: State Management Integration (DEFERRED)
- [ ] Wire up "Add to Cart" buttons to `CartContext`.
- [ ] Update the Header's `.cart-badge` dynamically.

## Phase 9: Cleanup and Optimization
- [ ] Rename `class` to `className`.
- [ ] Self-close all `<img>` and `<br>` tags.
- [ ] Rename `for` to `htmlFor`.
- [ ] Run `npm run lint`.
- [ ] Verify final build with `npm run build`.

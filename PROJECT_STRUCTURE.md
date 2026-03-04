# GreenBasket React – Project Structure Guide

> 📁 **Share this file with anyone working on the project** to understand what every file and folder does.

---

## Full Folder Tree

```
greenbasket-react/
├── public/                        # Static files served as-is (not processed by Vite)
├── src/
│   ├── assets/
│   │   └── assets/               # All original images + CSS from the HTML project
│   ├── components/
│   │   ├── layout/               # Global layout wrappers rendered on every page
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Header.module.css
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.module.css
│   │   │   └── Newsletter/
│   │   │       ├── Newsletter.jsx
│   │   │       └── Newsletter.module.css
│   │   ├── ui/                   # Small, reusable building-block components
│   │   │   ├── ProductCard/
│   │   │   ├── CategoryCard/
│   │   │   ├── CartItem/
│   │   │   ├── WishlistItem/
│   │   │   ├── TeamCard/
│   │   │   ├── BlogCard/
│   │   │   ├── Accordion/
│   │   │   ├── HeroBreadcrumb/
│   │   │   ├── OrderSummary/
│   │   │   └── BackToTop/
│   │   └── sections/             # Larger page sections composed from ui/ components
│   │       ├── HeroSection/
│   │       ├── FeaturedCategories/
│   │       ├── PromoRow/
│   │       ├── ProductsSection/
│   │       ├── DiscountSection/
│   │       ├── WeeklyDeals/
│   │       ├── Testimonials/
│   │       ├── NewsBlog/
│   │       ├── FAQ/
│   │       ├── HappyCustomers/
│   │       └── ShopSidebar/
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── WishlistContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── hooks/
│   │   ├── useCart.js
│   │   ├── useWishlist.js
│   │   ├── useCountdown.js
│   │   └── useNewsletter.js
│   ├── pages/
│   │   ├── Home/Home.jsx
│   │   ├── Shop/Shop.jsx
│   │   ├── About/About.jsx
│   │   ├── Cart/Cart.jsx
│   │   ├── Checkout/Checkout.jsx
│   │   ├── Payment/Payment.jsx
│   │   ├── Orders/Orders.jsx
│   │   ├── Wishlist/Wishlist.jsx
│   │   ├── MyAccount/MyAccount.jsx
│   │   ├── TrackOrder/TrackOrder.jsx
│   │   └── ComingSoon/ComingSoon.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 📂 File-by-File Explanation

### Root Level

| File | What it does |
|------|-------------|
| `index.html` | The single HTML page Vite injects the React app into. You rarely touch this. |
| `vite.config.js` | Vite bundler configuration (dev server, build options, plugins). |
| `package.json` | Lists all npm dependencies (React, react-router-dom, etc.) and scripts (`npm run dev`, `npm run build`). |
| `TASKS.md` | Step-by-step migration checklist. Work through this as you build out each component. |
| `PROJECT_STRUCTURE.md` | **This file.** Reference guide explaining every file and folder. |

---

### `src/main.jsx`
> **The entry point.** React mounts the entire app here by finding `<div id="root">` in `index.html` and rendering `<App />` inside it. Also imports `styles/global.css`.

---

### `src/App.jsx`
> **The app shell.** Sets up:
> - `CartProvider` and `WishlistProvider` so all components can access global state
> - `BrowserRouter` for client-side routing
> - `<Header />` and `<Footer />` so they appear on every page
> - All `<Route>` definitions mapping URL paths to page components

---

### `src/styles/global.css`
> **Global stylesheet.** Imported once in `main.jsx`. Contains:
> - Google Fonts import (Montserrat, Roboto, Pacifico)
> - All the original CSS from the HTML project (`styles.css`, `shop.css`, `cart.css`, etc.)
> As you migrate, you'll move styles from here into component-level CSS modules.

---

## 🧱 `src/components/`

Components are split into three categories:

### `layout/` — Rendered on every page via `App.jsx`

| File | What it does |
|------|-------------|
| `Header/Header.jsx` | Top navigation bar: logo, search, cart icon with badge, nav links. Uses `useCart()` for the cart count badge. |
| `Header/Header.module.css` | Scoped styles for the header only. |
| `Footer/Footer.jsx` | Bottom of every page: links, social icons, copyright. |
| `Footer/Footer.module.css` | Scoped styles for the footer. |
| `Newsletter/Newsletter.jsx` | Email subscription form. Uses the `useNewsletter` hook. Can be placed in Footer or as a standalone section. |
| `Newsletter/Newsletter.module.css` | Scoped styles for the newsletter form. |

---

### `ui/` — Small, reusable building blocks (used inside sections and pages)

| Component | What it does |
|-----------|-------------|
| `ProductCard/` | Renders a single product: image, name, price, discount badge, Add to Cart and Wishlist buttons. Used in `ProductsSection` and `Shop` page. |
| `CategoryCard/` | Renders a single category tile: image, category name, product count. Used in `FeaturedCategories`. |
| `CartItem/` | One row in the cart table: image, name, price, quantity stepper, remove button. Used in the `Cart` page. |
| `WishlistItem/` | One row in the wishlist: product image, name, price, move-to-cart and remove buttons. Used in `Wishlist` page. |
| `TeamCard/` | A team member card (photo + name + role). Used in the `About` page. |
| `BlogCard/` | A blog post preview card (image, title, date, excerpt). Used in `NewsBlog` section. |
| `Accordion/` | An expand/collapse FAQ item. Used in the `FAQ` section. |
| `HeroBreadcrumb/` | Small breadcrumb bar shown at the top of inner pages (e.g. Home > Cart). |
| `OrderSummary/` | A summary box showing subtotal, delivery charge, and total. Used in `Cart`, `Checkout`, and `Payment` pages. |
| `BackToTop/` | A floating button that scrolls the user back to the top of the page. |

Each component folder contains:
- `ComponentName.jsx` — the JSX markup and logic
- `ComponentName.module.css` — scoped CSS that only applies to this component

---

### `sections/` — Larger sections composed from `ui/` components (used inside pages)

| Section | What it does | Source (HTML) |
|---------|-------------|---------------|
| `HeroSection/` | Full-width banner: headline, tagline, Shop Now button, hero image. | `index.html` hero section |
| `FeaturedCategories/` | Grid of `CategoryCard` components. | `index.html` item-categories |
| `PromoRow/` | Two-column promo cards (Vegetables 20% off + Fruits 25% off). | `index.html` promo-row |
| `ProductsSection/` | Section heading + grid of `ProductCard`s. Reused for Featured and Best Seller. | `index.html` products-section |
| `DiscountSection/` | Winter/Summer discount countdown banner. Uses the `useCountdown` hook. | `index.html` discount-section |
| `WeeklyDeals/` | Weekly deals text + grocery basket image. | `index.html` deals-promo-container |
| `Testimonials/` | Customer testimonials slider (avatars + review quotes). | `index.html` testimonials-section |
| `NewsBlog/` | Blog post grid using `BlogCard` components. | `index.html` (if present) |
| `FAQ/` | Accordion-style FAQ list using `Accordion` components. | FAQ section in HTML |
| `HappyCustomers/` | Happy customer stats or Banner strip. | `index.html` stats strip |
| `ShopSidebar/` | Filter sidebar for the Shop page: categories, price range, ratings. | `shop.html` |

---

## 📄 `src/pages/`

Each page lives in its own folder (e.g., `pages/Home/Home.jsx`). Pages compose sections and ui components together.

| Page | Route | Source HTML | Description |
|------|-------|-------------|-------------|
| `Home/Home.jsx` | `/` | `index.html` | Assembles HeroSection, FeaturedCategories, PromoRow, ProductsSection, DiscountSection, WeeklyDeals, BestSellers, Testimonials |
| `Shop/Shop.jsx` | `/shop` | `shop.html` | ShopSidebar + product grid with filter/sort controls |
| `Cart/Cart.jsx` | `/cart` | `cart.html` | CartItem list + OrderSummary + coupon input |
| `Checkout/Checkout.jsx` | `/checkout` | `checkout.html` | Delivery address form + OrderSummary |
| `Payment/Payment.jsx` | `/payment` | `payment.html` | Payment method selection + OrderSummary |
| `Wishlist/Wishlist.jsx` | `/wishlist` | `wishlist.html` | WishlistItem list |
| `MyAccount/MyAccount.jsx` | `/my-account` | `myaccount.html` | Profile info form + tabs |
| `Orders/Orders.jsx` | `/orders` | `orders.html` | Order history list |
| `TrackOrder/TrackOrder.jsx` | `/track-order` | `trackorder.html` | Order tracking interface |
| `About/About.jsx` | `/about` | `about.html` | Mission, TeamCard grid, HappyCustomers stats |
| `ComingSoon/ComingSoon.jsx` | `/coming-soon` | `coming-soon.html` | Placeholder page for Fruits, Vegetables, Beverages, Blogs |

---

## 🔄 `src/context/`

| File | What it does |
|------|-------------|
| `CartContext.jsx` | Stores the global cart state. Provides `cartItems`, `addToCart(product)`, `removeFromCart(id)`, `updateQty(id, qty)`, `clearCart()`, `cartCount`, `cartTotal`. Wrap any component with `useCart()` to access these. |
| `WishlistContext.jsx` | Stores the global wishlist state. Provides `wishlistItems`, `toggleWishlist(product)`, `isWishlisted(productId)`, `wishlistCount`. Use `useWishlist()` to access. |

---

## 🪝 `src/hooks/`

| Hook | What it does |
|------|-------------|
| `useCart.js` | Shortcut to access `CartContext`. Equivalent to `useContext(CartContext)`. |
| `useWishlist.js` | Shortcut to access `WishlistContext`. Equivalent to `useContext(WishlistContext)`. |
| `useCountdown.js` | Converts a date string into a live countdown `{ days, hours, minutes, seconds }`. Replaces the vanilla JS timer from the HTML project. |
| `useNewsletter.js` | Manages newsletter form state: `email`, `setEmail`, `status` (`idle/loading/success/error`), and `handleSubscribe`. |

> **How to use a hook in a component:**
> ```jsx
> import useCart from '../../../hooks/useCart';
> const { addToCart, cartCount } = useCart();
> ```

---

## 🗄️ `src/data/`

| File | What it does |
|------|-------------|
| `products.js` | Static array of `products` and `categories` extracted from the HTML product cards. Use `import { products } from '../data/products'` to get product data in any component. Replace with API calls when ready. |

---

## 💡 Key Concepts for Your Migration

### CSS Modules (`.module.css`)
Each component has its own scoped CSS file. Class names are automatically namespaced so they never clash.
```jsx
import styles from './ProductCard.module.css';
<div className={styles.card}>...</div>
```

### Context vs Props
- **Context** = global state shared across the whole app (Cart, Wishlist)
- **Props** = local data passed from parent to child (product data `→` ProductCard)

### Migration Order (recommended)
1. `Header` and `Footer` first (they appear on every page)
2. `ProductCard` and `CategoryCard` (most reused components)
3. `HeroSection` and `FeaturedCategories` (fills the Home page quickly)
4. Continue through `TASKS.md` phase by phase

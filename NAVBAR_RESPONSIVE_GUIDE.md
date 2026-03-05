# Responsive Navbar – React Strategy Guide

> **Reference for:** Making the GreenBasket 3-row navbar mobile-friendly using React.

---

## Navbar Structure Overview

The navbar has 3 distinct rows:

1. **Top Bar** — Call Us + Promo text + Social Icons
2. **Main Header** — Logo + Search Bar + Wishlist/Cart/Account icons
3. **Bottom Nav** — Browse All Categories + Nav Links + Recently Viewed

---

## Row 1 — Top Bar

**Strategy: Hide on mobile.**

- Use `@media (max-width: 768px)` to `display: none` the entire top bar.
- Optionally replace it with a slim scrolling ticker for small screens.

---

## Row 2 — Main Header (Logo + Search + Icons)

**The original HTML uses a checkbox hack for the hamburger — in React, replace it with `useState`.**

### Mental Model:
1. Add a `useState` boolean called `isMenuOpen` (starts `false`)
2. Create a **hamburger button** `☰` that sets `isMenuOpen = true` on click
3. **Show/hide the nav links** based on `isMenuOpen` (via a CSS class or inline style)
4. On **desktop** (`@media`) — always show the nav, hide the hamburger button

### Search Bar:
- On mobile: collapse to a **search icon** that expands to a full-width bar on tap
- Use a second state: `isSearchOpen`

### Right Icons (Wishlist / Cart / Account):
- Keep icons always visible (just smaller on mobile)
- Hide the **text labels** on mobile via `@media`, show only the icons

---

## Row 3 — Bottom Nav (Browse + Links + Recently Viewed)

**Strategy: Convert into a slide-in drawer.**

1. On mobile → **hide** the full nav row
2. Show only a **hamburger `☰` button**
3. When clicked → slide in a drawer from the left (80–100% screen width) with all nav links
4. "Browse All Categories" → becomes an **accordion** inside the mobile drawer

---

## Behavior Summary Table

| Element | Desktop | Mobile |
|---|---|---|
| Top bar | Visible | Hidden (`display: none`) |
| Search bar | Inline in header | Icon → expands on tap |
| Nav links row | Always visible | Hidden, toggled by `useState` |
| Hamburger `☰` button | Hidden | Visible |
| Icon labels (Wishlist/Cart/Account) | Visible | Hidden |
| Recently Viewed | Dropdown in nav | Inside mobile drawer |

---

## Key React Pattern

```jsx
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Hamburger button
<button onClick={() => setIsMenuOpen(true)}>☰</button>

// Mobile nav drawer
<nav className={isMenuOpen ? 'nav-open' : 'nav-closed'}>
  {/* nav links */}
</nav>

// Close on backdrop click
<div className="backdrop" onClick={() => setIsMenuOpen(false)} />
```

### CSS Animation for Slide-in Drawer:
```css
/* Closed state */
.nav-closed {
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

/* Open state */
.nav-open {
  transform: translateX(0);
}
```

---

## Recommended Implementation Order

1. Get desktop layout working first (no responsiveness yet)
2. Add `isMenuOpen` state to `Header.jsx`
3. Wire up the hamburger button and close button
4. Add the slide-in drawer CSS
5. Hide/show elements using `@media` breakpoints
6. Test on Chrome DevTools mobile emulator

> 💡 **Tip:** Use `768px` as your main mobile breakpoint (common tablet/mobile boundary).

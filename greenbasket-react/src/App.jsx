import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Contexts
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

// Import Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import MyAccount from './pages/MyAccount';
import Orders from './pages/Orders';
import TrackOrder from './pages/TrackOrder';
import Payment from './pages/Payment';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';

// TODO: Create these layout components — Navbar and Footer
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          {/* TODO: Uncomment once you build your Navbar and Footer components */}
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/about" element={<About />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>

          {/* <Footer /> */}
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;

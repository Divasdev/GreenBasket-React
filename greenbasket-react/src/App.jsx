import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Contexts
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

// Import Layout Components
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

// Import Pages
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Wishlist from './pages/Wishlist/Wishlist';
import MyAccount from './pages/MyAccount/MyAccount';
import Orders from './pages/Orders/Orders';
import TrackOrder from './pages/TrackOrder/TrackOrder';
import Payment from './pages/Payment/Payment';
import About from './pages/About/About';
import ComingSoon from './pages/ComingSoon/ComingSoon';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Header />

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

          <Footer />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;

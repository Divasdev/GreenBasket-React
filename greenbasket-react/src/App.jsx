import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

// Layout
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Newsletter from './components/layout/Newsletter/Newsletter';

// Pages
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import Wishlist from './pages/Wishlist/Wishlist';
import MyAccount from './pages/MyAccount/MyAccount';
import TrackOrder from './pages/TrackOrder/TrackOrder';
import ComingSoon from './pages/ComingSoon/ComingSoon';

function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            {/* Catch-all → Coming Soon */}
            <Route path="*" element={<ComingSoon />} />
          </Routes>
          <Newsletter />
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;

import './App.css';
import './assets/styles/main_styles.css';
import './assets/styles/responsive.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Newsletter from './pages/components/Newsletter';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/checkout';
import ProfilePage from './pages/ProfilePage';
import Wishlist from './pages/Wishlist';
import Shop from './pages/Shop';
import About from './pages/About';
import NotFoundPage from './pages/404';
import Catalog from './pages/Catalog';
import PasswordForgotten from './pages/PasswordForgotten';
import FloatingChat from './pages/components/FloatingChat';
import { useState } from 'react';
import PrivateRoute from './components/common/routing/PrivateRoute';
import AdminLogin from './pages/adminPages/AdminLogin';
import Compare from './pages/Compare';
import AdminPage from './pages/adminPages/AdminPage';

// import BackgroundImg from './pages/components/backgroundImg';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  // const [isAuthenticatedAdmin, setIsAuthenticatedAdmin] = useState(false);
  const contactInfo = {
    contactEmail: 'exemple@gmail.com',
    contactPhone: '+212 60 63 23 228',
    address: (
      <>
        <span>SOUK A LHED</span>
        <span>NR 1042 PORT 6, AGADIR</span>
      </>
    )
  };


  return (
    <Router>
      <div className="App">
        <Navbar contactInfo={contactInfo} />
        <div className="webpageContainer">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/singleProduct" element={<SingleProduct />} />
            <Route path="/contact" element={<Contact contactInfo={contactInfo} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/resetPassword" element={<PasswordForgotten />} />
            <Route path='/compare' element={<Compare />} />
            <Route path='/adminLogin' element={<AdminLogin />} />
            <Route path='/adminPage' element={<AdminPage />} />

            {/* Protected Routes */}
            <Route path="/checkout" element={<PrivateRoute isAuthenticated={isAuthenticated} element={Checkout} />} />
            <Route path="/profile" element={<PrivateRoute isAuthenticated={isAuthenticated} element={ProfilePage} />} />
            <Route path="/wishlist" element={<PrivateRoute isAuthenticated={isAuthenticated} element={Wishlist} />} />

            {/* Admin Pages */}
          </Routes>
        </div>
        {/* <FloatingChat /> */}
        <Newsletter />
        <Footer contactInfo={contactInfo} />
      </div>
    </Router>
  );
}
export default App;

import './App.css';
import './assets/styles/main_styles.css';
import './assets/styles/responsive.css';
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

function App() {
  const contactInfo = {
    contactEmail: 'exemple@gmail.com',
    contactPhone: '+212 776 41 25 46',
    address: <><span>17 Princess Road, London</span> <span>Grester London NW18JR, UK</span></>
  };

  return (
    <Router>
      <div className="App">
        <Navbar contactInfo={contactInfo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact contactInfo={contactInfo} />} />
          <Route path="/single-product" element={<SingleProduct />} />
        </Routes>
        <Newsletter />
        <Footer contactInfo={contactInfo} />
      </div>
    </Router>
  );
}

export default App;

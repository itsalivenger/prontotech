// import '../assets/styles/cart_styles.css';
// import '../assets/styles/cart_responsive.css';
import { useEffect, useState } from 'react';
import api from '../services/api';
import TrendsCarousel from './components/TrendsCarousel';
import Reviews from './components/ReviewsCarousel';
import CartProdsContainer from './components/CartelProdsContainer';
import SectionTitle from './components/SectionTitle';
import Breadcrumb from './components/BreadCrumb';
import CartTotals from './components/CartTotals';


const initialProducts = [
  {
    name: 'Asus Zenbook Duo (2024) UX8406MA-PZ277W',
    price: 22800,
    warranty: '1 Années',
    image: './images/products/laptop.png',
    quantity: 1,
  },
  {
    name: 'Apple MacBook Pro 16” (2023)',
    price: 34000,
    warranty: '2 Années',
    image: './images/products/laptop1.jpg',
    quantity: 1,
  },
];

function Cart() {
  const [orderTotal, setOrderTotal] = useState(0);
  const [ProductsInCart, setProductsInCart] = useState([{ id: '1', name: 'Laptop X', price: 10, qty: 5, imageSrc: 'images/shopping_cart.jpg' },
  { id: '2', name: 'Phone', price: 10, qty: 5, imageSrc: 'images/shopping_cart.jpg' },
  { id: '3', name: 'Tablette', price: 10, qty: 5, imageSrc: 'images/shopping_cart.jpg' }]);

  useEffect(() => {
    evaluateTotal();
    api('cart', 'POST', { type: 'updateCart', products: ProductsInCart }).then((res) => {
      // console.log(res);
    });
  }, [ProductsInCart]);

  function clearCart() {
    setProductsInCart([]);
  }

  function evaluateTotal() {
    setOrderTotal(ProductsInCart.reduce((total, product) => total + product.price * product.qty, 0))
  }

  return (
    <div className="site-section">
      <div className="container">
        <Breadcrumb items={["Home", <><i className='fa fa-shopping-cart'></i> &nbsp;Cart</>]} />
        <SectionTitle title={"My Cart"} />
        <div className={''}>
          <CartProdsContainer initialProducts={initialProducts} />
          <CartTotals handleClear={clearCart} />
        </div>
        <TrendsCarousel />

        <Reviews />
      </div>
    </div>
  );
}


export default Cart;
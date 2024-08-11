import '../assets/styles/cart_styles.css';
import '../assets/styles/cart_responsive.css';
import { useEffect, useState } from 'react';
import api from '../services/api';
import Trends from './components/Trends';
import Reviews from './components/Reviews';
import { Link } from 'react-router-dom';
import CartProdsContainer from './components/CartelProdsContainer';
import SectionTitle from './components/SectionTitle';
import Breadcrumb from './components/BreadCrumb';


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
  const [ProductsInCart, setProductsInCart] = useState([{id: '1', name: 'Laptop X', price: 10, qty: 5, imageSrc: 'images/shopping_cart.jpg'}, 
  {id: '2', name: 'Phone', price: 10, qty: 5, imageSrc: 'images/shopping_cart.jpg'},
  {id: '3', name: 'Tablette', price: 10, qty: 5, imageSrc: 'images/shopping_cart.jpg'}]);

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
        <CartProdsContainer initialProducts={initialProducts} />

        <div className="row mb-5">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button onClick={clearCart} className="btn btn-sm btn-block">Clear Cart</button>
              </div>
              <div className="col-md-6">
                <button onClick={()=> {}}
                  className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="text-black h4" htmlFor="coupon">Coupon</label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
              </div>
              <div className="col-md-4">
                <button className="btn btn-primary btn-sm px-4">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Subtotal</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black subTotal">{orderTotal} DH</strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black total">{orderTotal} DH</strong>
                  </div>
                </div>

                <div className="row">
                  <div>
                    <Link className="btn btn-primary btn-lg btn-block" to="/checkout">Proceed To Checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Trends />

        <Reviews />
      </div>
    </div>
  );
}


export default Cart;
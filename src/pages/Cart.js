import '../assets/styles/cart_styles.css';
import '../assets/styles/cart_responsive.css';
import ProductInCart from './components/productIncart';
import { useEffect, useState } from 'react';
import api from '../services/api';
import Trends from './components/Trends';
import Reviews from './components/Reviews';
import BestSellers from './components/BestSellers';

function Cart() {
  const [orderTotal, setOrderTotal] = useState(0);
  const [ProductsInCart, setProductsInCart] = useState([{id: '1', name: 'Laptop X', price: 10, qty: 5, imageSrc: 'images/shopping_cart.jpg'}, {id: '2', name: 'Phone', price: 10, qty: 5, imageSrc: 'images/shopping_cart.jpg'}, {id: '3', name: 'Tablette', price: 10, qty: 5, imageSrc: 'images/shopping_cart.jpg'}]);

  useEffect(() => {
    evaluateTotal();
     api('cart', 'POST', { type: 'updateCart', products: ProductsInCart }).then((res) => {
       // console.log(res);
     });
  }, [ProductsInCart]);

  function updateProdQty(_id, action) {
    setProductsInCart(ProductsInCart.map((product) => {
      if (product.id === _id && product.qty + action > 0) {
        return {...product, qty: product.qty + action}
      }
      return product
    }))
  }

  function removeProduct(_id) {
    setProductsInCart(ProductsInCart.filter((product) => product.id !== _id))
  }

  function clearCart() {
    setProductsInCart([]);
  }

  function evaluateTotal() {
    setOrderTotal(ProductsInCart.reduce((total, product) => total + product.price * product.qty, 0))
  }

  return (
    <div className="site-section">
      <div className="container">
        <div className="cart_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="cart_container">
                  <div className="cart_title">Shopping Cart</div>
                  <div className="cart_items">
                    <ul className="cart_list">


                      {ProductsInCart.map((product, i) => {
                        return <ProductInCart removeProduct={removeProduct} handleUpdateQty={updateProdQty} key={i} product={product} />
                      })}


                    </ul>
                  </div>
                  <div className="cart_buttons">
                    <button onClick={clearCart} type="button" className="button cart_button_clear">Clear Cart</button>
                    <button type="button" className="button cart_button_checkout">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
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
                    <a className="btn btn-primary btn-lg btn-block" href="checkout.html">Proceed To Checkout</a>
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
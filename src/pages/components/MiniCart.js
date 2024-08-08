import React from 'react';
import styles from '../../assets/styles/miniCart.module.css';
import { Link } from 'react-router-dom';

const MiniCart = ({ cartItems, isOpen, toggleCart }) => {


  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      {/* <span className={styles.cartIcon + ' fa fa-shopping-cart'} onClick={toggleCart}></span> */}
      <div className={`${styles.miniCart} ${isOpen ? styles.open : ''}`}>
        <div className={styles.cartHeader}>
          <h3>My Cart</h3>
          <button onClick={toggleCart} className={styles.closeButton + ' fa fa-close'}></button>
        </div>
        <div className={styles.cartItems}>
          {cartItems.map((item, index) => (
            <Link to={'/single-product:' + item._id} key={index} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.cartItemImage} />
              <div className={styles.cartItemDetails}>
                <p className={styles.itemName}>{item.name}</p>
                <p>{item.quantity} x {item.price} DH </p>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.cartFooter}>
          <p>Total: {getTotal()} DH</p>
          <button className={styles.cartButtons + ' ' + styles.cartButton}>Go to Cart</button>
          <button className={styles.cartButtons + ' ' + styles.wishlistButton}>Go to Wishlist</button>
        </div>
      </div>
    </>
  );
};

export default MiniCart;

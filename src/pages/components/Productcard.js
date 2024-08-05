import React from 'react';
import styles from  '../../assets/styles/Productcard.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} />
        <div className={styles.overlay}>
          <button className={styles.addToCartBtn}>AJOUTER AU PANIER</button>
          <span className={styles.addToWishlist + ' fa fa-heart '}> </span>

        </div>
      </div>
      <div className={styles.productInfo}>
        <Link className='' to={`/${product._id}`}>{product.name}</Link>
        <p>{product.condition}</p>
        <p>{product.price}Dh <span>{product.originalPrice}Dh</span> <strong>{product.discount}%</strong></p>
      </div>
    </div>
  );
};

export default ProductCard;

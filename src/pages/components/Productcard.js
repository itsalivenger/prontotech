import React from 'react';
import styles from '../../assets/styles/Productcard.module.css';
import { Link } from 'react-router-dom';
import ProntoTechBtn from './ProntoTechButton';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} />
        <div className={styles.overlay}>
          <ProntoTechBtn text={"Ajouter Au Panier"} onClick={()=>{}} className={styles.addToCart} icon={"fa fa-plus"} />

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

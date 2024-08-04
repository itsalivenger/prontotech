import React from 'react';
import styles from '../../assets/styles/ProductDetails.module.css';

const ProductDetails = () => {
  return (
    <div className={styles.productDetails}>
      <div className={styles.detailRow}>
        <div className={styles.detailLabel}>Poids</div>
        <div className={styles.detailValue}>9.8 kg</div>
      </div>
      <div className={styles.detailRow}>
        <div className={styles.detailLabel}>Dimensions</div>
        <div className={styles.detailValue}>31.54 × 17 × 37.6 cm</div>
      </div>
      <div className={styles.detailRow}>
        <div className={styles.detailLabel}>Modèle</div>
        <div className={styles.detailValue}>30GKS14A00</div>
      </div>
      <div className={styles.detailRow}>
        <div className={styles.detailLabel}>Marque</div>
        <div className={styles.detailValue}>Lenovo</div>
      </div>
      <div className={styles.detailRow}>
        <div className={styles.detailLabel}>État</div>
        <div className={styles.detailValue}>Neuf</div>
      </div>
      <div className={styles.detailRow}>
        <div className={styles.detailLabel}>Modèle du Processeur</div>
        <div className={styles.detailValue}>AMD Ryzen 7</div>
      </div>
      <div className={styles.detailRow}>
        <div className={styles.detailLabel}>Type de processeur</div>
        <div className={styles.detailValue}>Ryzen™ 7 PRO 5845</div>
      </div>
      <div className={styles.detailRow}>
        <div className={styles.detailLabel}>Vitesse de Processeur</div>
        <div className={styles.detailValue}>8 Cores , 16 Threads, up to 4.6Ghz , 32MB L3 Cache</div>
      </div>
      <div className={styles.detailRow}>
        <div className={styles.detailLabel}>Taille de la Mémoire</div>
        <div className={styles.detailValue}>16 Go</div>
      </div>
      <div className={styles.detailRow}>
        <div className={styles.detailLabel}>Type de Mémoire</div>
        <div className={styles.detailValue}>DDR4</div>
      </div>
    </div>
  );
};

export default ProductDetails;

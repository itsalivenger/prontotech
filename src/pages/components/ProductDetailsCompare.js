import React from 'react';
import styles from '../../assets/styles/productDetailsCompare.module.css';



const ProductDetails = ({ products }) => {
  const features = [
    { name: 'Price', key: 'price' },
    { name: 'CPU', key: 'cpu' },
    { name: 'RAM', key: 'ram' },
    { name: 'Storage', key: 'storage' },
    { name: 'Display', key: 'display' }
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureRow}>
          <div className={styles.featureName}>{feature.name}</div>
          {products.map((product, idx) => (
            <div key={idx} className={styles.featureValue}>
              {product[feature.key]}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ProductDetails;

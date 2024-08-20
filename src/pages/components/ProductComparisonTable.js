import React from 'react';
import styles from '../../assets/styles/productComparisonTable.module.css';
import ProductDetails from './ProductDetailsCompare';


const ProductComparisonTable = ({ products }) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.headerRow}>
        <div className={styles.featureName}>Feature</div>
        {products.map((product, index) => (
          <div key={index} className={styles.productHeader}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productName}>{product.name}</div>
          </div>
        ))}
      </div>
      <ProductDetails products={products} />
    </div>
  );
};

export default ProductComparisonTable;


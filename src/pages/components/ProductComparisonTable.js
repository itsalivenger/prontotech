import styles from '../../assets/styles/productComparisonTable.module.css';
// import ProductDetails from './ProductDetailsCompare';


const ProductComparison = ({ products, features }) => {
  const handleDeleteItem = (_id)=>{
    console.log('deleted', _id)
  }
  return (
    <div className='container'>
      <ProductCount productCount={products.length} />
      <div className={styles.comparisonContainer}>
        {/* Table Headers */}
        <div className={styles.headerRow}>
          <div className={styles.featureCell}></div>
          {products.map((product, index) => (
            <div key={index} className={styles.productCell}>
              <div className={styles.removeItemIcon} onClick={()=> handleDeleteItem(product._id)}>
                <i className='fa fa-times'></i>
              </div>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h3 className={styles.productName}>{product.name}</h3>
            </div>
          ))}
        </div>

        {/* Feature Rows */}
        {features.map((feature, index) => (
          <div key={index} className={styles.featureRow}>
            <div className={styles.featureCell}>{feature.label}</div>
            {products.map((product, index) => (
              <div key={index} className={styles.productCell}>
                {product[feature.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};


const ProductCount = ({ productCount, onClearAll, onRemoveLast }) => {
  return (
    <div className={styles.productCountContainer}>
      <div className={styles.countInfo}>
        <span className={styles.countNumber}>{productCount}</span>
        <span className={styles.countText}>
          {productCount === 1 ? 'product' : 'products'} in comparison
        </span>
      </div>
      
      <div className={styles.actions}>
        <button 
          className={styles.actionButton} 
          onClick={onClearAll} 
          disabled={productCount === 0}
          title="Clear all products from comparison"
        >
          Clear All
        </button>
        
        <button 
          className={styles.actionButton} 
          onClick={onRemoveLast} 
          disabled={productCount === 0}
          title="Remove the last product added to comparison"
        >
          Remove Last
        </button>
        
        {productCount < 5 && (
          <button className={styles.addMoreButton} title="Add more products to compare">
            Add More Products
          </button>
        )}
      </div>
    </div>
  );
};


export default ProductComparison;

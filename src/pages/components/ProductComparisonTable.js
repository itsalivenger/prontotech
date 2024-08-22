import styles from '../../assets/styles/productComparisonTable.module.css';
import ProductDetails from './ProductDetailsCompare';

const ProductComparisonTable = ({ product1, product2 }) => {
  if (!product1 || !product2) return null;

  // Extract attributes from the product objects
  const getAttributes = (product) => {
    return Object.keys(product).filter(key => key !== 'id' && key !== 'name' && key !== 'image');
  };

  const attributes1 = getAttributes(product1);
  const attributes2 = getAttributes(product2);

  // Create a unified list of attributes to compare
  const allAttributes = new Set([...attributes1, ...attributes2]);

  const renderAttributeRow = (attribute) => (
    <tr key={attribute}>
      <td className={styles.attributeName}>{attribute}</td>
      <td className={styles.attributeValue}>{product1[attribute] || 'N/A'}</td>
      <td className={styles.attributeValue}>{product2[attribute] || 'N/A'}</td>
    </tr>
  );

  return (
    <div className={styles.comparisonContainer}>
      <h2 className={styles.header}>Product Comparison</h2>
      <div className={styles.comparisonContent}>
        <div className={styles.product}>
          <img src={product1.image} alt={product1.name} className={styles.productImage} />
          <h3 className={styles.productName}>{product1.name}</h3>
        </div>
        <div className={styles.product}>
          <img src={product2.image} alt={product2.name} className={styles.productImage} />
          <h3 className={styles.productName}>{product2.name}</h3>
        </div>
      </div>
      <table className={styles.attributesTable}>
        <thead>
          <tr>
            <th className={styles.attributeHeader}>Attribute</th>
            <th className={styles.attributeHeader}>{product1.name}</th>
            <th className={styles.attributeHeader}>{product2.name}</th>
          </tr>
        </thead>
        <tbody>
          {[...allAttributes].map(renderAttributeRow)}
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparisonTable;

import React from 'react';
import styles from '../../assets/styles/orderHistory.module.css';

const products = [
    { name: 'Laptop', quantity: 2, date: '2024-08-01' },
    { name: 'Phone', quantity: 5, date: '2024-07-28' },
    { name: 'Headphones', quantity: 3, date: '2024-07-25' },
  ];
  
  const ProductTable = () => {
    return (
      <div className={styles.productTableContainer}>
        <h2>Product List</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.productTable}>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default ProductTable;
  
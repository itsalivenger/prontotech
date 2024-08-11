import React, { useState } from 'react';
import styles from '../../assets/styles/orderHistory.module.css';

const products = [
  { name: 'Laptop', quantity: 2, date: '2024-08-01' },
  { name: 'Phone', quantity: 5, date: '2024-07-28' },
  { name: 'Headphones', quantity: 3, date: '2024-07-25' },
];

const ProductTable = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = () => {
    const filtered = products.filter(product => {
      const productDate = new Date(product.date);
      const start = startDate ? new Date(startDate) : new Date('1900-01-01');
      const end = endDate ? new Date(endDate) : new Date();
      return productDate >= start && productDate <= end;
    });
    setFilteredProducts(filtered);
  };

  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    setFilteredProducts(products);
  };

  const handleDownload = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      filteredProducts.map(product => `${product.name},${product.quantity},${product.date}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "filtered_products.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className={styles.productTableContainer}>
      <h2>Product List</h2>
      <div className={styles.filterControls}>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDownload}>Download CSV</button>
      </div>
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
            {filteredProducts.map((product, index) => (
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

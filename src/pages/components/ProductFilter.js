import React, { useState } from 'react';
import styles from '../../assets/styles/productFilter.module.css';

const ProductFilter = ({ totalProducts, productsDisplayed, sortOptions, onSortChange }) => {
    const [view, setView] = useState('grid'); // default to grid view

    const handleViewChange = (newView) => {
        setView(newView);
        // Handle the view change, e.g., apply a different class or re-render the products.
    };

    return (
        <div className={styles.productFilterContainer}>
            <div className={styles.productCount}>
                <span>(Afficher {productsDisplayed.start} – {productsDisplayed.end} produits sur {totalProducts} produits)</span>
            </div>

            <div className={styles.viewToggle}>
                <button
                    className={`${styles.viewButton} ${view === 'grid' ? styles.active : ''}`}
                    onClick={() => handleViewChange('grid')}
                >
                    <i className="fas fa-th"></i>
                </button>
                <button
                    className={`${styles.viewButton} ${view === 'list' ? styles.active : ''}`}
                    onClick={() => handleViewChange('list')}
                >
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            <div className={styles.sortDropdown}>
                <select onChange={(e) => onSortChange(e.target.value)}>
                    {sortOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ProductFilter;

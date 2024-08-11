import React, { useState } from 'react';
import styles from '../../assets/styles/shopCategories.module.css';

const ShopCategories = ({ categories, subCategories, priceRange: { min, max } }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [openCategories, setOpenCategories] = useState(
        categories.map((category) => category.isOpen || false)
    );
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);

    const handlePriceChange = () => {
        console.log("Min Price:", minPrice || "0"); 
        console.log("Max Price:", maxPrice || "99999"); 
    };

    const toggleCategory = (index) => {
        const newOpenCategories = [...openCategories];
        newOpenCategories[index] = !newOpenCategories[index];
        setOpenCategories(newOpenCategories);
    };

    const toggleSidenav = () => {
        setIsSidenavOpen(!isSidenavOpen);
    };

    return (
        <>
            <button className={styles.sidenavToggleButton} onClick={toggleSidenav}>
                Filter
            </button>
            <div className={`${styles.categoriesContainer} ${isSidenavOpen ? styles.sidenavOpen : ''}`}>
                <h3>Filtrer les produits par:</h3>
                <div className={styles.filterSection}>
                    <div className={styles.sectionTitle}>
                        <span>Prix</span>
                    </div>
                    <div className={styles.priceInputs}>
                        <input
                            type="number"
                            min={min}
                            max={max}
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            placeholder="Min"
                            className={styles.priceInput}
                        />
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            placeholder="Max"
                            className={styles.priceInput}
                        />
                    </div>
                    <button className={styles.filterButton} onClick={handlePriceChange}>
                        Filtrer
                    </button>
                    <div className={styles.priceRangeDisplay}>
                        Prix : {minPrice || min} Dh – {maxPrice || max} Dh
                    </div>
                </div>

                {categories.map((category, index) => (
                    <div key={index} className={styles.categorySection}>
                        <div className={styles.sectionTitle} onClick={() => toggleCategory(index)}>
                            <span>{category.title}</span>
                            <span>({category.count})</span>
                            <span className={styles.arrow}>
                                {openCategories[index] ? '▲' : '▼'}
                            </span>
                        </div>
                        <ul className={`${styles.categoryList} ${openCategories[index] ? styles.active : ''}`}>
                            {category.items.map((item, i) => (
                                <li key={i} className={styles.categoryItem}>
                                    {item.name} ({item.count})
                                </li>
                            ))}
                        </ul>
                        {subCategories && subCategories[index] && (
                            <div className={styles.categoryList}>
                                <div className={styles.subCategoryTitle} onClick={()=> toggleCategory(index)}>
                                    <span>{subCategories[index].title}</span>
                                    <span className={styles.arrow}>
                                        {openCategories[index] ? '▲' : '▼'}
                                    </span>
                                </div>
                                <ul className={`${styles.subCategoryList} ${openCategories[index] ? styles.active : ''}`}>
                                    {subCategories[index].items.map((subItem, j) => (
                                        <li key={j} className={styles.subCategoryItem}>
                                            {subItem.name} ({subItem.count})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ShopCategories;

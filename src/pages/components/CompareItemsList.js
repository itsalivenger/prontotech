import { useState } from 'react';
import styles from '../../assets/styles/compareItemsList.module.css';
import Slider from 'react-slick';

// Placeholder for products
const products = [
  {
    name: 'Laptop A',
    image: './images/products/laptop.png',
    price: '1000 DH',
    cpu: 'Intel i7',
    ram: '16GB',
    storage: '512GB SSD',
    display: '15.6" 1080p'
  },
  {
    name: 'Laptop B',
    image: './images/products/desktop.png',
    price: '1200 DH',
    cpu: 'Intel i9',
    ram: '32GB',
    storage: '1TB SSD',
    display: '17" 4K'
  },{
    name: 'Laptop A',
    image: './images/products/laptop.png',
    price: '1000 DH',
    cpu: 'Intel i7',
    ram: '16GB',
    storage: '512GB SSD',
    display: '15.6" 1080p'
  },{
    name: 'Laptop A',
    image: './images/products/laptop.png',
    price: '1000 DH',
    cpu: 'Intel i7',
    ram: '16GB',
    storage: '512GB SSD',
    display: '15.6" 1080p'
  },
  {
    name: 'Laptop B',
    image: './images/products/desktop.png',
    price: '1200 DH',
    cpu: 'Intel i9',
    ram: '32GB',
    storage: '1TB SSD',
    display: '17" 4K'
  },{
    name: 'Laptop A',
    image: './images/products/laptop.png',
    price: '1000 DH',
    cpu: 'Intel i7',
    ram: '16GB',
    storage: '512GB SSD',
    display: '15.6" 1080p'
  },
];

const CompareItemsList = ({ handleSelectItem, selectedItems, handleCompare }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Implement search functionality here
    console.log('Search query:', searchQuery);
  };

  const filteredProds = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search items..."
          className={styles.searchInput}
        />
        <button
          onClick={handleSearchSubmit}
          className={styles.searchButton}
        >
          Search
        </button>
      </div>
      <Slider {...settings} className={styles.carousel}>
        {filteredProds.map((product) => (
          <div
            key={product.id}
            className={`${styles.item} ${selectedItems.includes(product) ? styles.selected : ''}`}
            onClick={() => handleSelectItem(product)}
          >
            <img src={product.image} alt={product.name} className={styles.image} />
            <div className={styles.details}>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.category}>{product.category}</p>
            </div>
            <button
              className={styles.selectButton}
              onClick={(e) => {
                e.stopPropagation();
                handleSelectItem(product);
              }}
            >
              {selectedItems.includes(product) ? 'Deselect' : 'Select'}
            </button>
          </div>
        ))}

      </Slider>
      <div className={styles.selectedItems}>
        <h3>Selected Items:</h3>
        <SelectedItems handleCompare={handleCompare} selectedItems={selectedItems} onRemoveItem={handleSelectItem} />
      </div>
    </div>
  );
};


const SelectedItems = ({ selectedItems, onRemoveItem, handleCompare }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Selected Items</h3>
      {selectedItems.length === 0 ? (
        <p className={styles.noItems}>No items selected. Please select items to compare.</p>
      ) : (
        <ul className={styles.itemList}>
          {selectedItems.map((item) => (
            <li key={item.id} className={styles.item}>
              <span className={styles.itemName}>{item.name}</span>
              <button
                className={styles.removeButton}
                onClick={() => onRemoveItem(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        className={`${styles.compareButton} ${selectedItems.length < 2 ? styles.disabled : ''}`}
        onClick={()=> handleCompare(selectedItems)}
        disabled={selectedItems.length < 2}
      >
        Compare Now
      </button>
    </div>
  );
};

export default CompareItemsList;

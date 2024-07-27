import { useState } from 'react';
import styles from '../../assets/styles/deals_featured.module.css';

const products = {
  featured: [
    { id: 1, name: 'Huawei MediaPad', price: 225, originalPrice: 300, discount: '-25%', imgSrc: 'images/featured_3.png' },
    { id: 2, name: 'Sony MDRZX310W', price: 379, imgSrc: 'images/featured_3.png' },
    { id: 3, name: 'Canon STM Kit', price: 225, imgSrc: 'images/featured_3.png' },
    { id: 4, name: 'Lenovo IdeaPad', price: 379, imgSrc: 'images/featured_3.png' },
    { id: 5, name: 'Apple iPod shuffle', price: 379, imgSrc: 'images/featured_3.png' },
    { id: 6, name: 'LUNA Smartphone', price: 225, originalPrice: 300, discount: '-25%', imgSrc: 'images/featured_3.png' },
    { id: 7, name: 'Samsung J330F', price: 379, imgSrc: 'images/featured_3.png' },
    { id: 8, name: 'Digitus EDNET', price: 225, imgSrc: 'images/featured_3.png' },
  ],
  onsale: [
    { id: 1, name: 'Huawei MediaPad', price: 225, originalPrice: 300, discount: '-25%', imgSrc: "images/featured_3.png" },
      { id: 2, name: 'Sony MDRZX310W', price: 379, imgSrc: "images/featured_3.png" },
      { id: 3, name: 'Canon STM Kit', price: 225, imgSrc: "images/featured_3.png" },
      { id: 4, name: 'Lenovo IdeaPad', price: 379, imgSrc: "images/featured_3.png" },
      { id: 5, name: 'Apple iPod shuffle', price: 379, imgSrc: "images/featured_3.png" },
      { id: 6, name: 'LUNA Smartphone', price: 225, originalPrice: 300, discount: '-25%', imgSrc: "images/featured_3.png" },
      { id: 7, name: 'Samsung J330F', price: 379, imgSrc: "images/featured_3.png" },
      { id: 8, name: 'Digitus EDNET', price: 225, imgSrc: "images/featured_3.png" },
    
    ],
  bestrated: [
    { id: 1, name: 'Huawei MediaPad', price: 225, originalPrice: 300, discount: '-25%', imgSrc: "images/featured_3.png" },
      { id: 2, name: 'Sony MDRZX310W', price: 379, imgSrc: "images/featured_3.png" },
      { id: 3, name: 'Canon STM Kit', price: 225, imgSrc: "images/featured_3.png" },
      { id: 4, name: 'Lenovo IdeaPad', price: 379, imgSrc: "images/featured_3.png" },
      { id: 5, name: 'Apple iPod shuffle', price: 379, imgSrc: "images/featured_3.png" },
      { id: 6, name: 'LUNA Smartphone', price: 225, originalPrice: 300, discount: '-25%', imgSrc: "images/featured_3.png" },
      { id: 7, name: 'Samsung J330F', price: 379, imgSrc: "images/featured_3.png" },
      { id: 8, name: 'Digitus EDNET', price: 225, imgSrc: "images/featured_3.png" },
    
    ]
};

const ProductSlider = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const renderProducts = (products) => {
    return products.map((product) => (
      <div key={product.id} className={styles.product}>
        <img src={product.imgSrc} alt={product.name} />
        {product.discount && <div className={styles.discount}>{product.discount}</div>}
        <div className={styles.price}>{product.price} DH</div>
        {product.originalPrice && <div className={styles.originalPrice}>{product.originalPrice} DH</div>}
        <div className={styles.name}>{product.name}</div>
      </div>
    ));
  };

  return (
    <div className={styles.productSlider}>
      <div className={styles.leftSide}>
        <div className={styles.dealOfTheWeek}>
          <img src="images/featured_3.png" alt="Deal of the Week" />
          <div className={styles.dealDetails}>
            <h2>Beoplay H7</h2>
            <p>Headphones</p>
            <p>Available: 6</p>
            <p>Already sold: 28</p>
            <div className={styles.timer}>
              <span>47</span>:
              <span>59</span>:
              <span>10</span>
            </div>
            <p>Hurry Up</p>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.tabs}>
          {['Featured', 'On Sale', 'Best Rated'].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab.toLowerCase().replace(' ', '') ? styles.active : ''}
              onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.slider}>
          <div className={styles.products}>{console.log(products[activeTab], activeTab)}{renderProducts(products[activeTab])}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;

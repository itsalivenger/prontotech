import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/Carousel.module.css';
import products from '../../assets/styles/temp';
import ProductCard from './Productcard'

const second = 1000;
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  const updateItemsPerSlide = () => {
    if (window.innerWidth >= 1200) {
      setItemsPerSlide(4);
    } else if (window.innerWidth >= 992) {
      setItemsPerSlide(3);
    } else if (window.innerWidth >= 768) {
      setItemsPerSlide(2);
    } else {
      setItemsPerSlide(1);
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    const intervalId = setInterval(handleNextClick, second * 10000);

    // Cleanup interval on component unmount;
    return () => {
      window.removeEventListener('resize', updateItemsPerSlide)
      clearInterval(intervalId)
    };
  }, []);

  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalSlides - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalSlides - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={`${styles.carouselBtn} ${styles.left}`} onClick={handlePrevClick}>&lt;</button>
      <div className={styles.carousel}>
        <div className={styles.carouselTrack} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {products.map((product, index) => (
            <div key={index} className={styles.carouselItem} style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}>
              {
                <ProductCard product={product} key={index} />
            }
            </div>
          ))}
        </div>
      </div>
      <button className={`${styles.carouselBtn} ${styles.right}`} onClick={handleNextClick}>&gt;</button>
      
    </div>
  );
};

export default Carousel;

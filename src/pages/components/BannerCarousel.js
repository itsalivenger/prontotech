import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/bannerCarousel.module.css';


const BannerCarousel = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className={styles.carouselContainer}>
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`${styles.carouselSlide} ${index === currentIndex ? styles.active : ''}`}
        >
          <img src={banner.image} alt={banner.title} className={styles.carouselImage} />
          <div className={styles.textContainer}>
            <h2 className={styles.carouselTitle}>{banner.title}</h2>
            <p className={styles.carouselSubtitle}>{banner.subtitle}</p>
            {banner.buttonText && <button className={styles.carouselButton}>{banner.buttonText}</button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerCarousel;

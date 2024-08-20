import React from 'react';
import Slider from 'react-slick';
import styles from '../../assets/styles/bannerCarousel.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const BannerCarousel = ({ banners }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 5 seconds
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className={styles.carouselSlide}>
            <img src={banner.image} alt={banner.title} className={styles.carouselImage} />
            <div className={styles.textContainer}>
              <h2 className={styles.carouselTitle}>{banner.title}</h2>
              <p className={styles.carouselSubtitle}>{banner.subtitle}</p>
              {banner.buttonText && <button className={styles.carouselButton}>{banner.buttonText}</button>}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;

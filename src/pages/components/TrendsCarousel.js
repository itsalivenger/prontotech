// ProductCarousel.jsx
import React from "react";
import Slider from "react-slick";
import styles from "../../assets/styles/trendsCarousel.module.css";
import SectionTitle from "./SectionTitle";

const TrendsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <></>,
    nextArrow: <></>
  };

  const products = [
    {
      name: "Jump White",
      price: "379 DH",
      image: "./images/trends_1.jpg",
    },
    {
      name: "Samsung Charm",
      price: "379 DH",
      image: "./images/trends_2.jpg",
    },
    {
      name: "DJI Phantom 3",
      price: "379 DH",
      image: "./images/trends_3.jpg",
    },
    {
      name: "DJI Phantom 3",
      price: "379 DH",
      image: "./images/trends_3.jpg",
    },
  ];

  return (
    <div>
      <SectionTitle title={'Trends'} />
      <div className={styles.trendsContainer}>
        <div className={styles.carouselContainer}>
          <Slider {...settings} className={styles.carousel}>
            {products.map((product, index) => (
              <div key={index} className={styles.card}>
                <img src={product.image} alt={product.name} className={styles.image} />
                <div className={styles.info}>
                  <p className={styles.category}>Smartphones</p>
                  <h3 className={styles.name}>{product.name}</h3>
                  <p className={styles.price}>{product.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.titleContainer}>
          <h2>Trends 2024</h2>
          <p>AI-driven sustainability is set to redefine industries, blending innovation with environmental responsibility in 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default TrendsCarousel;

import Slider from "react-slick";
import styles from "../../assets/styles/recentlyViewedCarousel.module.css"; // Ensure you create this CSS file
import SectionTitle from "./SectionTitle";

const RecentlyViewedCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1200, // Adjusts the number of items at wider screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // Adjusts the number of items on tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Adjusts the number of items on small tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Adjusts the number of items on mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    {
      name: "Sony PS4 Slim",
      price: "225 DH",
      oldPrice: "300 DH",
      discount: "-25%",
      image: "./images/view_1.jpg",
    },
    {
      name: "Speedlink Gamepad",
      price: "375 DH",
      oldPrice: "",
      discount: "",
      image: "./images/view_2.jpg",
    },
    {
      name: "Beoplay H7",
      price: "225 DH",
      oldPrice: "300 DH",
      discount: "-25%",
      image: "./images/view_3.jpg",
    },
    {
      name: "LUNA Smartphone",
      price: "379 DH",
      oldPrice: "",
      discount: "",
      image: "./images/view_4.jpg",
    },
    {
      name: "Samsung J730F",
      price: "225 DH",
      oldPrice: "",
      discount: "",
      image: "./images/view_5.jpg",
    },
    {
      name: "Huawei MediaPad",
      price: "379 DH",
      oldPrice: "",
      discount: "new",
      image: "./images/view_6.jpg",
    },
  ];

  return (
    <div className={styles.recentlyViewedCarousel}>
      <SectionTitle title={'Recently Viewed'} />
      <div className={styles.carousel}>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className={styles.card}>
              {product.discount && (
                <div className={styles.discountBadge}>{product.discount}</div>
              )}
              <img src={product.image} alt={product.name} className={styles.image} />
              <div className={styles.details}>
                <h4 className={styles.price}>{product.price} <span className={styles.oldPrice}>{product.oldPrice}</span></h4>
                <p className={styles.name}>{product.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecentlyViewedCarousel;

import Slider from "react-slick";
import styles from "../../assets/styles/brandCarousel.module.css"; // Ensure you create this CSS file; // Ensure you create this CSS file
import SectionTitle from "./SectionTitle";

const BrandCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const brands = [
    "./images/logos/apple.svg",
    "./images/logos/sandisk.png",
    "./images/logos/samsung.svg",
    "./images/logos/lenovo.svg",
    "./images/logos/nvidia.svg",
    "./images/logos/razer.svg",
    "./images/logos/amd.svg",
    "./images/logos/dell.svg",
    "./images/logos/hp.svg",
    "./images/logos/asus.svg",
    "./images/logos/sony.svg",
    "./images/logos/canon.png",
    "./images/logos/tp-link.png",
    "./images/logos/d-link.png",
    "./images/logos/msi.png",
  ];

  return (
    <div className={styles.brandsContainer}>
      <SectionTitle title={'Brands'} />
      <div className={styles.carousel}>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={brand} alt={`Brand ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandCarousel;

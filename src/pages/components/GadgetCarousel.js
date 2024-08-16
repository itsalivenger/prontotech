import styles from "../../assets/styles/gadgetCarousel.module.css";
import Slider from 'react-slick';
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";

const gadgetCarousel = () => {
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
    prevArrow: <div>
      <div className={styles.prevArrow}>&#10095;</div>
    </div>,
    nextArrow: <div>
      <div className={styles.nextArrow}>&#10094;</div>
    </div>
  };

  const items = [
    { icon: './images/popular_1.png', label: 'Smartphones & Tablets' },
    { icon: './images/popular_2.png', label: 'Computers & Laptops' },
    { icon: './images/popular_3.png', label: 'Gadgets' },
    { icon: './images/popular_4.png', label: 'Video Games & Consoles' },
    { icon: './images/popular_5.png', label: 'Accessories' }
  ];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.titleContainer}>
        {/* <h2 className={styles.carouselTitle}>Popular Categories</h2> */}
        <SectionTitle title={"Popular Categories"} />
        <div className={styles.linkContainer}>
          <Link to={'/catalog'}>View Full Catalog</Link>
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {items.map((item, index) => (
            <IconCard title={item.label} icon={item.icon} lightBlueBg={(index % 2 ? false : true)} />
          ))}
        </Slider>
      </div>
    </div>
  );
};


const IconCard = ({ title, icon, lightBlueBg }) => {
  return (
    <div className={`${styles.card} ${lightBlueBg ? styles.lightBlue : styles.white}`}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt={title} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};


export default gadgetCarousel;

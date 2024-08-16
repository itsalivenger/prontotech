import Slider from "react-slick";
import styles from "../../assets/styles/reviewsCarousel.module.css"; // Make sure to create this CSS file
import SectionTitle from "./SectionTitle";

const ReviewsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      name: "Brandon Flowers",
      rating: 4,
      image: "./images/view_1.jpg",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.",
      date: "2 day ago",
    },
    {
      name: "Emilia Clarke",
      rating: 5,
      image: "./images/view_2.jpg",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.",
      date: "2 day ago",
    },
    {
      name: "Roberto Sanchez",
      rating: 4,
      image: "./images/view_3.jpg",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.",
      date: "2 day ago",
    },
  ];

  return (
    <div>
      <SectionTitle title={'Reviews'} />
      <div className={styles.carousel}>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.card}>
              <img src={review.image} alt={review.name} className={styles.image} />
              <div className={styles.details}>
                <h4 className={styles.name}>{review.name}</h4>
                <div className={styles.rating}>
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className={styles.date}>{review.date}</p>
                <p className={styles.review}>{review.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewsCarousel;

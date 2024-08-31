import Slider from 'react-slick';
import styles from '../../assets/styles/a9wadCarousel.module.css'; // Assuming you're using CSS Modules
import { useState } from 'react';

const A9wadCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        slidesToScroll: 1,
        prevArrow: <></>,
        nextArrow: <></>,
        customPaging: (i) => {
            return <div>
                <div className={styles.customDot + ` 
            ${i === currentSlide ? styles.active : ''}`}>

                </div>
            </div>
        }
    };

    const products = [
        {
            id: 1,
            category: "Laptops",
            title: "MacBook Air 13",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.",
            rating: 4,
            image: './images/banners/banner_2_product.webp', // Replace with the actual image path
        }, {
            id: 1,
            category: "Laptops",
            title: "MacBook Air 13",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.",
            rating: 4,
            image: './images/banners/banner_2_product.webp', // Replace with the actual image path
        }, {
            id: 1,
            category: "Laptops",
            title: "MacBook Air 13",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.",
            rating: 4,
            image: './images/banners/banner_2_product.webp', // Replace with the actual image path
        }, {
            id: 1,
            category: "Laptops",
            title: "MacBook Air 13",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.",
            rating: 4,
            image: './images/banners/banner_2_product.webp', // Replace with the actual image path
        },
        // You can add more products here
    ];

    return (
        <div className={styles.carouselContainer}>
            <div class={styles.abstractBackground}></div>
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className={styles.slide}>
                        <div className={styles.productInfo}>
                            <span className={styles.category}>{product.category}</span>
                            <h2 className={styles.title}>{product.title}</h2>
                            <p className={styles.description}>{product.description}</p>
                            <div className={styles.rating}>
                                {"★".repeat(product.rating)}
                                {"☆".repeat(5 - product.rating)}
                            </div>
                            <button className={styles.exploreButton}>Explore</button>
                        </div>
                        <div className={styles.productImage}>
                            <img src={product.image} alt={product.title} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default A9wadCarousel;

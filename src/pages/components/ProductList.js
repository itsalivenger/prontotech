import { useState } from 'react';
import ProductFilter from './ProductFilter'
import styles from '../../assets/styles/productList.module.css';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Logitech MX Anywhere 3S souris sans fil Bluetooth (Noir)',
        price: 890,
        originalPrice: 990,
        discount: '10%',
        status: 'Neuf',
        details: [
            'Type de capteur : Optique',
            'Résolution maximale (dpi): 1000 dpi',
            'Nombre de boutons : 6',
            'DPI : 200-8000 DPI (peut être réglé par incréments de 50 DPI)',
            'Rétro-éclairage : Non',
            'Poids : 99 g',
            'Sans-fil : oui',
        ],
        images: [
            './images/products/laptop.png',
            './images/products/laptop1.jpg',
            './images/products/laptop1.jpg',
        ],
    },
    {
        id: 2,
        name: 'Logitech MX Ergo souris sans fil avec Trackball',
        price: 1149,
        originalPrice: 1390,
        discount: '17%',
        status: 'Neuf',
        details: [
            'Bureau Trackball 440 DPI Graphite',
            'Droitier RF sans fil + Bluetooth 10 m',
            'Type Scroll: Balle',
            'Quantité de boutons programmables: 8',
            'Rétro-éclairage : Non',
            'Source d’alimentation: Piles',
        ],
        images: [
            './images/products/desktop.png',
            './images/products/desktop1.png',
            './images/products/desktop.png',
        ],
    },{
        id: 3,
        name: 'Lenovo Legion Pro 5 DQ12 i9 14th gen Trackball',
        price: 1500,
        originalPrice: 1390,
        discount: '17%',
        status: 'Neuf',
        details: [
            'Bureau Trackball 440 DPI Graphite',
            'Droitier RF sans fil + Bluetooth 10 m',
            'Type Scroll: Balle',
            'Quantité de boutons programmables: 8',
            'Rétro-éclairage : Non',
            'Source d’alimentation: Piles',
        ],
        images: [
            './images/products/desktop.png',
            './images/products/desktop1.png',
            './images/products/desktop.png',
        ],
    },{
        id: 4,
        name: 'Logitech MX Ergo souris sans fil avec Trackball',
        price: 1149,
        originalPrice: 1390,
        discount: '17%',
        status: 'Neuf',
        details: [
            'Bureau Trackball 440 DPI Graphite',
            'Droitier RF sans fil + Bluetooth 10 m',
            'Type Scroll: Balle',
            'Quantité de boutons programmables: 8',
            'Rétro-éclairage : Non',
            'Source d’alimentation: Piles',
        ],
        images: [
            './images/products/desktop.png',
            './images/products/desktop1.png',
            './images/products/desktop.png',
        ],
    },
];

const ProductList = ({ options: { totalProducts, productsDisplayed, sortOptions, handleSortChange } }) => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleMouseEnter = (productId) => {
        setHoveredProduct(productId);
        handleImageChange(productId);
    };

    const handleMouseLeave = () => {
        setHoveredProduct(null);
        setCurrentImageIndex(0);
    };

    const handleImageChange = (hoveredProd) => {
        if (hoveredProd) {
            const product = products.find(p => p.id === hoveredProd);
            if (product.id) {
                setCurrentImageIndex(
                    currentImageIndex === product.images.length - 1 ? 0 : currentImageIndex + 1
                );
            }
        }
    };

    return (
        <div className={styles.productList}>
            <ProductFilter totalProducts={totalProducts}
                productsDisplayed={productsDisplayed}
                sortOptions={sortOptions}
                onSortChange={handleSortChange} />
            {products.map(product => (
                <Link
                    to={`/singleProduct/${product.id}`}
                    key={product.id}
                    className={styles.product}
                >
                    <div className={styles.imageContainer}
                        onMouseEnter={() => handleMouseEnter(product.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={product.images[hoveredProduct === product.id ? currentImageIndex : 0]}
                            alt={product.name}
                            className={styles.productImage + " " + (hoveredProduct === product.id ? styles.fadeIn : '')}
                        />
                        <button className={styles.wishlistButton + " fa fa-heart"}></button>
                    </div>
                    <div className={styles.productInfo}>
                        <h2 className={styles.productTitle}>{product.name}</h2>
                        <ul className={styles.productDetails}>
                            {product.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                        <div className={styles.productPriceSection}>
                            <span className={styles.productPrice}>{product.price}Dh</span>
                            <span className={styles.originalPrice}>{product.originalPrice}Dh</span>
                            <span className={styles.discount}>{product.discount}</span>
                        </div>
                        <button className={styles.addToCartButton}>AJOUTER AU PANIER &nbsp; <i className='fa fa-shopping-cart'></i></button>
                        <button className={styles.compareButton}>Comparer &nbsp; <img alt='compare' className={styles.compareIcon} src='./images/icons/compare.svg' /></button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;

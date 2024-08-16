import React, { useState } from 'react';
import styles from '../../assets/styles/tabsComponents.module.css';
import SectionTitle from './SectionTitle';
import ProntoTechBtn from './ProntoTechButton';

const products = [
	{ image: './images/new_1.jpg', title: 'Product 1', price: '29.99' },
	{ image: './images/new_2.jpg', title: 'Product 2', price: '39.99' },
	{ image: './images/new_3.jpg', title: 'Product 3', price: '49.99' },
	{ image: './images/new_4.jpg', title: 'Product 4', price: '59.99' },
	{ image: './images/new_5.jpg', title: 'Product 5', price: '69.99' },
	{ image: './images/new_6.jpg', title: 'Product 6', price: '79.99' },
	{ image: './images/new_5.jpg', title: 'Product 5', price: '69.99' },
	{ image: './images/new_6.jpg', title: 'Product 6', price: '79.99' },
	// Add more products as needed
];
const NewArrivals = () => {
	const [activeTab, setActiveTab] = useState(0);

	const tabs = [
		{
			label: 'Features', content: <div className={styles.gridContainer}>
				{products.map((product, index) => (
					<ProductCard
						key={index}
						image={product.image}
						title={product.title}
						price={product.price}
					/>
				))}
			</div>
		},
		{
			label: 'Audio & Video', content: <div className={styles.gridContainer}>
				{products.map((product, index) => (
					<ProductCard
						key={index}
						image={product.image}
						title={product.title}
						price={product.price}
					/>
				))}
			</div>
		},
		{
			label: 'Laptops & Computers', content: <div className={styles.gridContainer}>
				{products.map((product, index) => (
					<ProductCard
						key={index}
						image={product.image}
						title={product.title}
						price={product.price}
					/>
				))}
			</div>
		},
	];

	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	return (
		<div>
			<SectionTitle title={'Hot New Arrivals'} />
			<div className={styles.tabsContainer}>
				<div className={styles.tabs}>
					{tabs.map((tab, index) => (
						<div
							key={index}
							className={`${styles.tab} ${index === activeTab ? styles.active : ''}`}
							onClick={() => handleTabClick(index)}
						>
							{tab.label}
						</div>
					))}
				</div>
				<div className={styles.tabContent}>
					{tabs[activeTab].content}
					<div className={styles.bigProductContainer}>
						{/* Big Product card */}
						<ProductBigCard
							title={'Product Title'}
							image={'./images/new_1.jpg'}
							ratings={5}
							price={200} />
					</div>
				</div>
			</div>
		</div>
	);
};

const ProductCard = ({ image, title, price }) => {
	return (
		<div className={styles.card}>
			<img src={image} alt={title} className={styles.productImage} />
			<div className={styles.productDetails}>
				<h3 className={styles.productTitle}>{title}</h3>
				<p className={styles.productPrice}>{price} DH</p>
			</div>
			<button className={styles.addToCartButton}>Add to Cart</button>
		</div>
	);
};


const ProductBigCard = ({ image, title, price, ratings }) => {
	return (
		<div className={styles['product-unit']}>
			<img src={image} alt={title} className={styles['image-wrapper']} />
			<div className={styles['info-section']}>
				<h3 className={styles['product-name']}>{title}</h3>
				<p className={styles['price-tag']}>{price} DH</p>
				<div className={styles['rating-box']}>
					{Array.from({ length: ratings }).map((_, index) => (
						<span key={index} className={styles['star']}>★</span>
					))}
				</div>
				<div className={styles.addToCartContainer}>
					<ProntoTechBtn text={'Add To Cart'} icon={'fa-shopping-cart'} />
				</div>
			</div>
		</div>
	);
};

export default NewArrivals;
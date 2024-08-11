import React, { useState } from 'react';
import styles from '../../assets/styles/CartProdsContainer.module.css';
import { Link } from 'react-router-dom';


const CartItem = ({ product, onRemove, onQuantityChange }) => {
    const handleDecrease = () => {
        if (product.quantity > 1) {
            onQuantityChange(product.quantity - 1);
        }
    };

    const handleIncrease = () => {
        onQuantityChange(product.quantity + 1);
    };

    return (
        <div className={styles.productItem}>
            <div className={styles.productInfo}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <div className={styles.productDetails}>
                    <Link to={`/singleProduct:${''}`} className={styles.productName}>{product.name}</Link>
                    <span className={styles.productWarranty}>Garantie: {product.warranty}</span>
                </div>
            </div>
            <div className={styles.productPrice}>{product.price}Dh</div>
            <div className={styles.productQuantity}>
                <button onClick={handleDecrease} className={styles.quantityButton}>-</button>
                <span className={styles.quantity}>{product.quantity}</span>
                <button onClick={handleIncrease} className={styles.quantityButton}>+</button>
            </div>
            <div className={styles.productSubtotal}>{product.price * product.quantity}Dh</div>
            <button className={styles.removeButton} onClick={onRemove}>🗑</button>
        </div>
    );
};

const CartProdsContainer = ({ initialProducts }) => {
    const [products, setProducts] = useState(initialProducts);

    const removeProduct = (index) => {
        setProducts(products.filter((_, i) => i !== index));
    };

    const handleQuantityChange = (index, newQuantity) => {
        setProducts(products.map((product, i) =>
            i === index ? { ...product, quantity: newQuantity } : product
        ));
    };

    return (
        <div className={styles.cartContainer}>
            <div className={styles.cartHeader}>
                <span>PRODUIT</span>
                <span>PRIX</span>
                <span>QUANTITÉ</span>
                <span>SOUS-TOTAL</span>
            </div>
            {products.map((product, index) => (
                <CartItem
                    key={index}
                    product={product}
                    onRemove={() => removeProduct(index)}
                    onQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
                />
            ))}
            <div className={styles.cartTotal}>
                Total: {products.reduce((total, product) => total + product.price * product.quantity, 0)}Dh
            </div>
        </div>
    );
};

export default CartProdsContainer;

// ActiveOrders.jsx
import React from 'react';
import styles from '../../assets/styles/activeOrders.module.css';


const orders = [
    {
        id: 1,
        number: '123456',
        date: '2024-08-15',
        status: 'Processing',
        totalAmount: 199.99,
        products: [
            {
                id: 101,
                name: 'Laptop Pro 2024',
                quantity: 1,
                price: 199.99,
                image: './images/products/laptop.png'
            },
            {
                id: 102,
                name: 'Wireless Mouse',
                quantity: 1,
                price: 29.99,
                image: './images/products/desktop.png'
            }
        ]
    },
    {
        id: 2,
        number: '654321',
        date: '2024-08-14',
        status: 'Shipped',
        totalAmount: 89.99,
        products: [
            {
                id: 103,
                name: 'Bluetooth Headphones',
                quantity: 1,
                price: 89.99,
                image: './images/products/desktop.png'
            }
        ],
        tracking: {
            number: '1Z999AA10123456784',
            carrier: 'UPS'
        }
    },
    {
        id: 3,
        number: '789123',
        date: '2024-08-13',
        status: 'Delivered',
        totalAmount: 49.99,
        products: [
            {
                id: 104,
                name: 'Smartphone Case',
                quantity: 2,
                price: 24.99,
                image: './images/products/desktop.png'
            }
        ]
    }
];

const ActiveOrders = () => {
    return (
        <div className={styles.activeOrders}>
            <h2 className={styles.title}>Active Orders</h2>
            {orders.map(order => (
                <div key={order.id} className={styles.orderCard}>
                    <div className={styles.orderHeader}>
                        <span className={styles.orderNumber}>Order #{order.number}</span>
                        <span className={styles.orderDate}>{order.date}</span>
                        <span className={`${styles.status} ${styles[order.status.toLowerCase()]}`}>
                            {order.status}
                        </span>
                    </div>
                    <div className={styles.products}>
                        {order.products.map(product => (
                            <div key={product.id} className={styles.product}>
                                <img src={product.image} alt={product.name} className={styles.productImage} />
                                <div className={styles.productInfo}>
                                    <span className={styles.productName}>{product.name}</span>
                                    <span className={styles.productQty}>Qty: {product.quantity}</span>
                                    <span className={styles.productPrice}>{product.price.toFixed(2)} DH</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.orderFooter}>
                        <span className={styles.totalAmount}>Total: {order.totalAmount.toFixed(2)} DH</span>
                        <button className={styles.detailsButton}>View Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActiveOrders;

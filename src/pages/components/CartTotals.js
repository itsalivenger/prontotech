import React, { useState } from "react";
import styles from "../../assets/styles/CartTotals.module.css";

const CartTotals = () => {
    const [coupon, setCoupon] = useState("");
    const [subtotal, setSubtotal] = useState(150);
    const [total, setTotal] = useState(150);

    const handleCouponChange = (e) => {
        setCoupon(e.target.value);
    };

    const applyCoupon = () => {
        // Handle coupon application logic
        console.log("Coupon applied:", coupon);
        // Adjust total based on coupon, this is just a mock example
        if (coupon === "DISCOUNT10") {
            setTotal(subtotal * 0.9); // Apply a 10% discount
        }
    };

    const clearCart = () => {
        // Handle cart clearing logic
        console.log("Cart cleared");
    };

    const proceedToCheckout = () => {
        // Handle checkout process
        console.log("Proceeding to checkout");
    };

    return (
        <div className={styles.cartTotalsContainer}>
            <div className={styles.buttonsContainer}>
                <button onClick={clearCart} className={styles.clearCartButton}>
                    CLEAR CART
                </button>
                <button className={styles.continueShoppingButton}>
                    CONTINUE SHOPPING
                </button>
            </div>

            <div className={styles.couponContainer}>
                <h2>Coupon</h2>
                <p>Enter your coupon code if you have one.</p>
                <div className={styles.couponInputContainer}>
                    <input
                        type="text"
                        value={coupon}
                        onChange={handleCouponChange}
                        placeholder="Coupon Code"
                        className={styles.couponInput}
                    />
                    <button onClick={applyCoupon} className={styles.applyCouponButton}>
                        APPLY COUPON
                    </button>
                </div>
            </div>

            <div className={styles.totalsContainer}>
                <div className={styles.totalItem}>
                    <span>Subtotal</span>
                    <span>{subtotal} DH</span>
                </div>
                <div className={styles.totalItem}>
                    <span>Total</span>
                    <span>{total} DH</span>
                </div>
                <button onClick={proceedToCheckout} className={styles.checkoutButton}>
                    PROCEED TO CHECKOUT
                </button>
            </div>
        </div>
    );
};

export default CartTotals;

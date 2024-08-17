import React, { useState } from 'react';
import styles from '../../assets/styles/couponComponent.module.css'
import ProntoTechBtn from './ProntoTechButton';

const availableCoupons = [
  { code: 'SAVE10', discount: '10% off', minPurchase: '$50', expires: '2024-12-31' },
  { code: 'FREESHIP', discount: 'Free Shipping', minPurchase: '$100', expires: '2024-09-30' },
  { code: 'SUMMER20', discount: '20% off', minPurchase: '$75', expires: '2024-08-31' },
  { code: 'WELCOME15', discount: '15% off', minPurchase: '$30', expires: '2024-10-15' }
];

const activeCoupons = [
  { code: 'SAVE10', discount: '10% off' },
  { code: 'FREESHIP', discount: 'Free Shipping' }
];

const CouponComponent = () => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupons, setAppliedCoupons] = useState(activeCoupons);
  const [message, setMessage] = useState('');

  const handleApplyCoupon = () => {
    const coupon = availableCoupons.find(c => c.code === couponCode.toUpperCase());
    if (coupon) {
      setAppliedCoupons([...appliedCoupons, coupon]);
      setMessage(`Coupon "${couponCode.toUpperCase()}" applied successfully!`);
    } else {
      setMessage('Invalid coupon code or expired.');
    }
    setCouponCode('');
  };

  return (
    <div className={styles.couponSection}>
      <div className={styles.appliedCoupons}>
        <h3>Applied Coupons</h3>
        <ul>
          {appliedCoupons.map((coupon, index) => (
            <li key={index} className={styles.appliedCouponItem}>
              <span className={styles.couponCode}>{coupon.code}</span>
              <span className={styles.couponDiscount}>{coupon.discount}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={styles.couponInput}>
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className={styles.couponCodeInput}
        />
        <div className={styles.applyCouponBtn}>
          <ProntoTechBtn onClick={handleApplyCoupon} text={'Apply Coupon'} icon={'fa-gift'} />
        </div>
      </div>

      <div className={styles.availableCoupons}>
        <h3>Available Coupons</h3>
        <ul>
          {availableCoupons.map((coupon, index) => (
            <li key={index} className={styles.couponItem}>
              <div className={styles.couponDetails}>
                <span className={styles.couponCode}>{coupon.code}</span>
                <span className={styles.couponDiscount}>{coupon.discount}</span>
                <span className={styles.couponMinPurchase}>Min Purchase: {coupon.minPurchase}</span>
                <span className={styles.couponExpires}>Expires: {coupon.expires}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
};

export default CouponComponent;

import React, { useState } from 'react';
import styles from '../../assets/styles/couponComponent.module.css'
import ProntoTechBtn from './ProntoTechButton'; // Assuming ProntoTechBtn is in the same directory

const CouponComponent = () => {
  // coupons aykun fihum terms and conditions expiration date o coupon value
  const [coupon, setCoupon] = useState('');

  const applyCoupon = () => {
    alert('waaeyeeeeeh mr beaasst')
  }

  const handleApplyCoupon = () => {
    applyCoupon(coupon);
    setCoupon('');
  };

  return (
    <div className={styles.couponContainer}>
      <h2 className={styles.header}>Apply Coupon</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter your coupon code"
          className={styles.input}
        />
        <div className={styles.ProntoTechBtn}>
          <ProntoTechBtn text="Apply" icon="fa fa-check" onClick={handleApplyCoupon} />
        </div>
      </div>
      <div className={styles.couponDetails}>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Coupon Value:</span>
          <span className={styles.detailValue}>20% off</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Expires on:</span>
          <span className={styles.detailValue}>31st December 2024</span>
        </div>
      </div>
      <div className={styles.terms}>
        <h3>Terms and Conditions</h3>
        <ul>
          <li>Valid for one-time use only.</li>
          <li>Cannot be combined with other offers.</li>
          <li>Non-transferable and non-refundable.</li>
        </ul>
      </div>
    </div>
  );
};

export default CouponComponent;

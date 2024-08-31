import React from 'react';
import styles from '../../assets/styles/prontoTechBtn.module.css';

const ProntoTechBtn = ({ text, icon, type, onClick, className = '' }) => {
  return (
    <button
      className={`${styles.addToCart} ${className}`}
      onClick={onClick}
      type={type}
    >
      <span>{text}</span> &nbsp; <span className={`fa ${icon}`}></span>
    </button>
  );
};

export default ProntoTechBtn;

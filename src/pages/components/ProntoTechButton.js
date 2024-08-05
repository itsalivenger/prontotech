import React from 'react';
import styles from '../../assets/styles/prontoTechBtn.module.css';

const ProntoTechBtn = ({ text, icon, onClick, customStyles }) => {
  return (
    <button className={`${styles.addToCart} ${customStyles}`} onClick={onClick}>
      <span>{text}</span> &nbsp; <span className={`fa ${icon}`}></span>
    </button>
  );
};

export default ProntoTechBtn;

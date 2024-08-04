import React from 'react';
import styles from '../../assets/styles/imageText.module.css';

const ImageText = ({ imageSrc, text, title }) => {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <img src={imageSrc} alt="Display" className={styles.image} />
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default ImageText;

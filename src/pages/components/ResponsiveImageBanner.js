import React from 'react';
import styles from '../../assets/styles/ResponsiveImageBanner.module.css'; // Update the path as needed

const ResponsiveImageBanner = ({ src, alt, title, text, buttonText, buttonOnClick }) => {
    return (
        <div className={styles.bannerContainer}>
            <img src={src} alt={alt} className={styles.bannerImage} />
            {(title || text || buttonText) && (
                <div className={styles.overlay}>
                    {title && <h1 className={styles.title}>{title}</h1>}
                    {text && <p className={styles.text}>{text}</p>}
                    {buttonText && (
                        <button className={styles.button} onClick={buttonOnClick}>
                            {buttonText}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ResponsiveImageBanner;

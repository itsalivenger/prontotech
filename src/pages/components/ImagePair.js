import styles from '../../assets/styles/imagePair.module.css';

const ImagePair = ({ portraitImage, landscapeImage, altText1, altText2 }) => {
  return (
    <div className={styles.imagePairContainer}>
      <div className={`${styles.imageWrapper} ${styles.portraitWrapper}`}>
        <img src={portraitImage} alt={altText1} className={styles.portraitImage} />
      </div>
      <div className={`${styles.imageWrapper} ${styles.landscapeWrapper}`}>
        <img src={landscapeImage} alt={altText2} className={styles.landscapeImage} />
      </div>
    </div>
  );
};

export default ImagePair;

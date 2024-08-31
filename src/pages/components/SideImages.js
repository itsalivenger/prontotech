import styles from '../../assets/styles/sideImages.module.css'

function SideImages({ img1, img2 }) {
    return (
        <div>
            <div className={styles.brandsContainer}>
                <div className={styles.brandCont + ' ' + styles.cameraBrand}>
                    <div className={styles.brandTextCont}>
                        <span className={styles.brandDeal}>MONTH DEAL</span>
                        <span className={styles.brandTitle}>The Best Cheap<br />Camera Sales</span>
                        <span className={styles.brandDiscount}>UP TO 75% OFF</span>
                    </div>
                    <img src={img1} className={styles.brandImg} alt="camera_image" />
                </div>
                <div className={styles.brandCont + ' ' + styles.watchBrand}>
                    <img src={img2} className={styles.brandImg} alt="watch_image" />
                    <div className={styles.brandTextCont}>
                        <span className={styles.brandDeal}>BIG SALE</span>
                        <span className={styles.brandTitle}>Today's Best<br />Apple Watch</span>
                        <span className={styles.brandDiscount}>GIFT CARD $150</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideImages;
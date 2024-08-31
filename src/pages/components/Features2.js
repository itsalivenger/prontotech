import styles from '../../assets/styles/features2.module.css'

function Features2({ icon1, icon2, icon3, icon4}) {
    return (
        <div>
            <div className={styles.advantagesCont}>
                <div className={styles.advantageCont}>
                    <img src={icon4} className={styles.advantageImg} alt="truck_image" />
                    <span className={styles.advantageTitle}>Free Standard Delivery</span>
                    <p className={styles.advantageDesc}>Metus tellus multicries a quam<br />sit amet lorem diam libero<br />de cosmopolis.</p>
                </div>
                <div className={styles.advantageCont}>
                    <img src={icon1} className={styles.advantageImg} alt="secure_image" />
                    <span className={styles.advantageTitle}>Secure Shopping</span>
                    <p className={styles.advantageDesc}>Metus tellus multicries a quam<br />sit amet lorem diam libero<br />de cosmopolis.</p>
                </div>
                <div className={styles.advantageCont}>
                    <img src={icon2} className={styles.advantageImg} alt="confidence_image" />
                    <span className={styles.advantageTitle}>Shop With Confidence</span>
                    <p className={styles.advantageDesc}>Metus tellus multicries a quam<br />sit amet lorem diam libero<br />de cosmopolis.</p>
                </div>
                <div className={styles.advantageCont}>
                    <img src={icon3} className={styles.advantageImg} alt="help_image" />
                    <span className={styles.advantageTitle}>24/7 Help Center</span>
                    <p className={styles.advantageDesc}>Metus tellus multicries a quam<br />sit amet lorem diam libero<br />de cosmopolis.</p>
                </div>
            </div>
        </div>
    );
}

export default Features2;
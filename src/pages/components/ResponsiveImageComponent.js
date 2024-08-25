import { Link } from 'react-router-dom';
import styles from '../../assets/styles/responsiveImageComponent.module.css';


const ResponsiveImageComponent = () => {
  return (
    <div className={styles.promotionsContainer}>
      <div className={styles.topSection}>
        {/* First promo: Game Controller */}
        <div className={`${styles.promo} ${styles.leftPromo}`}>
          <div className={styles.promoContent}>
            <div className={styles.textContent}>
              <div className={styles.newCollection}>New Collection</div>
              <h2>Discount 50% On All Game</h2>
              <p>FREE SHIPPING ALL ORDER</p>
              <p>From <span className={styles.price}>$399.99</span></p>
              <Link to={'/shop'} className={styles.shopButton}>SHOP NOW</Link>
            </div>
            <div className={styles.imageContent}>
              <img src="./images/flayers/controller.png" alt="Game Controller" />
            </div>
          </div>
        </div>

        {/* Second promo: Nintendo Switch */}
        <div className={`${styles.promo} ${styles.rightPromo}`}>
          <div className={styles.promoContent}>
            <div className={styles.textContent}>
              <div className={styles.monthDeals}>Month Deals</div>
              <h2>Nintendo Switch</h2>
              <p>Today's Super Offer</p>
            </div>
            <div className={styles.imageContent}>
              <img src="./images/flayers/switch.png" alt="Game Controller" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom promo: Watches */}
      <div className={styles.bottomSection}>
        <div className={styles.watchPromo}>
          <div>
            <h2>Huge Discounts On All Tablettes !</h2>
          </div>
          <div className={styles.imageContent}>
            <img src="./images/flayers/tablette.png" alt="Watches" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default ResponsiveImageComponent;

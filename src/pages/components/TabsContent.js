import { useState } from 'react';
import styles from '../../assets/styles/tabsContent.module.css';
import ProductDetails from './ProductDetails';
import Reviews from './Reviews';
import ReviewComponent from './ProductReviews';
import ProductOverview from './ProductOverview';
import SectionTitle from './SectionTitle';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabContainer + " container"}>
      <div className={styles.tabHeaders}>
        <div
          className={`${styles.tab} ${activeTab === 'description' ? styles.active : ''}`}
          onClick={() => handleTabClick('description')}
        >
          DESCRIPTION
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'additionalInfo' ? styles.active : ''}`}
          onClick={() => handleTabClick('additionalInfo')}
        >
          INFORMATIONS COMPLÉMENTAIRES
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'reviews' ? styles.active : ''}`}
          onClick={() => handleTabClick('reviews')}
        >
          AVIS (0)
        </div>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'description' && <div className={styles.tabContent}>
          <ProductOverview />
        </div>}
        {activeTab === 'additionalInfo' && <div className={styles.tabContent}><ProductDetails /></div>}
        {activeTab === 'reviews' && <div className={styles.tabContent}>
          <ReviewComponent />
          <Reviews />
        </div>}
      </div>
      <SectionTitle title="Similar Products" />
    </div>
  );
};

export default TabComponent;

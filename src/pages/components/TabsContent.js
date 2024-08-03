import { useState } from 'react';
import styles from '../../assets/styles/tabsContent.module.css';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabContainer + " container"}>
      <div className={styles.tabHeaders}>
        <div
          className={`${styles.tabHeader} ${activeTab === 'description' ? styles.active : ''}`}
          onClick={() => handleTabClick('description')}
        >
          DESCRIPTION
        </div>
        <div
          className={`${styles.tabHeader} ${activeTab === 'additionalInfo' ? styles.active : ''}`}
          onClick={() => handleTabClick('additionalInfo')}
        >
          INFORMATIONS COMPLÉMENTAIRES
        </div>
        <div
          className={`${styles.tabHeader} ${activeTab === 'reviews' ? styles.active : ''}`}
          onClick={() => handleTabClick('reviews')}
        >
          AVIS (0)
        </div>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'description' && <div>Description content goes here...</div>}
        {activeTab === 'additionalInfo' && <div>Additional info content goes here...</div>}
        {activeTab === 'reviews' && <div>Reviews content goes here...</div>}
      </div>
    </div>
  );
};

export default TabComponent;

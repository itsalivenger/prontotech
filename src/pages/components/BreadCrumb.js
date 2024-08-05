import React from 'react';
import styles from '../../assets/styles/BreadCrumb.module.css';

const Breadcrumb = ({ items }) => {
  return (
    <div className={styles.breadcrumbContainer}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 ? <span className={styles.icon + ' fa fa-home'}></span> : <span className={`${styles.chevron} fa fa-chevron-right ${styles.icon}`}></span>}
          <span className={styles.breadcrumbItem}>{item}</span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;

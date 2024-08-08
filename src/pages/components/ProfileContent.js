import React from 'react';
import styles from '../../assets/styles/content.module.css';

const ContentComponent = ({ title, body }) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.body}>{body}</div>
    </div>
  );
};


export default ContentComponent;

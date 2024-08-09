import React, { useState } from 'react';
import styles from '../../assets/styles/megaLink.module.css';

const MegaLink = ({ label }) => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (
    <div 
      className={styles.megaLink} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <span>{label}</span>
      {isHovered && (
        <div className={styles.megaMenu}>
          {label}
        </div>
      )}
    </div>
  );
};

export default MegaLink;

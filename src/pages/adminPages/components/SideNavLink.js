import { useState } from 'react';
import styles from '../styles/sideNavLink.module.css';

const SideNavLink = ({ title, icon, subLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        {icon && <img src={icon} alt="" className={styles.mainIcon} />}
        {title}
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`${styles.subLinks} ${isOpen ? styles.open : ''}`}>
        {subLinks.map((link, index) => (
          <a key={index} href={link.href} className={styles.subLink}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideNavLink;

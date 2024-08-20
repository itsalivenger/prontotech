import { useState } from 'react';
import styles from '../styles/sideNav.module.css';
import DropdownLink from './SideNavLink';



const Sidenav = ({ links, toggleLabel = '←' }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidenav = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={`${styles.sidenav} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.toggleSection}>
        <button className={styles.toggleButton} onClick={toggleSidenav}>
          {isOpen ? toggleLabel : '→'} {/* Toggle label or icon */}
        </button>
      </div>
      <div className={styles.content}>
        {links.map((link, index) => (
          <DropdownLink 
            key={index}
            title={link.title} 
            icon={link.icon} 
            subLinks={link.subLinks} 
          />
        ))}
      </div>
    </div>
  );
};

export default Sidenav;

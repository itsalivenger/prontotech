import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/styles/sideNav.module.css';

const items = [
  { label: 'Dashboard', link: '/dashboard', icon: 'fa fa-home' },
  { label: 'Orders History', link: '/ordersHistory', icon: 'fa fa-shopping-cart' },
  { label: 'Account Details', link: '/account-details', icon: 'fa fa-user' },
  { label: 'My Active Orders', link: '/MyOrders ', icon: 'fa fa-clipboard' },
  { label: 'My Coupons', link: '/Coupon', icon: 'fa fa-percent' },
  { label: 'Disconnect', link: '/disconnect', icon: 'fa fa-sign-out' },
];

const SidebarNavigation = ({ onMenuItemClick }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index, item) => {
    setActiveIndex(index);
    onMenuItemClick(item, index);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>Profile Menu</div>
      <ul className={styles.menu}>
        {items.map((item, index) => (
          <li key={item.label} className={styles.menuItem}>
            <span
              href={item.link}
              className={`${styles.menuLink} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => handleItemClick(index, item)}
            >
              <span className={item.icon}></span>
              <span className={styles.menuLabel}>{item.label}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

SidebarNavigation.propTypes = {
  onMenuItemClick: PropTypes.func.isRequired,
};

export default SidebarNavigation;

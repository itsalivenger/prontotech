import { useState } from 'react';
import styles from '../styles/sideNav.module.css';


const SideNavLink = ({ link, isOpen, toggleDropdown }) => {
  return (
    <li className={styles.navItem}>
      <div className={styles.navTitle} onClick={toggleDropdown}>
        <img src={link.icon} alt={link.title} />
        <span>{link.title}</span>
        <span className={styles.dropdownIcon}>{isOpen ? '-' : '+'}</span>
      </div>
      <ul className={`${styles.subLinks} ${isOpen ? styles.open : ''}`}>
        {link.subLinks.map((subLink, subIndex) => (
          <li key={subIndex} className={styles.subLinkItem}>
            <a href={subLink.url}>{subLink.title}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

const SideNav = ({ links }) => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div>
      <div className={styles.toggleButton + ' ' + (isNavOpen ? '' : styles.navToggle)} onClick={toggleNav}>
        {isNavOpen ? '<<' : '>>'}
      </div>
      <div className={`${styles.sideNav} ${isNavOpen ? styles.open : styles.closed}`}>
        <div className={styles.logo}>
          <img src="./images/logos/prontoLogo.png" className="img img-fluid" alt="Logo" />
        </div>
        <ul className={styles.navLinks}>
          {links.map((link, index) => (
            <SideNavLink
              key={index}
              link={link}
              isOpen={openDropdown === index}
              toggleDropdown={() => toggleDropdown(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

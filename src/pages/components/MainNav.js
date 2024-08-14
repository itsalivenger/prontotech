import React, { useState } from 'react';
import styles from '../../assets/styles/mainNav.module.css';
import ProntoTechBtn from './ProntoTechButton';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggled, setToggled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCategoriesMenu = () => setToggled(!toggled);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <ProntoTechBtn className={styles.prontoBtn} text={"Categories"} icon={"fa-bars"} onClick={toggleCategoriesMenu} />
        <Dropdown toggleCategoriesMenu={toggleCategoriesMenu} toggled={toggled} />
      </div>
      <div className={styles.mainNavBtnsContainer}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <button className={styles.navBtns + " " + styles.menuBtn}>Menu &nbsp;<i className="fa fa-bars"></i></button>
        </div>
      </div>
      <div className={`${styles.sideNav} ${isMenuOpen ? styles.show : ''}`}>
        <button className={styles.closeBtn} onClick={toggleMenu}>×</button>
        <ul className={styles.links}>
          <li><Link to="/shop/pcs">Ordinateurs</Link></li>
          <li><Link to={"/shop/laptops"}>Telephones</Link></li>
          <li><Link to={'/shop/composantes'}>Composants</Link></li>
          <li><Link to={'/shop/gaming'}>Gaming</Link></li>
          <li><Link to={'/shop/promo'}>Promotion</Link></li>
        </ul>
        <div className={styles.icons}>
          <a href="#facebook" className={styles.icon}><i className={"fa fa-facebook-f " + styles.facebook}></i></a>
          <a href="#twitter" className={styles.icon}><i className={"fa fa-twitter " + styles.twitter}></i></a>
          <a href="#instagram" className={styles.icon}><i className={"fa fa-instagram " + styles.instagram}></i></a>
          {/* <a href="#tiktok" className={styles.icon + " " + styles.tiktoklogo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512">
              <path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121 121 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
            </svg>
          </a> */}
          <a href="#whatsapp" className={styles.icon}><i className={"fa fa-whatsapp " + styles.whatsapp}></i></a>
        </div>
      </div>


      {/* Phone */}
      <BottomNavBar toggleMenu={toggleMenu} toggleCategoriesMenu={toggleCategoriesMenu} />
    </nav>
  );
};

const BottomNavBar = ({ toggleMenu, toggleCategoriesMenu }) => {
  const [isOnShop] = useState(false);
  return (
    <div className={styles.navbar + ' ' + styles.phoneMenu}>
      <Link to={'/'}>
        <div className={styles.navItem}>
          <span className={styles.icon}>🏠</span>
          <span className={styles.label}>Home</span>
        </div>
      </Link>
      {isOnShop && <div className={styles.navItem}>
        <span className={styles.icon}>⚙️</span>
        <span className={styles.label}>Filters</span>
      </div>}
      <div onClick={toggleCategoriesMenu} className={styles.navItem}>
        <span className={styles.icon}><i className={styles.gear + ' fa fa-gear'}></i></span>
        <span className={styles.label}>
          Categories
        </span>
      </div>
      <div onClick={toggleMenu} className={styles.navItem}>
        <span className={styles.icon}><i className={styles.menu + ' fa fa-bars'}></i></span>
        <span className={styles.label}>
          Menu
        </span>
      </div>
      {<Link to={'login'}>
        <div className={styles.navItem}>
          <span className={styles.icon}>👤</span>
          <span className={styles.label}>Compte</span>
        </div>
      </Link>}
    </div>
  );
};

export default MainNav;

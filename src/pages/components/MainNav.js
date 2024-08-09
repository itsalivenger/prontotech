import React, { useState } from 'react';
import styles from '../../assets/styles/mainNav.module.css';
import ProntoTechBtn from './ProntoTechButton';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';

const MainNav = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isIconsOpen, setIsIconsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleLinks = () => setIsLinksOpen(!isLinksOpen);
  const toggleIcons = () => setIsIconsOpen(!isIconsOpen);
  const toggleCategories = () => setIsCategoryOpen(!isCategoryOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <ProntoTechBtn text={"Categories"} icon={"fa-bars"} onClick={toggleCategories} />
        {/* <MegaMenu /> */}
      </div>
      <div className={styles.mainNavBtsContainer}>
        <div className={styles.hamburger} onClick={toggleLinks}>
          <button className={styles.navBtns + " " + styles.menuBtn}>Menu &nbsp;<i className="fa fa-bars"></i></button>
        </div>
        <div className={`${styles.hamburger} ${styles.iconHamburger}`} onClick={toggleIcons}>
          <button className={styles.navBtns + " " + styles.contactBtn}>Contact &nbsp; <i className="fa fa-ellipsis-h"></i></button>

        </div>
      </div>
      <ul className={`${styles.links} ${isLinksOpen ? styles.show : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to={"#deals"}>Super Deals</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
      <div className={`${styles.icons} ${isIconsOpen ? styles.show : ''}`}>
        <a href="#facebook" className={styles.icon}><i className={"fa fa-facebook-f " + styles.facebook}></i></a>
        <a href="#twitter" className={styles.icon}><i className={"fa fa-twitter " + styles.twitter}></i></a>
        <a href="#instagram" className={styles.icon}><i className={"fa fa-instagram " + styles.instagram}></i></a>
        <a href="#tiktok" className={styles.icon + " " + styles.tiktoklogo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121 121 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
        </a>
      </div>
    </nav>
  );
};

export default MainNav;

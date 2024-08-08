import React, { } from 'react';
import styles from '../../assets/styles/mainNav.module.css';
import ProntoTechBtn from './ProntoTechButton';


const MainNav = () => {
  // Define your style variables
  const activeLinkStyle = { color: '#e61476' }; // Pink for active link
  const iconStyle = { color: '#000' }; // Black for icons and logo

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} style={iconStyle}>
        <ProntoTechBtn text={"Categories"} icon={"fa-bars"} />
      </div>
      <ul className={styles.links}>
        <li><a href="#home" style={activeLinkStyle}>Home</a></li>
        <li><a href="#about">Super Deals</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.icons}>
        <a href="#facebook" className={styles.icon}><i className={"fa fa-facebook-f " + styles.facebook}></i></a>
        <a href="#twitter" className={styles.icon}><i className={"fa fa-twitter " + styles.twitter}></i></a>
        <a href="#instagram" className={styles.icon}><i className={"fa fa-instagram " + styles.instagram}></i></a>
        <a href="#dribbble" className={styles.icon + " " + styles.tiktoklogo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121 121 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/></svg>
        </a>

      </div>
    </nav>
  );
};

export default MainNav;

import { Link } from 'react-router-dom';
import styles from '../../assets/styles/megaMenu.module.css';

const MegaMenu = ({ index, activeIndex }) => {
  const menuData = [
    {
      title: 'PC Fixe Gamer',
      links: ['PC Gamer Intel', 'PC Gamer Ryzen', 'PC Gamer RTX', 'PC Gamer GTX', 'PC Gamer Complet'],
    },
    {
      title: 'PC Portable Gamer',
      links: ['MSI Gaming Series', 'ASUS Gaming Series', 'PC Portable RTX 2060', 'PC Portable GTX 1650'],
    },
    {
      title: 'Écran PC Gamer',
      links: ['Ecran 165 Hz', 'Ecran 144 Hz', 'Ecran 240 Hz', 'Ecran incurvé'],
    },
    {
      title: 'Souris Gamer',
      links: ['Souris MSI', 'Souris Razer', 'Souris Cougar', 'Tapis de Souris Gamer'],
    },
    {
      title: 'Clavier PC Gamer',
      links: ['Clavier mécanique', 'Pack clavier souris gamer'],
    },
    {
      title: 'Accessoires',
      links: ['Casque Gamer', 'Microphone', 'Webcam', 'Manette de jeu', 'Fauteuil gamer'],
    },
  ];

  return (
    <div className={styles.megaMenu + ` ${styles['megaMenuTop' + index]} ${activeIndex == index ? '' : styles.trigger}`}>
      <div className={styles.linksSection}>
        {menuData.map((category, index) => (
          <div key={index} className={styles.category}>
            <Link to={category.url}><h4 className={styles.title}>{category.title}</h4></Link>
            <ul className={styles.links}>
              {category.links.map((link, i) => (
                <li key={i}><Link to={category.url}>{link}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.imageSection}>
        <img src="./images/megaMenuImg.webp" alt="PC Builder" />
      </div>
    </div>
  );
};

export default MegaMenu;

import React, { useState } from 'react';
import styles from '../../assets/styles/dropdown.module.css';
import MegaMenu from './MegaMenu';


const links = ['Ordinateurs', 'Telephones', 'Headphones', 'Composants', 'Promotion']
const Dropdown = ({ toggled, toggleCategoriesMenu }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleMenu = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.dropdown + " " + (toggled ? styles.toggle : '')}>
            <button onClick={toggleCategoriesMenu} className={styles.closeButton + ' fa fa-close'}>&nbsp; Close</button>
            
            {links.map((item, index) => (
                <div key={index} className={styles.menuItem}>
                    <div className={styles.title} onClick={() => toggleMenu(index)}>
                        {item} <span className={styles.arrow + ' fa fa-arrow-right'}></span>
                    </div>
                    <div
                        className={`${styles.submenu} ${activeIndex === index ? styles.active : ''}`}
                    >
                        {/* Future MegaMenu content will go here */}
                        <MegaMenu index={index} activeIndex={activeIndex}  />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dropdown;

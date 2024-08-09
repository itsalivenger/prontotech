import React, { useState } from 'react';
import '../../assets/styles/megaMenu.module.css';

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="mega-menu">
      <div className="main-menu">
        <div 
          className="menu-item" 
          onMouseEnter={() => handleMouseEnter('informatique')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Informatique</a>
          {activeMenu === 'informatique' && (
            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>Portables</h4>
                <a href="#">PC Portable</a>
                <a href="#">PC Portable LDLC</a>
                <a href="#">MacBook</a>
                <a href="#">Accessoires MacBook</a>
                <a href="#">Extension mémoire</a>
                <a href="#">Disque dur 2"1/2</a>
                <a href="#">Sacs & sacoches</a>
                <a href="#">Refroidisseur</a>
                <a href="#">Station d'accueil</a>
                <a href="#">Voir +</a>
              </div>
              <div className="dropdown-column">
                <h4>Pièces</h4>
                <a href="#">Configurateur PC</a>
                <a href="#">Boîtier</a>
                <a href="#">Alimentation</a>
                <a href="#">Disque dur</a>
                <a href="#">Disque SSD</a>
                <a href="#">Carte mère</a>
                <a href="#">Carte graphique</a>
                <a href="#">Mémoire PC</a>
                <a href="#">Processeur</a>
                <a href="#">Refroidissement</a>
                <a href="#">Kit upgrade PC</a>
                <a href="#">Voir +</a>
              </div>
              <div className="dropdown-column">
                <h4>Périphériques</h4>
                <a href="#">Écran PC</a>
                <a href="#">Clavier/souris/tapis</a>
                <a href="#">Casque & micro</a>
                <a href="#">Imprimante</a>
                <a href="#">Stockage externe</a>
                <a href="#">Onduleur</a>
                <a href="#">Webcam</a>
                <a href="#">Streaming</a>
                <a href="#">Fauteuil</a>
                <a href="#">Tablette graphique</a>
                <a href="#">Enceinte PC</a>
                <a href="#">Voir +</a>
              </div>
            </div>
          )}
        </div>
        {/* Add more menu items here */}
      </div>
    </div>
  );
};

export default MegaMenu;

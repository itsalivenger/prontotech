import React from 'react';
import styles from '../../assets/styles/ThinkStation.module.css';

const ThinkStation = ({ reverse, imageSrc }) => {
  return (
    <div className={styles.container + ` ${reverse ? styles.reverse : ""}`}>
      <div className={styles.textContainer}>
        <h2>ThinkStation P358 Tower (AMD)</h2>
        <p>
          Outre les derniers puissants processeurs AMD Ryzen™ Pro, la station de travail ThinkStation P358, tour est proposée avec un choix de cartes graphiques indépendantes NVIDIA RTX™ ou NVIDIA GeForce RTX™. Elle prend également en charge une alimentation d’une puissance maximale de 550W et d’une efficacité de 92 %. Ainsi, que vous soyez un ingénieur CAO débutant, un concepteur de produits ou un enseignant ou étudiant en STEM, vous disposez des performances de premier ordre dont vous avez besoin pour gérer n’importe quel flux de travail.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="ThinkStation P358" />
      </div>
    </div>
  );
};

export default ThinkStation;

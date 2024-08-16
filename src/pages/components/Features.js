import React from 'react';
import styles from '../../assets/styles/features.module.css';

const Features = () => {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featureItem}>
        {/* <img src="/icons/stopwatch.svg" alt="Process Rapide" className={styles.featureIcon} /> */}
        <i className={styles.featureIcon + ' fa fa-clock'}></i>
        <h3 className={styles.featureTitle}>PROCESS RAPIDE</h3>
        <p className={styles.featureDescription}>
          RODAN vous permet de chercher les meilleures offres Maroc électroménager et multimédia du marché.
        </p>
      </div>
      <div className={styles.featureItem}>
        {/* <img src="/icons/price-tag.svg" alt="Comparaison de Prix" className={styles.featureIcon} /> */}
        <i className={styles.featureIcon + ' fa fa-tag'}></i>
        <h3 className={styles.featureTitle}>COMPARAISON DE PRIX</h3>
        <p className={styles.featureDescription}>
          Vous pouvez comparer les prix des revendeurs les plus connus et choisir celui qui vous satisfait.
        </p>
      </div>
      <div className={styles.featureItem}>
        {/* <img src="/icons/thumbs-up.svg" alt="Meilleur Deal" className={styles.featureIcon} /> */}
        <i className={styles.featureIcon + ' fa fa-thumbs-up'}></i>
        <h3 className={styles.featureTitle}>MEILLEUR DEAL</h3>
        <p className={styles.featureDescription}>
          Nous vous garantissons le meilleur deal à travers des mises à jour de prix et prestations régulières.
        </p>
      </div>
      <div className={styles.featureItem}>
        {/* <img src="/icons/handshake.svg" alt="Meilleure Expérience" className={styles.featureIcon} /> */}
        <i className={styles.featureIcon + ' fa fa-handshake'}></i>
        <h3 className={styles.featureTitle}>MEILLEURE EXPÉRIENCE</h3>
        <p className={styles.featureDescription}>
          Chaque seconde, nous comparons des milliers d’offres des meilleures marques afin que vous puissiez toujours bénéficier des meilleures offres au Maroc.
        </p>
      </div>
    </div>
  );
};

export default Features;

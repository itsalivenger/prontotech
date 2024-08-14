import styles from '../../assets/styles/map.module.css';

function Map() {
    return (
        <div className={styles["map-container"] + " container"}>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54348.95898629688!2d-8.004819154956055!3d31.639053927571737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1721680338593!5m2!1sfr!2sma" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Map;
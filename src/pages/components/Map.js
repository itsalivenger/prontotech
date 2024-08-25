import styles from '../../assets/styles/map.module.css';

function Map() {
    return (
        <div className={styles["map-container"] + " container"}>
            <iframe title='ProntoTech Position In Agadir Souk L HAD' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2451.544394325103!2d-9.580559582357678!3d30.41230810762395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI0JzQ3LjMiTiA5wrAzNCc0NS4zIlc!5e0!3m2!1sfr!2sma!4v1724421912883!5m2!1sfr!2sma" width="400" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Map;
import styles from "../../assets/styles/backgroundToggler.module.css";

function BackgroundToggler({ toggle, toggled }) {
    return (
        <div onClick={toggle} className={styles.backgroundToggler + ' ' + (toggled ? styles.open : '')}>
            
        </div>
    );
}

export default BackgroundToggler;
import styles from "../../assets/styles/backgroundToggler.module.css";

function BackgroundToggler({ handleToggle, toggled, transparent = false, className = '' }) {
    return (
        <div onClick={handleToggle} className={`${className} ${styles.backgroundToggler} 
        ${(toggled ? styles.open : '')} 
        ${(transparent ? styles.transparent : '')}`}>
            
        </div>
    );
}

export default BackgroundToggler;
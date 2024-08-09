import styles from '../../assets/styles/backgroundImg.module.css'

function BackgroundImg({ url }) {
    return (
        <div className={styles.backgroundImageContainer} >
            <img src={url} alt="Background" className={styles.backgroundImage} />
        </div >
    );
}

export default BackgroundImg;
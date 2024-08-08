import styles from '../../assets/styles/sectionTitle.module.css';

function SectionTitle({title}) {
    return (
        <div className={styles.sectionTitleContainer + " container"}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.underline}></div>
        </div>
    );
}

export default SectionTitle;
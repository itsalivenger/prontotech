import styles from "../../assets/styles/catalogContent.module.css"
import { Link } from "react-router-dom";

const sections = [
    {
        title: "Ordinateurs",
        img: "./images/catalogLaptop.jpg",
        qty: 23
    },
    {
        title: "Desktop",
        img: "./images/catalogDesktop.jpg",
        qty: 23
    },
    {
        title: "Portables",
        img: "./images/catalogPhone.jpg",
        qty: 23
    },
    {
        title: "Accessoires",
        img: "./images/catalogMouse.jpg",
        qty: 23
    },
    {
        title: "Imprimantes",
        img: "./images/catalogPrinter.jpg",
        qty: 23
    }
]

function CatalogContent() {
    return (
        <div className={styles.categoriesGrid}>
            {sections.map((section, index) => (
                <CategoryBox
                    image={section.img}
                    title={section.title}
                    key={index}
                    quantity={section.qty} />
            ))}
        </div>
    );
}

const CategoryBox = ({ image, title, quantity }) => {
    return (
        <div className={styles.categoryBox}>
            <Link to={`/shop/${title.toLowerCase()}`}>
                <img src={image} alt={title} className={styles.categoryImage} />
                <div className={styles.categoryTitle}>{title}</div>
                <div className={styles.categoryOverlay}>
                    <span>{quantity} products</span>
                </div>
            </Link>
        </div>
    );
};


export default CatalogContent;
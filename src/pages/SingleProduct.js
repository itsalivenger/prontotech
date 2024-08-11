import { useEffect, useState } from 'react';
import styles from '../assets/styles/product_preview.module.css';
import SectionTitle from './components/SectionTitle'
import TabComponent from './components/TabsContent';
import Carousel from './components/Carousel';
import ProntoTechBtn from './components/ProntoTechButton';
import Breadcrumb from './components/BreadCrumb';


const testos = {
    title: 'HP Elite Desk 800 G2 I7-6GN 8G/500HDD',
    brand: 'HP',
    model: '7400 FEQ DELL',
    reference: '800 G2',
    specifications: "Produit puissant de haute gamme",
    description: "hada wahd pc daa3r fih bf ta3 hwayej o fih bzf t ram o l3ibat",
    stock: '10',
    price: '2200,00',
    images: ["./images/pc.jpg", "./images/pc2.jpg", "./images/pc3.jpg"] // Replace with actual images
};


const ProductComponent = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [product] = useState(testos)
    const [currentImage, setCurrentImage] = useState(product.images[0]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // const product = await api('/product:id', "GET", null);
        // setProduct(product)
        console.log("product");
    }, [])

    const addToCompare = () => { }
    const addToWishlist = () => { }

    const addToCart = () => {
        // api('/cart', "POST", {type: 'addToCart', {product, quantity}})

        // modal box toggle "product added successfully"
        alert("product added to cart simulation")
    }

    const openModal = (image) => {
        setCurrentImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => setModalIsOpen(false);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const breadcrumbList = ["Home",
        <>
            <span className={'fa fa-store'}></span> &nbsp; Shop
        </>,
        <>
            <span className={'fa fa-eye'}></span> &nbsp; Preview Product
        </>, product.title];
    return (
        <div>
            <Breadcrumb items={breadcrumbList} />
            <SectionTitle title={"Preview Product:"} />
            <div className={styles.productContainer}>
                <div className={styles.imageSection}>
                    <div className={styles.mainImageContainer}>
                        <img
                            src={currentImage}
                            alt="Product"
                            className={styles.mainImage}
                            onClick={() => openModal(currentImage)}
                        />
                        <div className={styles.zoomIcon} onClick={() => openModal(currentImage)}>🔍</div>
                    </div>
                    <div className={styles.thumbnailContainer}>
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`${styles.thumbnail} ${currentImage === image ? styles.activeThumbnail : ''}`}
                                onClick={() => setCurrentImage(image)}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.detailsSection}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <hr className={styles.titleUnderline} />
                    <ul>
                        <li className={styles.brand + " " + styles.productsProps}><span className={styles.productPropTitle}>Marque:</span> {product.brand}</li>
                        <li className={styles.model + " " + styles.productsProps}><span className={styles.productPropTitle}>Modèle:</span> {product.model}</li>
                        <li className={styles.reference + " " + styles.productsProps}><span className={styles.productPropTitle}>Référence:</span> {product.reference}</li>
                        <li className={styles.description + " " + styles.productsProps}><span className={styles.productPropTitle}>description:</span> {product.description}</li>
                        <li className={styles.specifications + " " + styles.productsProps}><span className={styles.productPropTitle}>Spécifications:</span> {product.specifications}</li>
                        <li className={styles.stock + " " + styles.productsProps}><span className={styles.productPropTitle}>Disponible en stock: </span>{product.stock} Produits</li>
                    </ul>
                    <p className={styles.price}>{product.price} MAD</p>
                    <div className={styles.quantityContainer}>
                        <button onClick={decreaseQuantity} className={styles.quantityButton}>-</button>
                        <span className={styles.quantity}>{quantity}</span>
                        <button onClick={increaseQuantity} className={styles.quantityButton}>+</button>
                    </div>
                    <div>
                        <ProntoTechBtn text={"Ajouter Au Panier"} onClick={addToCart} className={styles.addToCart} icon={"fa fa-plus"} />
                    </div>
                    <div className={styles.wishlistCompare}>
                        <button onClick={addToWishlist} className={styles.wishlistButton}>Ajouter Souhaits &nbsp; <span className='fa fa-heart'></span></button>
                        <button onClick={addToCompare} className={styles.compareButton}>Ajouter Comparer &nbsp; <span className='fa fa-list'></span></button>
                    </div>
                    <div className={styles.additionalInfo}>
                        <div className={styles.infoBlock}>
                            <div className={styles.icon}>🚚</div>
                            <div className={styles.infoText}>
                                <p>Livraison rapide sur tout le Maroc à domicile</p>
                                <p>ou sur votre lieu de travail (40 DH TTC)</p>
                            </div>
                        </div>
                        <div className={styles.infoBlock}>
                            <div className={styles.icon}>🏠</div>
                            <div className={styles.infoText}>
                                <p>Retrait immédiat à Marrakech</p>
                                <p>(Massira 1 - Bloc A - 382)</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socialMedia}>
                        <button className={styles.shareButton + ` ${styles.facebook}`}> <span className='fa fa-facebook'></span> &nbsp; Share</button>
                        <button className={styles.shareButton + ` ${styles.twitter}`}> <span className='fa fa-twitter'></span> &nbsp; Share</button>
                    </div>
                </div>
                {modalIsOpen && (
                    <div className={styles.modalOverlay} onClick={closeModal}>
                        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                            <button onClick={closeModal} className={styles.closeButton}>X</button>
                            <img src={currentImage} alt="Product" className={styles.modalImage} />
                        </div>
                    </div>
                )}
            </div>
            <SectionTitle title={"Informations Supplementaires"} />
            <TabComponent />
            <Carousel />
        </div>
    );
};

export default ProductComponent;

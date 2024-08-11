import { Link } from "react-router-dom";
import styles from "../assets/styles/wishlist.module.css";
import Breadcrumb from "./components/BreadCrumb";
import SectionTitle from "./components/SectionTitle";
import Carousel from "./components/Carousel";


const wishlistData = [
  {
    _id: 22,
    image: './images/pc.jpg',
    name: 'Logitech G213 Prodigy RGB Clavier Gamer (AZERTY)',
    currentPrice: '539Dh',
    oldPrice: '599Dh',
    stock: 'En stock',
    description: "This is some kind of a product description that is also know as a placeholder for the description."
  },
  {
    _id: 21,
    image: './images/pc.jpg',
    name: 'Clavier Sans Fil avec pavé tactile intégré Logitech K400 Plus (AZERTY, Français)',
    currentPrice: '349Dh',
    stock: 'En stock',
    description: "This is some kind of a product description that is also know as a placeholder for the description."
  },
  {
    _id: 1,
    image: './images/pc.jpg',
    name: 'Apple Magic Keyboard avec pavé numérique - QWERTY (A1843)',
    currentPrice: '1290Dh',
    oldPrice: '1590Dh',
    stock: 'En stock',
    description: "This is some kind of a product description that is also know as a placeholder for the description."
  }
];

const WishlistItem = ({ _id, image, name, currentPrice, oldPrice, stock, description }) => (
  <div className={styles.wishlistItem}>
    <div className={styles.itemImage}>
      <img src={image} alt={name} />
    </div>
    <div className={styles.itemDetails}>
      <Link to={`/product:${_id}`} className={styles.itemName}>{name}</Link>
      <p className={styles.description}>{description}</p>
      <p className={styles.itemPrice}>
        {oldPrice ?
          <>
            <span className={styles.currentPrice}>{currentPrice}</span>
            <span className={styles.oldPrice}>{oldPrice}</span>
          </> :
          <span className={styles.currentPrice}>{currentPrice}</span>
        }
      </p>
      <p className={styles.itemStock}>{stock}</p>
      <div className={styles.itemActions}>
        <button className={styles.addToCart}>Add to Cart</button>
        <button className={styles.removeItem}>Remove</button>
      </div>
    </div>
  </div>
);

const Wishlist = () => (
  <div className={styles.wishlist}>
    <Breadcrumb items={["Home", <><span className={"fa fa-heart"}></span> Wishlist</>]} />
    <SectionTitle title={<>Wishlist &nbsp; <span className={styles.heart + " fa fa-heart"}></span></>} />
    <p>
      A wishlist allows you to save and organize products you're interested in, 
      making it easier to keep track of items you might want to purchase later. 
      You can quickly access your saved items, compare them, and decide what to 
      buy when you're ready. Plus, sharing your wishlist with friends and family
      makes gift-giving occasions more enjoyable and straightforward.</p>
    {wishlistData.length ? wishlistData.map((item, index) => (
      <WishlistItem
        key={index}
        image={item.image}
        name={item.name}
        currentPrice={item.currentPrice}
        oldPrice={item.oldPrice}
        stock={item.stock}
        description={item.description}
      />
    )) : <h1>There are no items in the wishlist :(  </h1>}
    <SectionTitle title={'Most Sold Items'} />
    <Carousel />
  </div>
);

export default Wishlist;

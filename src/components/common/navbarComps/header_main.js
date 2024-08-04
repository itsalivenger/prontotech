import { useEffect, useState } from "react";
import styles from "../../../assets/styles/header_main.module.css"
import api from "../../../services/api";
import { Link } from "react-router-dom";


function HeaderMain() {
    const [searchProducts, setSearchProducts] = useState('');
    const [searchCategory, setSearchCategory] = useState('All Categories');
    const [cartCount] = useState(0);
    const [cartTotal] = useState(0);

    useEffect(() => {
        api('cart', 'POST', { type: 'cart' })
    }, [])
    
    function handleSearchSubmit() {
        api('search', 'POST', { type: 'search', searchProducts, searchCategory })
    }
    return (
        <div className={styles.header_main}>
            <div className={"container"}>
                <div className={"row"}>

                    <div className={"col-lg-2 col-sm-3 col-3 order-1"}>
                        <div className={styles.logo_container}>
                            <div className={styles.logo}><a href="gegl">OneTech</a></div>
                        </div>
                    </div>

                    <div className={"col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right"}>
                        <div className={styles.header_search}>
                            <div className={styles.header_search_content}>
                                <div className={styles.header_search_form_container}>
                                    <input type="text" className={styles.header_search_input} placeholder="Search for products..." value={searchProducts} onChange={(e) => setSearchProducts(e.target.value)} />
                                    <div className={"custom_dropdown"}>
                                        <div className={"custom_dropdown_list"}>
                                            <span className={"custom_dropdown_placeholder clc"}>All Categories</span>
                                            <i className="fa fa-chevron-down"></i>
                                            <ul onClick={(e) => setSearchCategory(e.target.innerText)} className={"custom_list clc"}>
                                                <li><a className="clc" href="gegl">All Categories</a></li>
                                                <li><a className="clc" href="gegl">Computers</a></li>
                                                <li><a className="clc" href="gegl">Laptops</a></li>
                                                <li><a className="clc" href="gegl">Cameras</a></li>
                                                <li><a className="clc" href="gegl">Hardware</a></li>
                                                <li><a className="clc" href="gegl">Smartphones</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="submit" onClick={handleSearchSubmit} className={styles.header_search_button + " " + styles.trans_300} value="Submit"><img src="images/search.png" alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right"}>
                        <div className={styles.wishlist_cart + " d-flex flex-row align-items-center justify-content-end"}>
                            <Link to={'/wishlist'} className={styles.wishlist + " d-flex flex-row align-items-center justify-content-end"}>
                                <div className={styles.wishlist_icon}><img src="images/heart.png" alt="" /></div>
                                <div className={styles.wishlist_content}>
                                    <div className={styles.wishlist_text}>Wishlist</div>
                                    <div className={styles.wishlist_count}>115</div>
                                </div>
                            </Link>

                            <div className={"cart"}>
                                <Link to={'/cart'} className={"cart_container d-flex flex-row align-items-center justify-content-end"}>
                                    <div className={styles.cart_icon}>
                                        <img src="images/cart.png" alt="" />
                                        <div className={styles.cart_count}><span>{cartCount}</span></div>
                                    </div>
                                    <div className={styles.cart_content}>
                                        <div className={styles.cart_text}><span>Cart</span></div>
                                        <div className={styles.cart_price}>{cartTotal} DH</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMain;
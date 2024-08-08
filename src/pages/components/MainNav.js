import { Link } from "react-router-dom";
import styles from "../../assets/styles/mainNav.module.css"

function MainNav() {
    return (
        <nav className={styles.main_nav}>
            <div className="container">
                <div className="row">
                    <div className={styles.columnContainer}>

                        <div className={styles.main_nav_content + " d-flex flex-row"}>


                            <div className={styles.cat_menu_container}>
                                <div className={styles.cat_menu_title + " d-flex flex-row align-items-center justify-content-start"}>
                                    <div className={styles.cat_burger}><span></span><span></span><span></span></div>
                                    <div className={styles.cat_menu_text}>categories</div>
                                </div>

                                <ul className={styles.cat_menu}>
                                    <li><a href="gegl">Computers & Laptops <i className="fa fa-chevron-right ml-auto"></i></a></li>
                                    <li><a href="gegl">Cameras & Photos<i className="fa fa-chevron-right"></i></a></li>
                                    <li className={styles.hassubs}>
                                        <a href="gegl">Hardware<i className="fa fa-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="gegl">Menu Item<i className="fa fa-chevron-right"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-chevron-right"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-chevron-right"></i></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="gegl">Smartphones & Tablets<i className="fa fa-chevron-right"></i></a></li>
                                    <li><a href="gegl">TV & Audio<i className="fa fa-chevron-right"></i></a></li>
                                    <li><a href="gegl">Gadgets<i className="fa fa-chevron-right"></i></a></li>
                                    <li><a href="gegl">Car Electronics<i className="fa fa-chevron-right"></i></a></li>
                                    <li><a href="gegl">Video Games & Consoles<i className="fa fa-chevron-right"></i></a></li>
                                    <li><a href="gegl">Accessories<i className="fa fa-chevron-right"></i></a></li>
                                </ul>
                            </div>


                            <div className={styles.main_nav_menu + " ml-auto"}>
                                <ul className={styles.standard_dropdown + " " + styles.main_nav_dropdown}>
                                    <li><a href="/">Home<i className="fa fa-chevron-down"></i></a></li>
                                    <li className={styles.hassubs}>
                                        <a href="gegl">Super Deals<i className="fa fa-chevron-down"></i></a>
                                        <ul>
                                            <li>
                                                <a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a>
                                                <ul>
                                                    <li><a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a></li>
                                                    <li><a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a></li>
                                                    <li><a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li className={styles.hassubs}>
                                        <a href="gegl">Featured Brands<i className="fa fa-chevron-down"></i></a>
                                        <ul>
                                            <li>
                                                <a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a>
                                                <ul>
                                                    <li><a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a></li>
                                                    <li><a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a></li>
                                                    <li><a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-chevron-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li className={styles.hassubs}>
                                        <a href="gegl">Pages<i className="fa fa-chevron-down"></i></a>
                                        <ul>
                                            <li><a href="shop.html">Shop<i className="fa fa-chevron-down"></i></a></li>
                                            <li><Link to="/single-product">Product<i className="fa fa-chevron-down"></i></Link></li>
                                            <li><a href="blog.html">Blog<i className="fa fa-chevron-down"></i></a></li>
                                            <li><a href="blog_single.html">Blog Post<i className="fa fa-chevron-down"></i></a></li>
                                            <li><a href="regular.html">Regular Post<i className="fa fa-chevron-down"></i></a></li>
                                            <li><Link to="/cart">Cart<i className="fa fa-chevron-down"></i></Link></li>
                                            <li><Link to="/contact">Contact<i className="fa fa-chevron-down"></i></Link></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">Blog<i className="fa fa-chevron-down"></i></a></li>
                                    <li><a href="contact.html">Contact<i className="fa fa-chevron-down"></i></a></li>
                                </ul>
                            </div>


                            <div className={styles.menu_trigger_container + " ml-auto"}>
                                <div className={styles.menu_trigger + " d-flex flex-row align-items-center justify-content-end"}>
                                    <div className={styles.menu_burger}>
                                        <div className={styles.menu_trigger_text}>menu</div>
                                        <div className={styles.cat_burger + " " + styles.menu_burger_inner}><span></span><span></span><span></span></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MainNav;
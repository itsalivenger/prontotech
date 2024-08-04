import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import TopBar from "./navbarComps/top_bar";
import HeaderMain from "./navbarComps/header_main";




// MAIN NAV FIHA HUGE PROBLEM F WIDTH HWA LI KAYCAUSI L GAP FLIMEN T
function Navbar({ contactInfo: { contactEmail, contactPhone } }) {
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
        <header className="header">
            <TopBar contactInfo={ { contactEmail, contactPhone } } />

            <HeaderMain />

            <nav className="main_nav">
                <div className="container">
                    <div className="row">
                        <div className="columnContainer">

                            <div className="main_nav_content d-flex flex-row">


                                <div className="cat_menu_container">
                                    <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                        <div className="cat_burger"><span></span><span></span><span></span></div>
                                        <div className="cat_menu_text">categories</div>
                                    </div>

                                    <ul className="cat_menu">
                                        <li><a href="gegl">Computers & Laptops <i className="fa fa-chevron-right ml-auto"></i></a></li>
                                        <li><a href="gegl">Cameras & Photos<i className="fa fa-chevron-right"></i></a></li>
                                        <li className="hassubs">
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


                                <div className="main_nav_menu ml-auto">
                                    <ul className="standard_dropdown main_nav_dropdown">
                                        <li><a href="/">Home<i className="fa fa-chevron-down"></i></a></li>
                                        <li className="hassubs">
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
                                        <li className="hassubs">
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
                                        <li className="hassubs">
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


                                <div className="menu_trigger_container ml-auto">
                                    <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                        <div className="menu_burger">
                                            <div className="menu_trigger_text">menu</div>
                                            <div className="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="page_menu">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="page_menu_content">

                                <div className="page_menu_search">
                                    <input type="text" className="page_menu_search_input" placeholder="Search for products..." value={searchProducts} onChange={(e) => setSearchProducts(e.target.value)} />
                                </div>
                                <ul className="page_menu_nav">
                                    <li className="page_menu_item has-children">
                                        <a href="gegl">Language<i className="fa fa-angle-down"></i></a>
                                        <ul className="page_menu_selection">
                                            <li><a href="gegl">English<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">French<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">Arabic<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">Japanese<i className="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li className="page_menu_item has-children">
                                        <a href="gegl">Currency<i className="fa fa-angle-down"></i></a>
                                        <ul className="page_menu_selection">
                                            <li><a href="gegl">US Dollar<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">EUR Euro<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">GBP British Pound<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">JPY Japanese Yen<i className="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li className="page_menu_item">
                                        <a href="gegl">Home<i className="fa fa-angle-down"></i></a>
                                    </li>
                                    <li className="page_menu_item has-children">
                                        <a href="gegl">Super Deals<i className="fa fa-angle-down"></i></a>
                                        <ul className="page_menu_selection">
                                            <li><a href="gegl">Super Deals<i className="fa fa-angle-down"></i></a></li>
                                            <li className="page_menu_item has-children">
                                                <a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a>
                                                <ul className="page_menu_selection">
                                                    <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                                    <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                                    <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                                    <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li className="page_menu_item has-children">
                                        <a href="gegl">Featured Brands<i className="fa fa-angle-down"></i></a>
                                        <ul className="page_menu_selection">
                                            <li><a href="gegl">Featured Brands<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li className="page_menu_item has-children">
                                        <a href="gegl">Trending Styles<i className="fa fa-angle-down"></i></a>
                                        <ul className="page_menu_selection">
                                            <li><a href="gegl">Trending Styles<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                            <li><a href="gegl">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li className="page_menu_item"><a href="blog.html">blog<i className="fa fa-angle-down"></i></a></li>
                                    <li className="page_menu_item"><a href="contact.html">contact<i className="fa fa-angle-down"></i></a></li>
                                </ul>

                                <div className="menu_contact">
                                    <div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/phone_white.png" alt="" /></div><a href={`tel:${contactPhone}`}>Give Us A Call!</a></div>
                                    <div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/mail_white.png" alt="" /></div>
                                        <a href="mailto:example@example.com?subject=Subject%20Here&body=Body%20content%20here"><span className="__cf_email__" data-cfemail="5f393e2c2b2c3e333a2c1f38323e3633713c3032">{contactEmail}</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}



export default Navbar;
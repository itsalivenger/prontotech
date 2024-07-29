import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

function Navbar({ contactInfo: { contactEmail, contactPhone } }) {
    const [searchProducts, setSearchProducts] = useState('');
    const [searchCategory, setSearchCategory] = useState('All Categories');
    const [cartCount, setcartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        api('cart', 'POST', { type: 'cartCount' })
    }, [])
    
    function handleSearchSubmit() {
        api('search', 'POST', { type: 'search', searchProducts, searchCategory })
    }


    return (
        <header className="header">
            <div className="top_bar">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-row">
                            <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/phone.png" alt="" /></div><a href={`tel:${contactPhone}`}>Give Us A Call</a></div>
                            <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="images/mail.png" alt="" /></div><a href={`mailto:${contactEmail}?subject=Subject%20Here&body=Body%20content%20here`}><span className="__cf_email__" data-cfemail="5f393e2c2b2c3e333a2c1f38323e3633713c3032"></span>Email Us</a></div>
                            <div className="top_bar_content ml-auto">
                                <div className="top_bar_menu">
                                    <ul className="standard_dropdown top_bar_dropdown">
                                        <li>
                                            <Link href="#">English<i className="fa fa-chevron-down"></i></Link>
                                            <ul>
                                                <li><Link to="#">French</Link></li>
                                                <li><Link to="#">Arabic</Link></li>
                                                <li><Link to="#">Spanish</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="#">$ US dollar<i className="fa fa-chevron-down"></i></Link>
                                            <ul>
                                                <li><Link href="#">EUR Euro</Link></li>
                                                <li><Link href="#">GBP British Pound</Link></li>
                                                <li><Link href="#">JPY Japanese Yen</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="top_bar_user">
                                    <div className="user_icon"><img src="images/user.svg" alt="" /></div>
                                    <div><Link to="signup">Register</Link></div>
                                    <div><Link to="login">Sign in</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_main">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-2 col-sm-3 col-3 order-1">
                            <div className="logo_container">
                                <div className="logo"><a href="gegl">OneTech</a></div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                            <div className="header_search">
                                <div className="header_search_content">
                                    <div className="header_search_form_container">
                                        <input type="text" className="header_search_input" placeholder="Search for products..." value={searchProducts} onChange={(e) => setSearchProducts(e.target.value)} />
                                        <div className="custom_dropdown">
                                            <div className="custom_dropdown_list">
                                                <span className="custom_dropdown_placeholder clc">All Categories</span>
                                                <i className="fa fa-chevron-down"></i>
                                                <ul onClick={(e) => setSearchCategory(e.target.innerText)} className="custom_list clc">
                                                    <li><a className="clc" href="gegl">All Categories</a></li>
                                                    <li><a className="clc" href="gegl">Computers</a></li>
                                                    <li><a className="clc" href="gegl">Laptops</a></li>
                                                    <li><a className="clc" href="gegl">Cameras</a></li>
                                                    <li><a className="clc" href="gegl">Hardware</a></li>
                                                    <li><a className="clc" href="gegl">Smartphones</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button type="submit" onClick={handleSearchSubmit} className="header_search_button trans_300" value="Submit"><img src="images/search.png" alt="" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                            <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                <Link to={'/wishlist'} className="wishlist d-flex flex-row align-items-center justify-content-end">
                                    <div className="wishlist_icon"><img src="images/heart.png" alt="" /></div>
                                    <div className="wishlist_content">
                                        <div className="wishlist_text"><a href="gegl">Wishlist</a></div>
                                        <div className="wishlist_count">115</div>
                                    </div>
                                </Link>

                                <div className="cart">
                                    <Link to={'/cart'} className="cart_container d-flex flex-row align-items-center justify-content-end">
                                        <div className="cart_icon">
                                            <img src="images/cart.png" alt="" />
                                            <div className="cart_count"><span>{cartCount}</span></div>
                                        </div>
                                        <div className="cart_content">
                                            <div className="cart_text"><span to="/cart">Cart</span></div>
                                            <div className="cart_price">{cartTotal} DH</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
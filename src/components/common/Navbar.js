import { useEffect, useState } from "react";
import api from "../../services/api";
import TopBar from "./navbarComps/top_bar";
import HeaderMain from "./navbarComps/header_main";
import MiniCart from '../../pages/components/MiniCart';
import cartItems from "../../assets/styles/temp"
import MainNav from "../../pages/components/MainNav";

// MAIN NAV FIHA HUGE PROBLEM F WIDTH HWA LI KAYCAUSI L GAP FLIMEN T
function Navbar({ contactInfo: { contactEmail, contactPhone, socialMedia } }) {
    // const [searchProducts] = useState('');
    // const [searchCategory] = useState('All Categories');
    // const [cartCount] = useState(0);
    // const [cartTotal] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        api('cart', 'POST', { type: 'cart' })
    }, [])

    // function handleSearchSubmit() {
    //     api('search', 'POST', { type: 'search', searchProducts, searchCategory })
    // }

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };


    return (
        <header className="header">
            <TopBar contactInfo={{ contactEmail, contactPhone }} />

            <HeaderMain toggleCart={toggleCart} />
            <MiniCart isOpen={isOpen} cartItems={cartItems} toggleCart={toggleCart} />

            <MainNav socialMedia={socialMedia} />

            {/* <div className="page_menu">
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
            </div> */}
        </header>
    );
}



export default Navbar;
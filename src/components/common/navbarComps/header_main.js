import { useEffect, useState } from "react";
import styles from "../../../assets/styles/header_main.module.css"
import api from "../../../services/api";
import { Link } from "react-router-dom";
// api('cart', 'POST', { type: 'cart' });


const HeaderMain = ({ toggleCart }) => {
    const [searchProducts, setSearchProducts] = useState('');
    const [searchCategory, setSearchCategory] = useState('All Categories');
    const [cartCount] = useState(0);
    // const [cartTotal] = useState(0);
    const [WishlistCount] = useState(0);

    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSentence, setCurrentSentence] = useState(0)
    const { text, delay, infinite } = {
        text: ["Search for products...",
            "Looking for something specific?...",
            "Type a keyword..."],
        delay: 100,
        infinite: true
    }

    useEffect(() => {
        let timeout;

        if (currentIndex <= text[currentSentence].length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentSentence][currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

        } else if (infinite) {
            setCurrentSentence(prev => prev + 1 >= text.length ? 0 : prev + 1);
            setCurrentIndex(0);
            setCurrentText('');
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);


    function handleSearchSubmit() {
        api('search', 'POST', { type: 'search', searchProducts, searchCategory })
    }
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link to={"/"}>
                    <img
                        src="./images/logos/prontoLogo.png"
                        alt="Logo"
                        className={styles.logo}
                    />
                </Link>
            </div>
            <div className={styles.searchContainer}>
                <SearchBar currentText={currentText} handleSearchSubmit={handleSearchSubmit} />
            </div>
            <div className={styles.floatingImagesContainer}>
                <div onClick={toggleCart}>
                    <img
                        src="./images/icons/cart_new.png"
                        alt="Floating 1"
                        className={styles.floatingImage}
                    />
                    <span className={styles.iconCount + ' text'}>{cartCount}</span>
                </div>
                <div>
                    <Link to={'/wishlist'}>
                        <img
                            src="./images/icons/heart_new.png"
                            alt="Floating 2"
                            className={styles.floatingImage}
                        />
                        <span className={styles.iconCount}>{WishlistCount}</span>
                    </Link>
                </div>
                <div>
                    <Link to={'/compare'}>
                        <img
                            src="./images/icons/compare_new.png"
                            alt="Floating 2"
                            className={styles.floatingImage}
                        />
                        <span className={styles.iconCount}>0</span>
                    </Link>
                </div>
                <div>
                    <Link to={'/profile'}>
                        <img
                            src="./images/icons/user_new.png"
                            alt="Floating 2"
                            className={styles.floatingImage}
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
};



const SearchBar = ({ currentText, handleSearchSubmit }) => {
    const [selectedOption, setSelectedOption] = useState('Categories');
    const [isOpen, setIsOpen] = useState(false);

    const options = ['Categories', 'Ordinateurs', 'Telephones', 'Headphones', 'Composants', 'Promotion'];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className={styles.searchBar}>
            <div className={styles.dropdown}>
                <button className={styles.dropdownToggle} onClick={toggleDropdown}>
                    <span className={styles.selectedOption}>
                        <span>{selectedOption}</span>
                        <span className={styles.arrowDown + ' fa fa-chevron-down'}></span>
                    </span>
                    <span className={styles.bars}>
                        <span className={'fa fa-bars'}></span>
                    </span>
                </button>
                <ul className={styles.dropdownMenu + ' ' + (isOpen ? styles.toggleDropdown : '')}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={styles.dropdownItem}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
            <input
                type="text"
                placeholder={currentText}
                className={styles.searchInput}
            />
            <button className={styles.searchButton}>
                <span className="fa fa-search"></span>
            </button>
        </div>
    );
};

export default HeaderMain;



// function HeaderMain({ toggleCart }) {
//     const [searchProducts, setSearchProducts] = useState('');
//     const [searchCategory, setSearchCategory] = useState('All Categories');
//     const [cartCount] = useState(0);
//     const [cartTotal] = useState(0);

//     const [currentText, setCurrentText] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [currentSentence, setCurrentSentence] = useState(0)
//     const { text, delay, infinite } = {
//         text: ["Search for products...",
//             "Looking for something specific?...",
//             "Type a keyword..."],
//         delay: 100,
//         infinite: true
//     }

//     useEffect(() => {
//         let timeout;

//         if (currentIndex <= text[currentSentence].length) {
//             timeout = setTimeout(() => {
//                 setCurrentText(prevText => prevText + text[currentSentence][currentIndex]);
//                 setCurrentIndex(prevIndex => prevIndex + 1);
//             }, delay);

//         } else if (infinite) { // ADD THIS CHECK
//             setCurrentSentence(prev => prev + 1 >= text.length ? 0 : prev + 1);
//             setCurrentIndex(0);
//             setCurrentText('');
//         }

//         return () => clearTimeout(timeout);
//     }, [currentIndex, delay, infinite, text]);


//     function handleSearchSubmit() {
//         api('search', 'POST', { type: 'search', searchProducts, searchCategory })
//     }
//     return (
//         <div className={styles.header_main}>
//             <div className={"container"}>
//                 <div className={"row"}>

//                     <div className={"col-lg-2 col-sm-3 col-3 order-1"}>
//                         <div className={styles.logo_container}>
//                             <div className={styles.logo}><Link to={'/'}><img alt="Logo" className="img img-fluid" src={'./images/prontoLogo.png'} /></Link></div>
//                         </div>
//                     </div>

//                     <div className={"col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right"}>
//                         <div className={styles.header_search}>
//                             <div className={styles.header_search_content}>
//                                 <div className={styles.header_search_form_container}>
//                                     <input type="text"

//                                         onFocus={() => { }}
//                                         onBlur={() => {

//                                         }}
//                                         placeholder={currentText}



//                                         className={styles.header_search_input} value={searchProducts} onChange={(e) => setSearchProducts(e.target.value)} />
//                                     <div className={"custom_dropdown"}>
//                                         <div className={"custom_dropdown_list"}>
//                                             <span className={"custom_dropdown_placeholder clc"}>All Categories</span>
//                                             <i className="fa fa-chevron-down"></i>
//                                             <ul onClick={(e) => setSearchCategory(e.target.innerText)} className={"custom_list clc"}>
//                                                 <li><a className="clc" href="gegl">All Categories</a></li>
//                                                 <li><a className="clc" href="gegl">Computers</a></li>
//                                                 <li><a className="clc" href="gegl">Laptops</a></li>
//                                                 <li><a className="clc" href="gegl">Cameras</a></li>
//                                                 <li><a className="clc" href="gegl">Hardware</a></li>
//                                                 <li><a className="clc" href="gegl">Smartphones</a></li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                     <button type="submit" onClick={handleSearchSubmit} className={styles.header_search_button + " " + styles.trans_300} value="Submit"><img src="images/search.png" alt="Search icon" /></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className={"col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right"}>
//                         <div className={styles.wishlist_cart + " d-flex flex-row align-items-center justify-content-end"}>
//                             <Link to={'/wishlist'} className={styles.wishlist + " d-flex flex-row align-items-center justify-content-end " + styles.navIcons}>
//                                 <div className={styles.wishlist_icon}><img src="images/heart.png" alt="" /></div>
//                                 <div className={styles.wishlist_content}>
//                                     <div className={styles.wishlist_text}>Wishlist</div>
//                                     <div className={styles.wishlist_count}>115</div>
//                                 </div>
//                             </Link>

//                             <Link onClick={toggleCart} className={styles.navIcons}>
//                                 <div className={"cart_container d-flex flex-row align-items-center justify-content-end"}>
//                                     <div className={styles.cart_icon}>
//                                         <img src="images/cart.png" alt="" />
//                                         <div className={styles.cart_count}><span>{cartCount}</span></div>
//                                     </div>
//                                     <div className={styles.cart_content}>
//                                         <div className={styles.cart_text}><span>Cart</span></div>
//                                         <div className={styles.cart_price}>{cartTotal} DH</div>
//                                     </div>
//                                 </div>
//                             </Link>
//                             <Link to={'/compare'} className={" d-flex flex-row align-items-center justify-content-end " + styles.navIcons}>
//                                 <div className={styles.wishlist_icon}><img src="images/icons/compare.png" alt="" /></div>
//                                 <div className={styles.wishlist_content}>
//                                     <div className={styles.wishlist_text}>Compare</div>
//                                     <div className={styles.wishlist_count}>115</div>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HeaderMain;
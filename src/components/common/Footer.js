function Footer({ contactInfo: { contactPhone, address } }) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 footer_col">
                        <div className="footer_column footer_contact">
                            <div className="logo_container">
                                <div className="logo"><a href="gegl">OneTech</a></div>
                            </div>
                            <div className="footer_title">Got Question? Call Us 24/7</div>
                            <div className="footer_phone">{contactPhone}</div>
                            <div className="footer_contact_text">
                                {address}
                            </div>
                            <div className="footer_social">
                                <ul>
                                    <li><a href="gegl"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="gegl"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="gegl"><i className="fab fa-youtube"></i></a></li>
                                    <li><a href="gegl"><i className="fab fa-google"></i></a></li>
                                    <li><a href="gegl"><i className="fab fa-vimeo-v"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 offset-lg-2">
                        <div className="footer_column">
                            <div className="footer_title">Find it Fast</div>
                            <ul className="footer_list">
                                <li><a href="gegl">Computers & Laptops</a></li>
                                <li><a href="gegl">Cameras & Photos</a></li>
                                <li><a href="gegl">Hardware</a></li>
                                <li><a href="gegl">Smartphones & Tablets</a></li>
                                <li><a href="gegl">TV & Audio</a></li>
                            </ul>
                            <div className="footer_subtitle">Gadgets</div>
                            <ul className="footer_list">
                                <li><a href="gegl">Car Electronics</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <div className="footer_column">
                            <ul className="footer_list footer_list_2">
                                <li><a href="gegl">Video Games & Consoles</a></li>
                                <li><a href="gegl">Accessories</a></li>
                                <li><a href="gegl">Cameras & Photos</a></li>
                                <li><a href="gegl">Hardware</a></li>
                                <li><a href="gegl">Computers & Laptops</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <div className="footer_column">
                            <div className="footer_title">Customer Care</div>
                            <ul className="footer_list">
                                <li><a href="gegl">My Account</a></li>
                                <li><a href="gegl">Order Tracking</a></li>
                                <li><a href="gegl">Wish List</a></li>
                                <li><a href="gegl">Customer Services</a></li>
                                <li><a href="gegl">Returns / Exchange</a></li>
                                <li><a href="gegl">FAQs</a></li>
                                <li><a href="gegl">Product Support</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
function Banner1() {
    return (
        <div>
            <div className="banner">
                <div className="banner_background" style={{ backgroundImage: "url(images/banner2.jpg)" }}></div>
                <div className="container fill_height">
                    <div className="row fill_height">
                        <div className="banner_product_image">
                            <img src="images/banner_product.png" alt="" />
                        </div>
                        <div className="col-lg-5 offset-lg-4 fill_height">
                            <div className="banner_content">
                                <h1 className="banner_text">new era of smartphones</h1>
                                <div className="banner_price"><span>530 DH</span>460 DH</div>
                                <div className="banner_product_name">Apple Iphone 6s</div>
                                <div className="button banner_button"><a href="#">Shop Now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner1;
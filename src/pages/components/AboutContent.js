import styles from '../../assets/styles/about.module.css'

function AboutContent() {
    return (
        <section className={styles.aboutSection}>
            <div className="container">
                <div className="row">
                    <div className={styles.contentColumn + " col-lg-6 col-md-12 col-sm-12 order-2"}>
                        <div className={styles.innerColumn}>
                            <div className={styles.secTitle}>
                                <span className={styles.title}>About Pronto Technology</span>
                                <h2>We are Creative Tech Enthusiast working since 2015</h2>
                            </div>
                            <div className={styles.text}>
                                Welcome to Pronto Technology, where innovation meets everyday life.
                                Founded with a passion for cutting-edge technology and a commitment to
                                exceptional customer service, we are your one-stop destination for the
                                latest in PCs, smartphones, headphones, desktops, and screens.
                                Whether you're a tech enthusiast, a professional, or someone looking
                                to upgrade your gadgets, we provide the tools you need to stay connected,
                                productive, and entertained.
                            </div>
                            <div className={styles.text}>
                                At [Your Company Name], we believe in the power of technology to transform lives. Our carefully curated selection of products combines top-tier quality with the latest advancements in the industry, ensuring that you have access to the best devices on the market. From powerful desktops for gaming and work to sleek smartphones that keep you connected on the go, our range is designed to meet the diverse needs of our customers.
                            </div>
                            <div className={styles.btnBox}>
                                <a href="#" className="theme-btn btn-style-one">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageColumn + " col-lg-6 col-md-12 col-sm-12"}>
                        <div className={styles.innerColumn + " wow fadeInLeft"}>
                            <div className={styles.authorDesc}>
                                <h2>Pronto Technology</h2>
                                <span>Leader In Technology.</span>
                            </div>
                            <figure className={styles.image1}><a href="#" className="lightbox-image" data-fancybox="images"><img title="Rahul Kumar Yadav" src="./images/prontoLogo.png" alt="" /></a></figure>

                        </div>
                    </div>

                </div>
                <div className={styles.secTitle}>
                    <span className={styles.title}>Our Future Goal</span>
                    <h2>We want to lead in innovation & Technology</h2>
                </div>
                <div className={styles.text}>
                    We are not just a store; we are a community of tech lovers, innovators, and problem-solvers. Our team of experts is always ready to guide you through your tech journey, offering personalized advice and support to help you make the best choice for your needs. Trust us to bring you the latest innovations, reliable products, and the exceptional service you deserve.
                </div>
                <div className={styles.text}>
                    Explore the future of technology with [Your Company Name]. Join us as we continue to push the boundaries of what's possible, one device at a time.
                </div>
                <div className={styles.text}>
                    Here we are trying to give you all kinds of technical content, whether it is related to designing or functionality. We are creating content on a lot of languages and will continue to make it free of cost even if you use it without any problem. Which is a very important thing.
                </div>
                <div className={styles.text}>
                    In the end, I would say keep visiting our website and enjoy the quality content.
                </div>
            </div>
        </section>
    );
}

export default AboutContent;
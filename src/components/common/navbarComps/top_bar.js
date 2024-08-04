import { Link } from 'react-router-dom';
import styles from '../../../assets/styles/top_bar.module.css'

function TopBar({ contactInfo: { contactEmail, contactPhone } }) {
    return (
        <div className={styles.top_bar}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col d-flex flex-row"}>
                        <div className={styles.top_bar_contact_item}><div className={styles.top_bar_icon}><img src="images/phone.png" alt="" /></div><a href={`tel:${contactPhone}`}>Give Us A Call</a></div>
                        <div className={styles.top_bar_contact_item}><div className={styles.top_bar_icon}><img src="images/mail.png" alt="" /></div><a href={`mailto:${contactEmail}?subject=Subject%20Here&body=Body%20content%20here`}><span className="__cf_email__" data-cfemail="5f393e2c2b2c3e333a2c1f38323e3633713c3032"></span>Email Us</a></div>
                        <div className={"ml-auto"}>
                            <div className={styles.top_bar_menu}>
                                <ul className={styles.standard_dropdown + " " + styles.top_bar_dropdown}>
                                    <li>
                                        <Link href="#">English<i className="fa fa-chevron-down"></i></Link>
                                        <ul>
                                            <li><Link to="#">French</Link></li>
                                            <li><Link to="#">Arabic</Link></li>
                                            <li><Link to="#">Spanish</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="#">Mad DH<i className="fa fa-chevron-down"></i></Link>
                                        <ul>
                                            <li><Link href="#">EUR Euro</Link></li>
                                            <li><Link href="#">GBP British Pound</Link></li>
                                            <li><Link href="#">JPY Japanese Yen</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.top_bar_user}>
                                <div className={styles.user_icon}><img src="images/user.svg" alt="" /></div>
                                <div><Link to="signup">Register</Link></div>
                                <div><Link to="login">Sign in</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
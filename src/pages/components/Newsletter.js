import { useState } from "react";
import api from "../../services/api";
import ProntoTechBtn from "./ProntoTechButton";
import styles from "../../assets/styles/newsletter.module.css"
import { Link } from "react-router-dom";


const Newsletter = ({ media: { facebook, instagram, twitter, whatsapp, tiktok } }) => {
  const [email, setEmail] = useState();
  const submitEmail = async () => {
    const res = await api('newsletter', 'POST', { email });
    setEmail('');
    console.log(res);
    if (!res.isValidEmail) {
      alert('had l email machi valid'); // dir popup b overlay
    } else if (res.exists) {
      alert('email already exists in the mailing list');
    } else {
      alert('email khdaaaam');
    }
  }
  return (
    <div className={styles.newsletterContainer}>
      <div className={styles.content}>
        <div>
          <h2>Join Our Mailing List</h2>
          <p>Subscribe to our mailing list to stay up-to-date with new collections</p>
        </div>
        <div className={styles.subscribeSection}>
          <input
            type="email"
            className={styles.emailInput}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <button onClick={submitEmail} className={styles.subscribeButton}>Subscribe</button> */}
          <ProntoTechBtn onClick={submitEmail} text={'Subscribe'} icon={'fa fa-mail'} />
        </div>
        <div className={styles.socialIcons}>
          <Link to={facebook} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className={"fa fa-facebook " + styles.facebook}></i>
          </Link>
          <Link to={twitter} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className={"fa fa-twitter " + styles.twitter}></i>
          </Link>
          <Link to={instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className={"fa fa-instagram " + styles.instagram}></i>
          </Link>
          <Link to={tiktok} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <svg className={styles.linkedIn} xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512">
              <path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121 121 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
            </svg>
          </Link>
          <Link to={whatsapp} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className={"fa fa-whatsapp " + styles.youtube}></i>
          </Link>
        </div>
      </div>
      <div className={styles.newsletterImg}>
        <img src="./images/banners/bannerTest.jpg" className="img img-fluid" alt="newsletter" />
      </div>
    </div>
  );
};

export default Newsletter;

import { useState } from "react";
import api from "../../services/api";
import ProntoTechBtn from "./ProntoTechButton";
import styles from "../../assets/styles/newsletter.module.css"

function Newsletter() {
	const [email, setEmail] = useState('');
	const [type, setType] = useState('');
	function handleSubmit(event) {
		if (event) {
			event.preventDefault();
		}
		api('newsletter', 'POST', { type, email })
	}
	return (
		<div>
			<div className={styles.newsletter}>
				<div className="container">
					<div className="row">
						<div className="col">
							<div className={styles.newsletter_container + " d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center"}>
								<div className={styles.newsletter_title_container}>
									<div className={styles.newsletter_icon}><img src="images/send.png" alt="" /></div>
									<div className={styles.newsletter_title}>Sign up for Newsletter</div>
									<div className={styles.newsletter_text}><p>...and receive %20 coupon for first shopping.</p></div>
								</div>
								<div className={styles.newsletter_content +  " " + styles.clearfix}>
									<form onSubmit={handleSubmit} className={styles.newsletter_form}>
										<input type="email" onChange={e => setEmail(e.target.value)} value={email} className={styles.newsletter_input} required="required" placeholder="Enter your email address" />
										<ProntoTechBtn onClick={() => setType('subscribe')} className={styles.newsletter_button} text={"Subscribe"} icon={'fa-bell'} />
									</form>
									<div className={styles.newsletter_unsubscribe_link}><span onClick={() => {
										setType('unsubscribe');
										handleSubmit()
									}} className={styles.unsubscribe_link}>unsubscribe</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Newsletter;
import { useState } from "react";
import api from "../../services/api";

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
			<div className="newsletter">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
								<div className="newsletter_title_container">
									<div className="newsletter_icon"><img src="images/send.png" alt="" /></div>
									<div className="newsletter_title">Sign up for Newsletter</div>
									<div className="newsletter_text"><p>...and receive %20 coupon for first shopping.</p></div>
								</div>
								<div className="newsletter_content clearfix">
									<form onSubmit={handleSubmit} className="newsletter_form">
										<input type="email" onChange={e => setEmail(e.target.value)} value={email} className="newsletter_input" required="required" placeholder="Enter your email address" />
										<button onClick={() => setType('subscribe')} className="newsletter_button">Subscribe</button>
									</form>
									<div className="newsletter_unsubscribe_link"><span onClick={() => {
										setType('unsubscribe');
										handleSubmit()
									}} className="unsubscribe_link">unsubscribe</span></div>
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
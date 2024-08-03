import styles from '../assets/styles/contact.module.css'
import api from '../services/api';
import { useState } from 'react';

function Contact({ contactInfo: { contactEmail, contactPhone, address } }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        api('contact', 'POST', { name, email, phoneNumber, message })
    }

    return (
        <div>
            <div className={styles.contact_info}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">

                                <div className={styles.contact_info_item + " d-flex flex-row align-items-center justify-content-start"}>
                                    <div className={styles.contact_info_image}><img src="images/contact_1.png" alt="" /></div>
                                    <div className={styles.contact_info_content}>
                                        <div className={styles.contact_info_title}>Phone</div>
                                        <div className={styles.contact_info_text}>{contactPhone}</div>
                                    </div>
                                </div>

                                <div className={styles.contact_info_item + " d-flex flex-row align-items-center justify-content-start"}>
                                    <div className={styles.contact_info_image}><img src="images/contact_2.png" alt="" /></div>
                                    <div className={styles.contact_info_content}>
                                        <div className={styles.contact_info_title}>Email</div>
                                        <div className={styles.contact_info_text}><a href="https://colorlib.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="197f786a6d6a78757c6a597e74787075377a7674">{contactEmail}</a></div>
                                    </div>
                                </div>

                                <div className={styles.contact_info_item + " d-flex flex-row align-items-center justify-content-start"}>
                                    <div className={styles.contact_info_image}><img src="images/contact_3.png" alt="" /></div>
                                    <div className={styles.contact_info_content}>
                                        <div className={styles.contact_info_title}>Address</div>
                                        <div className={styles.contact_info_text}>{address}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.contact_form}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container">
                                <div className={styles.contact_form_title}>Get in Touch</div>

                                <form onSubmit={handleSubmit} id="contact_form">
                                    <div className={styles.contact_form_inputs + " d-flex flex-md-row flex-column justify-content-between align-items-between"}>
                                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="contact_form_name" className={"contact_form_name " + styles.input_field} placeholder="Your name" required="required" data-error="Name is required." />
                                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" id="contact_form_email" className={"contact_form_email " + styles.input_field} placeholder="Your email" required="required" data-error="Email is required." />
                                        <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" id="contact_form_phone" className={"contact_form_phone " + styles.input_field} placeholder="Your phone number" />
                                    </div>
                                    <div className="contact_form_text">
                                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="contact_form_message" className={styles.text_field + " contact_form_message"} name="message" rows="4" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
                                    </div>
                                    <div className="contact_form_button">
                                        <button type="submit" className={styles.contactButtons + " " + styles.contact_submit_button}>Send Message</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.gapDiv}></div>
            </div>

            <div className={styles["map-container"] + " container"}>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54348.95898629688!2d-8.004819154956055!3d31.639053927571737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1721680338593!5m2!1sfr!2sma" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    );
}

export default Contact;
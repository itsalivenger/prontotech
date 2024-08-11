import React, { useState } from "react";
import styles from "../assets/styles/checkout.module.css";
import api from "../services/api";
import Breadcrumb from "./components/BreadCrumb";
import SectionTitle from "./components/SectionTitle";
// import PopularCategories from "./components/PopularCategories";

const Checkout = () => {
  const [form, setForm] = useState({
    city: "",
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    address2: "",
    postal: "",
    email: "",
    phone: "",
    coupon: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    const { firstName, lastName, address, city, postal, email, phone } = form;
    if (firstName && lastName && address && city && postal && email && phone) {
      // submit
      const res = await api('/checkout', 'POST', form);
      console.log(res);
    } else {
      // ahhh mmince 3mer l form
      alert('You have to fill all the mandatory inputs');
    }
  };

  return (
    <div>
      <Breadcrumb items={["Home", "Cart", "Checkout"]} />
      <form onSubmit={handleSubmit} className={styles.form + " container"}>
        <div className={styles.leftColumn}>
          <div className={styles.billingDetails}>
            <SectionTitle title={"Billing Details"} />

            <div className={styles.doubleIn}>
              <div className={styles.field}>
                <div className={styles.labelName}>
                  <label>First Name </label>
                  <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.labelName}>
                  <label>Last Name </label>
                  <span className="text-danger">*</span>
                </div>

                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={`${styles.field} ${styles.stretchedField}`}>
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
              />
            </div>
            <div className={`${styles.field} ${styles.stretchedField}`}>
              <div className={styles.labelName}>
                <label>Address</label>
                <span className="text-danger">*</span>
              </div>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
              />
            </div>
            <div className={`${styles.field} ${styles.stretchedField}`}>
              <input
                type="text"
                name="address2"
                value={form.address2}
                onChange={handleChange}
                placeholder="Apartment, suite, unit etc. (optional)"
              />
            </div>
            <div className={styles.doubleIn}>
              <div className={styles.field}>
                <div className={styles.labelName}>
                  <label>City</label>
                  <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.labelName}>
                  <label>Postal Zip Code </label>
                  <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  name="postal"
                  value={form.postal}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.doubleIn}>
              <div className={styles.field}>
                <div className={styles.labelName}>
                  <label>Email Address </label>
                  <span className="text-danger">*</span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <div className={styles.labelName}>
                  <label>Phone </label>
                  <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={`${styles.field} ${styles.stretchedField}`}>
              <label>Order Notes</label>
              <textarea name="notes" onChange={handleChange}></textarea>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.couponCode}>
            <SectionTitle title={"Coupon Code"} />
            <label htmlFor="c_code" className="text-black mb-3">
              Enter your coupon code if you have one
            </label>
            <div className={styles.couponParent}>
              <input
                type="text"
                className={styles.couponInput}
                placeholder="Coupon Code"
                name="coupon"
                value={form.coupon}
                onChange={handleChange}
              />
              <button className={styles.couponBtn} type="submit">
                Apply
              </button>
            </div>
          </div>

          <div className={styles.order}>
            <SectionTitle title={"Your Order"} />
            <div className={styles.orderItem}>
              <span>Direct Bank Transfer</span>
              <div className={styles.additionalInfo}>
                {/* Your content here */}
                <p>Additional information about the payment method.</p>
                {/* Or any other elements you want to include */}
              </div>
            </div>
            <div className={styles.orderItem}>
              <span>Cheque Payment</span>
              <div className={styles.additionalInfo}>
                {/* Your content here */}
                <p>Additional information about the payment method.</p>
                {/* Or any other elements you want to include */}
              </div>
            </div>
            <div className={styles.orderItem}>
              <span>Paypal</span>
              <div className={styles.additionalInfo}>
                {/* Your content here */}
                <p>Additional information about the payment method.</p>
                {/* Or any other elements you want to include */}
              </div>
            </div>
            <button type="submit" className={styles.placeOrderButton}>
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

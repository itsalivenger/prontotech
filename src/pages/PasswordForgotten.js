import React, { useState } from 'react';
import styles from '../assets/styles/PasswordForgotten.module.css';
import Breadcrumb from './components/BreadCrumb';
import SectionTitle from './components/SectionTitle';
import { Link } from 'react-router-dom';

const PasswordForgotten = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    // Simulate sending email
    setSubmitted(true);
    setError('');
  };

  return (
    <>
      <Breadcrumb items={['Home', 'Password forgotten']} />
      <SectionTitle title={"Reset Password"} />
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <img src="./images/prontoLogo.jpg" alt="Logo" className={styles.logo} />
          <div className={styles.backToLoginContainer}>
            <Link to="/login" className={styles.backToLogin}>Back to Login &nbsp;<i className={"fa fa-arrow-right"}></i></Link>
          </div>
          <h1 className={styles.title}>Forgot Your Password?</h1>
          {!submitted ? (
            <>
              <p className={styles.description}>
                Enter your email address below, and we'll send you instructions to reset your password.
              </p>
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.submitButton}>Send Reset Link</button>
              </form>
            </>
          ) : (
            <p className={styles.successMessage}>
              If an account with that email exists, a password reset link has been sent.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default PasswordForgotten;

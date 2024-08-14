import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/404.module.css';
import Breadcrumb from './components/BreadCrumb';
import SectionTitle from './components/SectionTitle';

const NotFoundPage = () => {
    return (
        <>
            <Breadcrumb items={["Home", "Not Found"]} />
            <SectionTitle title={"Page Not Found"} />
            <div className={styles.notFoundContainer}>
                <div className={styles.notFoundContent}>
                    <h2 className={styles.notFoundTitle}>Page Not Found</h2>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1U-fzbIq8W3EKClK4jZSXEkaeWKcX4aGIQ&s"
                        alt="Not Found"
                        className={styles.notFoundImage}
                    />
                    <p className={styles.notFoundText}>
                        Oops! The page you're looking for doesn't exist.
                    </p>
                    <Link to="/" className={styles.homeButton}>
                        Go to Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;

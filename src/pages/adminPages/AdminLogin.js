import styles from "../../assets/styles/adminLogin.module.css";
import { useState } from 'react';

const AdminLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [website, setWebsite] = useState();
    const [userName, setUserName] = useState();


    const togglePasswordVisibility = () => {
        console.log(website);
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoSection}>
                <img src="./images/prontoLogo.jpg" alt="Placeholder" className={styles.placeholderImage} />
                <h2>Pronto Tech</h2>
            </div>
            <div className={styles.loginSection}>
                <h2>Welcome To Admin</h2>
                <p>Please login to Admin Dashboard.</p>
                <form className={styles.form}>
                    <select onChange={(e) => setWebsite(e.target.value)} value={website} className={styles.selectField}>
                        <option>Select Website</option>
                        <option value={'ProntoTech'}>ProntoTech</option>
                        <option value={'Vicky'}>Vicky</option>
                        <option value={'Recyclage'}>Recyclage</option>
                    </select>
                    <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)} placeholder="Username" className={styles.inputField} />
                    <div className={styles.passwordContainer}>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className={styles.inputField}
                        />
                        <button
                            type="button"
                            className={styles.eyeButton}
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    height="24px"
                                >
                                    <path d="M12 4.5C7.3056 4.5 3.2343 7.5614 1.2617 12c1.9726 4.4386 6.0439 7.5 10.7383 7.5s8.7657-3.0614 10.7383-7.5C20.7657 7.5614 16.6944 4.5 12 4.5zM12 17.5c-3.0375 0-5.5-2.4625-5.5-5.5s2.4625-5.5 5.5-5.5 5.5 2.4625 5.5 5.5-2.4625 5.5-5.5 5.5zm0-1c2.4817 0 4.5-2.0183 4.5-4.5s-2.0183-4.5-4.5-4.5-4.5 2.0183-4.5 4.5 2.0183 4.5 4.5 4.5z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    height="24px"
                                >
                                    <path d="M12 4.5C7.3056 4.5 3.2343 7.5614 1.2617 12c1.9726 4.4386 6.0439 7.5 10.7383 7.5s8.7657-3.0614 10.7383-7.5C20.7657 7.5614 16.6944 4.5 12 4.5zM12 17.5c-3.0375 0-5.5-2.4625-5.5-5.5s2.4625-5.5 5.5-5.5 5.5 2.4625 5.5 5.5-2.4625 5.5-5.5 5.5zm0-1c2.4817 0 4.5-2.0183 4.5-4.5s-2.0183-4.5-4.5-4.5-4.5 2.0183-4.5 4.5 2.0183 4.5 4.5 4.5z" />
                                    <path d="M2.6971 4.7679l1.0607-1.0607L21.303 20.1821l-1.0607 1.0607z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <button className={styles.loginButton}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;



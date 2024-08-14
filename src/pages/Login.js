import styles from '../assets/styles/login.module.css';
import { useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import Breadcrumb from './components/BreadCrumb';
import SectionTitle from './components/SectionTitle';

function Login() {
    // login funcs
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        api('login', 'POST', { email: loginEmail, password: loginPassword })
    }

    return (
        <>
            <Breadcrumb items={["Home", "Login"]} />
            <SectionTitle title={"Login"} />
            <div className={styles.loginContainer}>
                <h2 className={styles.title}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input className={styles.loginInputs} onChange={(e) => setLoginEmail(e.target.value)} value={loginEmail} type="email" placeholder="Email" required />
                    <input className={styles.loginInputs} onChange={(e) => setLoginPassword(e.target.value)} value={loginPassword} type={showPassword ? "text" : "password"} placeholder="Password" required />
                    <div>
                        <input className={styles.showPass} type="checkbox" onChange={(e) => setShowPassword(e.target.checked)} checked={showPassword} id="show-password" />
                        <label htmlFor="show-password">Show Password</label>
                    </div>
                    <button className={styles.loginSubmitBtn} type="submit">Sign In</button>
                    <Link className={styles.loginLinks} to="/resetPassword">Forgot Username / Password?</Link>
                    <Link className={styles.loginLinks} to="/signup">Don't have an account? Sign up</Link>
                </form>
            </div>
        </>
    );
}

export default Login;
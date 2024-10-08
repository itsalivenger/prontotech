import styles from '../assets/styles/signup.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import submitSigning from '../services/submitSigning';
import Breadcrumb from './components/BreadCrumb';
import SectionTitle from './components/SectionTitle';

function Login() {
    // signup funcs
    const [username, setUsername] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        submitSigning('signup', { username, email: signupEmail, password: signupPassword, confirmPassword });
    }

    return (
        <>
            <Breadcrumb items={["Home", "Sign Up"]} />
            <SectionTitle title={"Sign Up"} />
            <div class={styles.SignupContainer}>
                <div class={styles.signup_box}>
                    <h2 class={styles.signUpTitle}>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div class={styles.input_box}>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} class={styles.signupInputs} type="text" placeholder="Username" required />
                        </div>
                        <div class={styles.input_box}>
                            <input value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} class={styles.signupInputs} type="email" placeholder="Email" required />
                        </div>
                        <div class={styles.input_box}>
                            <input value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} class={styles.signupInputs} type={showPassword ? "text" : "password"} placeholder="Password" required />
                        </div>
                        <div class={styles.input_box}>
                            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} class={styles.signupInputs} type={showPassword ? "text" : "password"} placeholder="Confirm Password" required />
                        </div>
                        <div>
                            <input className={styles.showPass} type="checkbox" onChange={(e) => setShowPassword(e.target.checked)} checked={showPassword} id="show-password" />
                            <label htmlFor="show-password">Show Password</label>
                        </div>
                        <button class={styles.submitBtn} type="submit">SIGN UP</button>
                        <div class={styles.linksContainer}>
                            <Link class={styles.extra_links} to="/login">Already have an account? Sign in</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
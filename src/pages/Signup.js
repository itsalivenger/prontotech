import styles from '../assets/styles/signup.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import submitSigning from '../services/submitSigning';

function Login() {
    // signup funcs
    const [username, setUsername] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        submitSigning('signup', { username, email: signupEmail, password: signupPassword, confirmPassword });
    }

    return (
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
                        <input value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} class={styles.signupInputs} type="password" placeholder="Password" required />
                    </div>
                    <div class={styles.input_box}>
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} class={styles.signupInputs} type="password" placeholder="Confirm Password" required />
                    </div>
                    <button class={styles.submitBtn} type="submit">SIGN UP</button>
                    <div class={styles.linksContainer}>
                        <Link class={styles.extra_links} to="/login">Already have an account? Sign in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
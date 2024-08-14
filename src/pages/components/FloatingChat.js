import React, { useState } from 'react';
import styles from '../../assets/styles/floatingChat.module.css';

const FloatingChat = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.chatButton} ${isOpen ? styles.active : ''}`} onClick={handleToggle}>
                <div className={styles.chatIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.55 3.38 17L2 22L6.99 20.62C8.45 21.49 10.17 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C10.45 20 9 19.55 7.82 18.8L7.17 18.41L4.59 19.41L5.59 16.83L5.2 16.18C4.45 15 4 13.55 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 7H11V13H17V11H13V7Z" fill="white" />
                    </svg>
                </div>
                <span>Chat</span>
                <div className={styles.statusIndicator}></div>
            </div>
            {isOpen && (
                <div className={styles.dropupMenu}>
                    <div className={styles.menuOption}>
                        <i className={styles.whatsappIcon + ' fab fa-whatsapp'}></i> &nbsp;WhatsApp
                    </div>
                    <div className={styles.menuOption}>
                        <i className={styles.facebookIcon + ' fab fa-facebook'}></i> &nbsp;Messenger
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingChat;

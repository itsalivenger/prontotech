import { useState } from 'react';
import styles from '../../assets/styles/dropdown.module.css';

const Dropdown = ({ buttonLabel, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        {buttonLabel}
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

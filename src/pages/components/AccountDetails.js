import { useState, useEffect } from 'react';
import styles from '../../assets/styles/accountDetails.module.css';
import api from '../../services/api';


const AccountDetails = () => {
  const [details, setDetails] = useState({
    firstName: 'Ali',
    lastName: 'Ait Houssa',
    email: 'tempmail@gmail.com',
    phoneNumber: '0776412546',
    address: 'Marrakech hey elhassani douar elasker',
    city: 'Marrakech',
    country: 'akeed maroc',
    username: 'Itsalivenger',
    dateOfBirth: '22/08/2020'
  })
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await api('/account/details', 'GET');
      if (response.success) {
        setDetails(response.data);
      }
    };
    fetchDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSave = async () => {
    // const response = await api('/account/details', 'PUT', details);
    // if (response.success) {
      setEditMode(false);
    // }
  };

  return (
    <div className={styles.accountDetails}>
      <div>
        You can edit your contact information anytime you want by updating the form !
      </div>
      <hr />
      <form className={styles.detailsForm}>
        <div className={styles.column}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">Prénom :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={details.firstName}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Nom de famille :</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={details.lastName}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber">Phone Number :</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={details.phoneNumber}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Address :</label>
            <input
              type="text"
              id="address"
              name="address"
              value={details.address}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={details.email}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city">City :</label>
            <input
              type="text"
              id="city"
              name="city"
              value={details.city}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="country">Country :</label>
            <input
              type="text"
              id="country"
              name="country"
              value={details.country}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dateOfBirth">Date de naissance :</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={details.dateOfBirth}
              onChange={handleChange}
              disabled={!editMode}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="username">Pseudo :</label>
            <input
              type="text"
              id="username"
              name="username"
              value={details.username}
              onChange={handleChange}
              disabled={!editMode}
            />
            <small>Votre pseudo est utilisé lorsque vous déposez un avis.</small>
          </div>
        </div>
        <div className={styles.formActions}>
          {editMode ? (
            <>
              <button type="button" onClick={handleSave} className={styles.saveButton}>
                Save
              </button>
              <button type="button" onClick={() => setEditMode(false)} className={styles.cancelButton}>
                Cancel
              </button>
            </>
          ) : (
            <button type="button" onClick={() => setEditMode(true)} className={styles.editButton}>
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;

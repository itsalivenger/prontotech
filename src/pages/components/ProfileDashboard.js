import React from 'react';
import styles from '../../assets/styles/profileDashboard.module.css';

const Dashboard = () => {
  // Example dynamic data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joined: "January 2021",
    profilePic: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mp&r=g",
    stats: {
      ordersPlaced: 10,
      wishlistItems: 5,
      activeSubscriptions: 3,
    },
    recentActivities: [
      "Order #1234: Shipped on August 10, 2024",
      "Viewed: Product XYZ",
      "Added to Wishlist: Product ABC",
    ],
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.leftPanel}>
        <div className={styles.profileHeader}>
          <img src={user.profilePic} alt="Profile" className={styles.profilePic} />
          <div className={styles.profileInfo}>
            <h1 className={styles.userName}>{user.name}</h1>
            <p className={styles.email}>{user.email}</p>
            <p className={styles.joined}>Joined: {user.joined}</p>
            <button className={styles.editProfileBtn}>Edit Profile</button>
          </div>
        </div>
        <div className={styles.recentActivity}>
          <h3>Recent Activity</h3>
          <ul>
            {user.recentActivities.map((activity, index) => (
              <li key={index} className={styles.activityItem}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.profileStats}>
          <div className={styles.statItem}>
            <span className={styles.statCount}>{user.stats.ordersPlaced}</span>
            <span className={styles.statLabel}>Orders Placed</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statCount}>{user.stats.wishlistItems}</span>
            <span className={styles.statLabel}>Items in Wishlist</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statCount}>{user.stats.activeSubscriptions}</span>
            <span className={styles.statLabel}>Active Subscriptions</span>
          </div>
        </div>
        <div className={styles.supportHelp}>
          <h3>Support & Help</h3>
          <button className={styles.contactSupportBtn}>Contact Support</button>
          <a href="#faq" className={styles.faqLink}>FAQ</a>
          <button className={styles.liveChatBtn}>Live Chat</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useState } from "react";
import SidebarNavigation from "./components/SideNav";
import styles from "../assets/styles/profilePage.module.css";
import SectionTitle from "./components/SectionTitle";
import Breadcrumb from "./components/BreadCrumb";
import ContentComponent from "./components/ProfileContent";
import AccountDetails from "./components/AccountDetails";
import OrderHistory from "./components/OrderHistory";
import CouponComponent from "./components/CouponComponent";


const lkrichat = [
    <p>Dashboard coming soon...</p>,
    <OrderHistory />,
    <AccountDetails />,
    <p>Active Orders coming soon...</p>,
    <CouponComponent />,
    <p>Disconnect coming soon...</p>]
const ProfilePage = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [index, setIndex] = useState(0);

    const handleMenuItemClick = (item, index) => {
        setActiveItem(item);
        setIndex(index);
    };

    return (
        <div className={styles.container}>
            <Breadcrumb items={["Home", <><span className="fa fa-user"></span> &nbsp; Profile</>]} />
            <SectionTitle title={"Profile"} />
            <div className={styles.profilePageContainer}>
                <SidebarNavigation onMenuItemClick={handleMenuItemClick} />
                <div className={styles.mainContent}>
                    {activeItem ? (
                        <ContentComponent
                            title={<SectionTitle title={activeItem.label} />}
                            body={<div>
                                {lkrichat[index]}
                            </div>}
                        />
                    ) : (
                        <div>Select an item from the menu</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;




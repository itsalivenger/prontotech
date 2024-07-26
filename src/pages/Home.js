import Banner1 from './components/Banner1';
import Characteristics from './components/Characteristics';
import DealsFeatured from './components/DealsFeatured';

import PopularCategories from './components/PopularCategories';
import Banner2 from './components/Banner2';
import NewArrivals from './components/NewArrivals';
import BestSellers from './components/BestSellers';
import Adverts from './components/Adverts'
import Trends from './components/Trends'
import Reviews from './components/Reviews'
import Viewed from './components/Viewed'
import Brands from './components/Brands'

function Home() {
    return (
        <div className="super_container">
            <Banner1 />
            <Characteristics />
            <DealsFeatured />
            <PopularCategories />
            <Banner2 />
            <NewArrivals />
            <BestSellers />
            <Adverts />
            <Trends />
            <Reviews />
            <Viewed />
            <Brands />
        </div>
    );
}

export default Home;
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
import BannerCarousel from './components/BannerCarousel';
const banners = [
    { 
      image: './images/banner1.jpg', 
      title: 'Welcome to Our Store', 
      subtitle: 'Best deals on electronics', 
      buttonText: 'Shop Now' 
    },
    { 
      image: './images/banner2.jpg', 
      title: 'Summer Collection', 
      subtitle: 'Latest trends in fashion', 
      buttonText: 'Explore' 
    },
    { 
      image: './images/banner2.jpg', 
      title: 'Tech Gadgets', 
      subtitle: 'Innovative tech products', 
      buttonText: 'Discover' 
    },
  ];
function Home() {
    return (
        <div className="super_container">
            <BannerCarousel banners={banners} />
            {/* <Banner1 /> */}
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
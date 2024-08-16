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
import Carousel from './components/Carousel';
import ResponsiveImageBanner from './components/ResponsiveImageBanner';
import GadgetCarousel from './components/GadgetCarousel';
import Features from './components/Features';
import A9wadCarousel from './components/A9wadCarousel';
const banners = [
    { 
      image: './images/banner1.jpg', 
      title: 'Welcome to Our Store', 
      subtitle: 'Find our best deals on electronics', 
      buttonText: 'Shop Now' 
    },
    { 
      image: './images/banner2.jpg', 
      title: 'Summer Collection', 
      subtitle: 'Emerge into our latest trends in fashion', 
      buttonText: 'Explore' 
    },
    { 
      image: './images/banner3.avif', 
      title: 'Tech Gadgets', 
      subtitle: 'Discover our Innovative tech products', 
      buttonText: 'Discover' 
    },
  ];
function Home() {
    return (
        <div className="super_container">
            <BannerCarousel banners={banners} />
            
            {/* <Characteristics /> */}
            <Features />
            <DealsFeatured />
            {/* <PopularCategories /> */}
            <GadgetCarousel />
            {/* <Banner2 /> */}
            <A9wadCarousel />
            <NewArrivals />
            <Trends />
            <ResponsiveImageBanner src={"./images/banner2.jpg"} alt={"banner"} />
            <BestSellers />
            <Carousel />
            <Adverts />
            <Reviews />
            <Viewed />
            <Brands />
        </div>
    );
}

export default Home;
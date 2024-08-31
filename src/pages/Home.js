// import Characteristics from './components/Characteristics';
import DealsFeatured from './components/DealsFeatured';

// import PopularCategories from './components/PopularCategories';
// import Banner2 from './components/Banner2';
import NewArrivals from './components/NewArrivals';
import BestSellers from './components/BestSellers';
import Adverts from './components/Adverts'
import TrendsCarousel from './components/TrendsCarousel'
import Reviews from './components/ReviewsCarousel'
import BrandCarousel from './components/BrandCarousel'
import BannerCarousel from './components/BannerCarousel';
import Carousel from './components/Carousel';
import ResponsiveImageBanner from './components/ResponsiveImageBanner';
import GadgetCarousel from './components/GadgetCarousel';
import Features from './components/Features';
import A9wadCarousel from './components/A9wadCarousel';
import RecentlyViewedCarousel from './components/RecentlyViewedCarousel';
import CountersGroup from './components/IncrementGroup';
import ResponsiveImageComponent from './components/ResponsiveImageComponent';
import SideImages from './components/SideImages';
import Features2 from './components/Features2';
import SectionTitle from './components/SectionTitle';
const banners = [
    { 
      image: './images/banners/banner1.jpg', 
      title: 'Welcome to Our Store', 
      subtitle: 'Find our best deals on electronics', 
      buttonText: 'Shop Now' 
    },
    { 
      image: './images/banners/banner2.jpg', 
      title: 'Summer Collection', 
      subtitle: 'Emerge into our latest trends in fashion', 
      buttonText: 'Explore' 
    },
    { 
      image: './images/banners/banner3.avif', 
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
            <DealsFeatured />
            <SideImages img1={'./images/banners/camera.png'} img2={'./images/banners/watch.png'} />
            <SectionTitle title={'Features'} />
            <Features2 icon1={'./images/icons/delivery.png'}
                      icon2={'./images/icons/shield.png'}
                      icon3={'./images/icons/confidence.png'}
                      icon4={'./images/icons/help.png'} />
            {/* <PopularCategories /> */}
            <GadgetCarousel />
            <ResponsiveImageComponent />
            <CountersGroup />
            {/* <Banner2 /> */}
            <A9wadCarousel />
            <NewArrivals />
            <TrendsCarousel />
            <ResponsiveImageBanner src={"./images/banners/banner2.jpg"} alt={"banner"} />
            {/* <BestSellers /> */}
            <Carousel />
            {/* <Features /> old features */}
            <Adverts />
            <Reviews />
            <RecentlyViewedCarousel />
            <BrandCarousel />
        </div>
    );
}

export default Home;
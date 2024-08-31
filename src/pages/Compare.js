import Breadcrumb from './components/BreadCrumb';
import ItemSelection from './components/CompareItemsList';
import ProductComparisonTable from './components/ProductComparisonTable';
import SectionTitle from './components/SectionTitle';
import ResponsiveImageComponent from './components/ResponsiveImageComponent';

const products = [
  {
    _id: 1,
    name: 'Product 1',
    image: './images/products/laptop1.jpg',
    price: '$999',
    screenSize: '6.1 inches',
    ram: '6 GB',
    battery_life: '20 hours',
    camera: '12 MP',
    processor: 'A14 Bionic',
    hardDisk: '128 GB SSD',
  },
  {
    _id: 2,
    name: 'Product 2',
    image: './images/products/laptop1.jpg',
    price: '$1099',
    screenSize: '6.7 inches',
    ram: '8 GB',
    battery_life: '24 hours',
    camera: '48 MP',
    processor: 'Snapdragon 888',
    hardDisk: '256 GB SSD',
  },
  {
    _id: 3,
    name: 'Product 3',
    image: './images/products/laptop1.jpg',
    price: '$799',
    screenSize: '5.8 inches',
    ram: '4 GB',
    battery_life: '18 hours',
    camera: '16 MP',
    processor: 'Exynos 2100',
    hardDisk: '1 TB SSD',
  },
  {
    _id: 3,
    name: 'Product 3',
    image: './images/products/laptop1.jpg',
    price: '$799',
    screenSize: '5.8 inches',
    ram: '4 GB',
    battery_life: '18 hours',
    camera: '16 MP',
    processor: 'Exynos 2100',
    hardDisk: '1 TB SSD',
  },
];

const features = [
  { label: 'RAM', key: 'ram' },
  { label: 'Screen Size', key: 'screenSize' },
  { label: 'Hard Disk', key: 'hardDisk' },
  { label: 'name', key: 'name' },
  { label: 'price', key: 'price' },
  { label: 'screen size', key: 'screenSize' },
  { label: 'ram', key: 'ram' },
  { label: 'battery life', key: 'battery_life' },
  { label: 'camera', key: 'camera' },
  { label: 'processor', key: 'processor' },

];

function Compare() {
  return (
    <div>
      <Breadcrumb items={['Home', 'Compare']} />
      <ResponsiveImageComponent img1={'./images/flayers/flayer1.jpg'} img2={'./images/flayers/flayer1.jpeg'} img3={'./images/flayers/flayer1.jpg'} />
      <SectionTitle title={'Compare Products'} />
      {/* <ItemSelection handleCompare={setProducts} selectedItems={selectedItems} handleSelectItem={handleSelectItem} /> */}
      <ProductComparisonTable features={features} products={products} />
    </div>
  );
}


export default Compare;

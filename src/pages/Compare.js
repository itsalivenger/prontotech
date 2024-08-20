import Breadcrumb from './components/BreadCrumb';
import ProductComparisonTable from './components/ProductComparisonTable';
import SectionTitle from './components/SectionTitle';

const products = [
  {
    name: 'Laptop A',
    image: './images/products/laptop.png',
    price: '1000 DH',
    cpu: 'Intel i7',
    ram: '16GB',
    storage: '512GB SSD',
    display: '15.6" 1080p'
  },
  {
    name: 'Laptop B',
    image: './images/products/desktop.png',
    price: '1200 DH',
    cpu: 'Intel i9',
    ram: '32GB',
    storage: '1TB SSD',
    display: '17" 4K'
  },{
    name: 'Laptop A',
    image: './images/products/laptop.png',
    price: '1000 DH',
    cpu: 'Intel i7',
    ram: '16GB',
    storage: '512GB SSD',
    display: '15.6" 1080p'
  },
];

function Compare() {
  return (
    <div>
      <Breadcrumb items={['Home', 'Compare']} />
      <SectionTitle title={'Compare Products'} />
      <ProductComparisonTable products={products} />
    </div>
  );
}

export default Compare;

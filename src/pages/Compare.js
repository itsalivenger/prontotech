import { useState } from 'react';
import Breadcrumb from './components/BreadCrumb';
import ItemSelection from './components/CompareItemsList';
import ProductComparisonTable from './components/ProductComparisonTable';
import SectionTitle from './components/SectionTitle';
import ImagePair from './components/ImagePair';


function Compare() {
  const [product1, setProduct1] = useState({});
  const [product2, setProduct2] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (product) => {
    setSelectedItems((prev) =>
      prev.includes(product)
        ? prev.filter((item) => item !== product)
        : prev.length < 2
          ? [...prev, product]
          : prev
    );
  };

  const setProducts = (products) => {
    setProduct1(products[0]);
    setProduct2(products[1]);
  };
  
  return (
    <div>
      <Breadcrumb items={['Home', 'Compare']} />
      <ImagePair portraitImage={'./images/flayers/flayer1.png'} landscapeImage={'./images/flayers/flayer1.jpg'} altText1={product1.name} altText2={product2.name} />
      <SectionTitle title={'Compare Products'} />
      <ItemSelection handleCompare={setProducts} selectedItems={selectedItems} handleSelectItem={handleSelectItem} />
      <ProductComparisonTable product1={product1} product2={product2} />
    </div>
  );
}

export default Compare;

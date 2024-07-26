import { useEffect, useState } from 'react';
import '../assets/styles/product_preview.css';
import ProductImages from './components/Product_Image';
import api from '../services/api';

const prod = {name: 'HP Elite Desk 800 G2 I7-6GN 8G/500HDD',
    brand: 'HP',
    reference: '800 G2',
    numInStock: 10,
    description: 'HP Elite Desk 800 G2 I7-6GN 8G/500HDD',
    price: 11200,
    images: [
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08454578.png",
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08611463.png"
    ]}
function SingleProduct() {
    const [{ name, brand, reference, numInStock, description, price, images }, setProduct] = useState({});
    const [qty, setQty] = useState(1);

    useEffect(() => {
        api('productPreview', 'POST', { type: 'singleProduct', id: 1 }).then((data) => {
            // console.log(data);
            setProduct(prod);
        });
    }, []);

    const incrementQty = () => setQty(qty + 1);
    const decrementQty = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };

    return (
        name && (
            <div className="product-container container">
                <div className="breadcrumb">
                    <a href="/">Home</a> &gt; {name}
                </div>
                <div className="product-details">
                    <ProductImages images={images} />
                    <div className="product-info">
                        <h1>{name}</h1>
                        <div className="brand">
                            <strong>Brand:</strong> {brand}
                        </div>
                        <div className="reference">
                            <strong>Reference:</strong> {reference}
                        </div>
                        <div className="stock">
                            <strong>Available in stock:</strong> {numInStock}
                        </div>
                        <div className="description">
                            <strong>Description:</strong> {description}
                        </div>
                        <div className="price">
                            {price} DH
                        </div>
                        <div className="purchase-options">
                            <div className="quantity-input-wrapper">
                                <button className="btn-qty" onClick={decrementQty}>-</button>
                                <input
                                    className="quantity-input"
                                    type="number"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    min="1"
                                />
                                <button className="btn-qty" onClick={incrementQty}>+</button>
                            </div>
                            <button className="btn btn-primary add-to-cart">Add To Cart</button>
                        </div>
                        <div className="wishlist-comparison">
                            <button className="btn btn-info">Add To Wishlist</button>
                            <button className="btn btn-secondary">Add/Remove From comparison</button>
                        </div>
                        <div className="reviews">
                            0 Review(s)
                        </div>
                        <div className="social-share">
                            <button className="btn btn-facebook">Share <span className='fa fa-facebook'></span></button>
                            <button className="btn btn-twitter">Share <span className='fa fa-twitter'></span></button>
                        </div>
                        <div className="delivery-info">
                            <p>Livraison rapide sur tout le Maroc à domicile ou sur votre lieu de travail (40 DH TTC)</p>
                        </div>
                        <div className="pickup-info">
                            <p>Retrait immédiat à Marrakech (Massira 1 - Bloc A - 382)</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default SingleProduct;

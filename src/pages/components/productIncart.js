function ProductIncart({removeProduct, handleUpdateQty, product: {id, imageSrc, name, price, qty}}) {
    return (
        <li data-id={id} className="cart_item clearfix">
            <div className="cart_item_image"><img src={imageSrc} alt="" /></div>
            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                <div className="cart_item_name cart_info_col">
                    <div className="cart_item_title">Name</div>
                    <div className="cart_item_text">{name}</div>
                </div>
                <div className="cart_item_color cart_info_col">
                    <div className="cart_item_title">Color</div>
                    <div className="cart_item_text"><span style={{ backgroundColor: "#999999" }}></span>Silver</div>
                </div>
                <div className="cart_item_quantity cart_info_col">
                    <div className="cart_item_title">Quantity</div>
                    <div className="cart_item_text counter-container">
                        <button onClick={() => handleUpdateQty(id, -1)} className="counter-btn" id="decrease-btn">-</button>
                        <div className="counter-value" id="counter-value">{qty}</div>
                        <button onClick={() => handleUpdateQty(id, 1)} className="counter-btn" id="increase-btn">+</button>
                    </div>
                </div>
                <div className="cart_item_price cart_info_col">
                    <div className="cart_item_title">Price</div>
                    <div className="cart_item_text">{price} DH</div>
                </div>
                <div className="cart_item_total cart_info_col">
                    <div className="cart_item_title">Total</div>
                    <div className="cart_item_text">{price * qty} DH</div>
                </div>

                <div className="cart_item_total cart_info_col">
                    <div className="cart_item_title">Remove</div>
                    <div onClick={() => removeProduct(id)} className="cart_item_text"><i className="fa fa-trash remove-btn" aria-hidden="true"></i></div>
                </div>
            </div>
        </li>
    );
}

export default ProductIncart;
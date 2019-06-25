import React, { Component } from 'react';

class Product extends Component {

    render() {
        const item = this.props.item;
        return (
            <div key={item.id}>
                <img alt={"test_img"} src={item.image} />
                <div className="product-detail">
                    <b> {item.title}</b>
                    <div className="color-span">
                        <div>
                        <span>Color:</span>
                        <svg width="20" height="20">
                        <label></label>
                            <rect x="10" y="10" width="10" height="20" stroke="black" fill={item.colour.color} strokeWidth="1"/>
                        </svg>
                        </div>
                        <span className="plus">+</span>
                    </div>
                <div className="add-div">{`Brand: ${item.brand}`}</div>
                <span>{`Rating: ${item.rating}`}</span>
                <div className="price-detail">
                    <span> {`Price: $${parseInt(item.price.final_price  / 69.52)}`}</span>
                    <span> {`Discount: ${item.discount}`}</span>
                </div>
                </div>
            </div>
        );
    }
}

export default Product;
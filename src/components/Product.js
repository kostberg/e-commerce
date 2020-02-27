import React, { Component } from 'react'

export class Product extends Component {
    render() {
        const { name, img} = this.props.product
        return (
            <div>
                <div className="product" style={{backgroundImage: `url("${img}")`, backgroundSize: 'cover'}}>
                    <div className="productImage"></div>
                    <div className="productName"><h3>{name}</h3></div>
                </div>
            </div>
        )
    }
}

export default Product

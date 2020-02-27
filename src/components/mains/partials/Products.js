import React, { Component } from 'react'
import Product from './Product'

export class Products extends Component {
    render() {
        return (
            <div className="ShowProduct">
                <div className="productContainer">
                    {this.props.products.map(product => <Product product={product} key={product.id}/>)}
                </div>
            </div>
        )
    }
}

export default Products

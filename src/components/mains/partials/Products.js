import React, { Component } from 'react'
import Product from './Product'
import Styler from './stylers/ProductsStyler'

export class Products extends Component {
    render() {
        return (
            <Styler>
                <div className="productContainer">
                    {this.props.products.map(product => <Product product={product} key={product.id}/>)}
                </div>
            </Styler>
        )
    }
}

export default Products

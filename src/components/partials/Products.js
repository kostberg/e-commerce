import React, { Component } from 'react'
import Product from './Product'
import Styler from './stylers/ProductsStyler'
import { connect } from "react-redux";
import addProduct from '../../redux/actions/addProduct'

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

const mapStateToProps = (reduxState) => ({
    products: reduxState.redux.products
})

export default connect(mapStateToProps, { addProduct })(Products)
import React, { Component } from 'react'
import AddProduct from '../partials/AddProduct'
import Products from '../partials/Products'
import Loading from '../partials/Loading'
import Wrapper from './stylers/AddMainStyler'
import { connect } from 'react-redux'
import addProduct from '../../redux/actions/addProduct'

export class AddProductHome extends Component {
    render() {
        return (
            <Wrapper>
                {this.props.loading ? <Loading/> : ""}
                <div className="container">
                    <AddProduct />
                    <div className="seperator"></div>
                    <Products />
                </div>
            </Wrapper>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    loading: reduxState.redux.loading
})

export default connect(mapStateToProps, { addProduct })(AddProductHome)
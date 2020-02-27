import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import AddProductMain from './mains/AddProductMain'
import LandingPage from './mains/Homepage'
import ProductsMain from './mains/ProductsMain'
import '../App.css';
import { connect } from 'react-redux'
import addProduct from '../redux/actions/addProduct'

export class MainApp extends Component {
    render() {
        return (
            <div className="MainApp" style={this.props.loading ? {overflowY: "hidden"} : {overflowY: "scroll"}}>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/addProduct" component={AddProductMain} />
                    <Route path="/products" component={ProductsMain}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    loading: reduxState.redux.loading
})

export default connect(mapStateToProps, { addProduct })(MainApp)
import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import AddProductMain from './mains/AddProductMain'
import LandingPage from './mains/Homepage'
import ProductsMain from './mains/ProductsMain'
import '../App.css';

export class MainApp extends Component {
    render() {
        return (
            <div className="MainApp">
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/addProduct" component={AddProductMain} />
                    <Route path="/products" component={ProductsMain}/>
                </Switch>
            </div>
        )
    }
}

export default MainApp

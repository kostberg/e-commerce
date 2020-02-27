import React, { Component } from 'react'
import svg from '../files/addToCart.svg'
import { store } from 'react-notifications-component';

export class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            opacityFilter: 0,
            opacityElements: 0,
            img: ""
        }
    }

    addToCart = (event) => {
        const product_text = event.target.offsetParent.offsetParent.offsetParent.firstChild.lastChild.lastChild.innerHTML
        store.addNotification({
            title: "Product added to the cart",
            message: `${product_text} has been added to the cart`,
            type: "success",
            insert: "top",
            container: "top-center",
            animationIn: ["animated", "flipInX"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 4000,
              onScreen: true
            }
          })
    }

    addDollar = (price) => {
        if(!(price[price.length - 1] === '$')){
            price = `${price}$`
        }
        return price
    }


    mouseOver = (event) => {
        this.setState({opacityFilter: 0.5, opacityElements: 1})
    }

    mouseOut = (event) => {
        this.setState({opacityFilter: 0, opacityElements: 0})
    }

    render() {
        let { name, price, img } = this.props.product
        price = this.addDollar(price)
        return (
            <div>
                <div className="product" style={{backgroundImage: `url("${img}")`, backgroundSize: 'cover'}}>
                    <div className="productImage"></div>
                    <div className="productName"><h3>{name}</h3></div>
                </div>
                <div className="overlay" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <div>
                        <div className="addToCart" onClick={this.addToCart} style={{backgroundImage: `url(${svg})`, backgroundSize: 'cover', opacity: this.state.opacityElements}}></div>
                        <h3 style={{opacity: this.state.opacityElements}}>Price: {price}</h3>
                    </div>
                </div>
                <div className="overlay_filter" style={{opacity: this.state.opacityFilter}} ></div>
            </div>
        )
    }
}

export default Product

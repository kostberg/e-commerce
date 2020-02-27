import React, { Component } from 'react'
import AddProduct from './AddProduct'
import Products from './ShowProducts'


export class MainApp extends Component {

    state = {
        products: [
            {
                name: 'Friends t-shirt',
                price: '50$',
                img: 'https://static.bershka.net/4/photos2/2019/I/0/1/p/7337/058/250/7337058250_1_1_3.jpg',
                id: 1
            },
            {
                name: 'Computer',
                price: '50$',
                img: 'https://cdn.def-shop.com/cdn-cgi/image/w=530,q=95,f=auto/images/product_images/picture1300x1725_images/619532_0.jpg',
                id: 2
            },
            {
                name: 'IPhone',
                price: '50$',
                img: 'https://cdn.def-shop.com/cdn-cgi/image/w=530,q=95,f=auto/images/product_images/picture1300x1725_images/619532_0.jpg',
                id: 3
            }
        ]
    }

    render() {
        return (
            <div className="MainApp">
                <div className="container">
                    <AddProduct />
                    <div className="seperator">
                        <div></div>
                    </div>
                    <Products products={this.state.products}/>
                </div>
            </div>
        )
    }
}

export default MainApp

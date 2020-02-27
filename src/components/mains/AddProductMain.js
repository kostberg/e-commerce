import React, { Component } from 'react'
import AddProduct from './partials/AddProduct'
import Products from './partials/Products'
import uuid from 'uuid'
import Loading from './partials/Loading'
import { store } from 'react-notifications-component';
import Wrapper from './stylers/AddMainStyler'

export class AddProductHome extends Component {
    state = {
        products: [
            {
                name: 'Friends t-shirt',
                price: '50',
                img: 'https://static.bershka.net/4/photos2/2019/I/0/1/p/7337/058/250/7337058250_1_1_3.jpg',
                id: 1
            },
            {
                name: 'Computer',
                price: '50',
                img: 'https://cdn.def-shop.com/cdn-cgi/image/w=530,q=95,f=auto/images/product_images/picture1300x1725_images/619532_0.jpg',
                id: 2
            },
            {
                name: 'IPhone',
                price: '50',
                img: 'https://cdn.def-shop.com/cdn-cgi/image/w=530,q=95,f=auto/images/product_images/picture1300x1725_images/619532_0.jpg',
                id: 3
            }
        ],
        loadingBar: {
            visible: false
        }
    }

    fetchImage = async (name) => {
        // Returns img url
        this.setState({loadingBar: {
            visible: !this.state.loadingBar.visible
        }})

        return await fetch(`http://localhost:9000/api/${name}`)
            .then(res => {
                this.setState({loadingBar: {
                    visible: !this.state.loadingBar.visible
                }})
                return res.json()
            })
    }

    productAdded = async (name,price) => {
        const { img } = await this.fetchImage(name)

        const id = uuid.v4()
        
        store.addNotification({
            title: "Product added!",
            message: "A product has been generated.",
            type: "success",
            insert: "top",
            container: "top-center",
            animationIn: ["animated", "flipInX"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 4000,
              onScreen: true
            }
          });

        if(!img){
            store.addNotification({
                title: "Image not generated",
                message: "Something went wrong when fetching the image :/",
                type: "warning",
                insert: "top",
                container: "top-center",
                animationIn: ["animated", "flipInX"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
        }
        
        this.setState({products: this.state.products.concat({
            name,price,img,id
        })})
    }

    render() {
        return (
            <Wrapper>
                {this.state.loadingBar.visible ? <Loading/> : ""}
                <div className="container">
                    <AddProduct products={this.state.products} productAdded={this.productAdded}/>
                    <div className="seperator"></div>
                    <Products products={this.state.products}/>
                </div>
            </Wrapper>
        )
    }
}

export default AddProductHome

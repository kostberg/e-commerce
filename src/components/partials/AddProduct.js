import React, { Component } from 'react'
import { store as storeNotifications} from 'react-notifications-component';
import Styler from './stylers/AddProductStyler'
import { connect } from 'react-redux'
import addProduct from '../../redux/actions/addProduct'

export class AddProduct extends Component {
    state = {
        currentName: "",
        currentPrice: ""
    }

    componentDidUpdate = () => {
        if(this.props.error){
            storeNotifications.addNotification({
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
                return;
        }
    }

    inputHandler = (event) => {
        const value = event.target.value
        switch(event.target.getAttribute("name")){
            case "currentName":
                this.setState({currentName: value})
                break;
            case "currentPrice":
                const num_value = isNaN(Number(value)) ? "" : Number(value)
                this.setState({currentPrice: num_value})
                break;
            default:
                throw new Error('Value error');
        }
    }

    checkInput = (callBack) => {
        const currentProducts = this.props.products
        const { currentName, currentPrice } = this.state

        // Check if entry with exactly the same information already exists
         let isDuplicate = () => {
            if(currentProducts.some(product => {
                if(product["name"] === currentName && product["price"] === currentPrice ){
                    storeNotifications.addNotification({
                        title: "Duplicate input!",
                        message: "Please make sure input is not an duplicate of an already existing product.",
                        type: "danger",
                        insert: "top",
                        container: "top-center",
                        animationIn: ["animated", "flipInX"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                          duration: 4000,
                          onScreen: true
                        }
                      })
                      return true
                } else {
                    return false
                }
            })){
                return true
            } else {
                return false
            }
        }

        // Validate input
        if((!(currentName === "") && typeof(currentName) === "string") 
        && (!(currentPrice === "") && typeof(currentPrice) === "number")){
            if(isDuplicate()){
                return false
            } else {
                callBack()
            }
        } else {
            storeNotifications.addNotification({
                title: "Incorrect input!",
                message: "Please make sure all fields are correct.",
                type: "danger",
                insert: "top",
                container: "top-center",
                animationIn: ["animated", "flipInX"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 4000,
                  onScreen: true
                }
              });
              return false
        }
    }

    submitHandler = (event) => {
        event.preventDefault()
        
        this.checkInput(() => {
            this.props.addProduct(this.state.currentName, this.state.currentPrice)
        })
    }

    render() {
        return (
            <Styler>
                <h1>Add a product</h1>
                <form>
                    <div className="name">
                        <h3>Name:</h3>
                        <input type="text" name="currentName" onChange={this.inputHandler}></input>
                    </div>
                    <div className="price">
                        <h3>Price:</h3>
                        <input type="text" name="currentPrice" onChange={this.inputHandler}></input>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Submit" onClick={this.submitHandler}></input>
                    </div>
                </form> 
            </Styler>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    products: reduxState.redux.products
})

export default connect(mapStateToProps, { addProduct })(AddProduct)

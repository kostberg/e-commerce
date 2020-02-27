import React, { Component } from 'react'

export class AddProduct extends Component {

    changeHandler = (event) => {
        event.preventDefault()
        console.log(event)
    }

    render() {
        return (
            <div className="AddProduct">
                <h1>Add a product</h1>
                <form>
                    <div className="name">
                        <h3>Name:</h3>
                        <input type="text"></input>
                    </div>
                    <div className="price">
                        <h3>Price:</h3>
                        <input type="text"></input>
                    </div>
                    <div className="image">
                        <h3>Image url:</h3>
                        <input type="text"></input>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Submit" onClick={this.changeHandler}></input>
                    </div>
                </form> 
            </div>
        )
    }
}

export default AddProduct

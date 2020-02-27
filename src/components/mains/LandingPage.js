import React, { Component } from 'react'
import '../../styling/Homepage/style.css'

export class LandingPage extends Component {
    render() {
        return (
            <div className="container" style={{display: "block"}}>
                <h1 style={this.h1}>Homepage</h1>
            </div>
        )
    }
}

export default LandingPage

import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

class Loading extends Component{
    constructor(props){
        super(props)
        this.state = {
            type: "Oval",
            color: "#00BFFF",
            height: 100,
            width: 100,
            timeout: 3000000,
            opacity: {
                opacity: 0.5
            }
        }
    }


    componentDidMount(){
        //
    }

    render() {
        const { type, color, height, width, timeout } = this.state
        const visible = this.props.visible
        return (
            <div className="loadingBar" >
                <Loader visible={visible} type={type} color={color} height={height} width={width} timeout={timeout}/>
                <div className="overlay" style={this.state.opacity}></div>
            </div>
        )
    }
}

export default Loading

import React from 'react'
import logo from '../../logo.svg'
function Header() {
    return(
        <header>
            <img src={logo} className="svgHeader" alt="reactLogo"></img>
            <h1>Products</h1>
            <h1>Add product</h1>
            <h1>Shopping cart</h1>
        </header>
    )
}

export default Header
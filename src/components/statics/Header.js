import React from 'react'
import logo from '../../logo.svg'
import { Link } from "react-router-dom"
import '../../styling/header.css'
function Header() {
    return(
        <header>
            <Link to="/"><img src={logo} className="svgHeader" alt="reactLogo"></img></Link>
            <Link to="/products"><h1>Products</h1></Link>
            <Link to="/addProduct"><h1>Add product</h1></Link>
            <Link to="/cart"><h1>Shopping cart</h1></Link>
        </header>
    )
}

export default Header
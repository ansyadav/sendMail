import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
const HeaderComp = () => {
    return (
        <div className="header">
            <div className="inner-header floatcontainer">
                <div className="logo-container">
                    <img src={logo} />
                </div>
                <ul className="navigation">
                    <li> <NavLink exact to="/" className="signInBar" activeClassName="selected" >Home</NavLink></li>
                    <li> <NavLink to="/product" className="signInBar" activeClassName="selected" >Product</NavLink></li>
                </ul>
                <div className="navigation-right">
                    <NavLink to="/login" className="signInBar" activeClassName="selected" >SignIn</NavLink>
                    <NavLink to="/ragister" className="registerBar" activeClassName="selected" >Register</NavLink>
                    <div className="cart-container">0 items</div>
                </div>
            </div>
        </div>
    )
}
export default HeaderComp;
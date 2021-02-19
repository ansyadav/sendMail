import React from 'react';
import logo from '../images/logo.png'
const HeaderComp = () => {
    return(
        <div className="header">
            <div className="inner-header">
                <div className="logo-container">
                    <img src={logo} />
                </div>
                <ul className="navigation">
                    <li><a>Home</a></li>
                    <li><a>Product</a></li>
                </ul>
                <div className="navigation-right">
                    <a className="signInBar">SignIn</a>
                    <a className="registerBar">Register</a>
                    <div className="cart-container">0 items</div>
                </div>
            </div>
        </div>
    )
}
export default HeaderComp;
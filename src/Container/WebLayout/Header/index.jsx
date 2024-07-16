import React from "react";
import {Link} from "react-router-dom";
import './style.scss'
import {useSelector} from "react-redux";
function Header() {
    const {cartItems} = useSelector(state => state?.CartReducer)
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/checkout">Cart ({cartItems.length} Items)</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;
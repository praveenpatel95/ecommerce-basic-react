import React, {useState} from "react";
import {useSelector} from "react-redux";
import CartItems from "./CartItems";
import CheckoutForm from "./CheckoutForm";

function Checkout() {
    const {cartItems, orderDetail} = useSelector(state => state?.CartReducer)

    const isOrderPlaced = (orderDetail) => {
        return Object.keys(orderDetail).length != 0;
    };


    return (
        <div className="main bg-white">
            <h1 className="h1 ps-1">Checkout</h1>
            {isOrderPlaced(orderDetail) ?
                <h3 className="mt-2 mb-1">Your Order has been placed, Order NO: {orderDetail?.order?.id}</h3>
                :
                cartItems.length > 0 ?
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h4>Products</h4>
                                <CartItems/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h4>Fill the details</h4>
                                <br/>
                                <CheckoutForm/>
                            </div>
                        </div>
                    </div>
                </div>
                    :
                    <h4 className="text-danger">Please add products in the cart</h4>
            }
        </div>

    )
}

export default Checkout;
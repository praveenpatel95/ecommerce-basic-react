import React from "react";
import {useSelector} from "react-redux";

function CartItems(){
    const {cartItems} = useSelector(state => state?.CartReducer)

    return (
        <table className="checkout-table" border="1">
            <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {cartItems.length > 0 && cartItems.map((product, index) => (
                <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default CartItems;
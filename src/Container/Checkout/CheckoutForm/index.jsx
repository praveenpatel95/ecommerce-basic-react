import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkout} from "../../../stores/Cart/actions";

function CheckoutForm(){
    const {cartItems, checkoutError, isCheckout} = useSelector(state => state?.CartReducer)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            ...formData,
            cartItems,
        };
        dispatch(checkout(payload))
        setFormData({
            name: '',
            email: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row mb-1">
                <label className="w-100">Name</label>
                <input type="text" className="form-input"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                />
            </div>
            <div className="row mb-1">
                <label className="w-100">Email Address</label>
                <input type="text" className="form-input"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       required
                />
            </div>
            <br/>
            <div className="row mb-1">
                <button type="submit" className="w-100 add_to_cart_btn"
                        disabled={isCheckout}>{isCheckout ? "Place Order" : "Please wait"}</button>
                {checkoutError && <p className="text-danger">{checkoutError}</p>}
            </div>
        </form>
    )
}
export default CheckoutForm;
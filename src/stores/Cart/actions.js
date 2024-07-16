import * as types from "./constant";

export const addToCart = (product) => ({
    type: types.ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (productId) => ({
    type: types.REMOVE_FROM_CART,
    payload: productId,
});

//Checkout
export const checkout = (payload) => ({
    type:types.CHECKOUT,
    payload
});

export const checkoutSuccess = (payload) => ({
    type:types.CHECKOUT_SUCCESS,
    payload
});


export const checkoutFailure = (error) => ({
    type:types.CHECKOUT_FAILURE,
    error
});
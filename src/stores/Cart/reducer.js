import * as types from "./constant";

export const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    isCheckout: false,
    orderDetail: {},
    checkoutError: null,
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            const updatedCartItems = [...state.cartItems, action.payload];
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            return {...state, cartItems: updatedCartItems, orderDetail: {}};

        case types.REMOVE_FROM_CART:
            const filteredCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
            localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
            return {...state, cartItems: filteredCartItems};

        case types.CHECKOUT:
            return {
                ...state,
                isCheckout: true,
                checkoutError: null,
                orderDetail: {},
            };

        case types.CHECKOUT_SUCCESS:
            localStorage.removeItem('cartItems');
            return {
                ...state,
                isCheckout: false,
                cartItems:[],
                orderDetail:action.payload,
                checkoutError: null,
            };

        case types.CHECKOUT_FAILURE:
            return {
                ...state,
                isCheckout: false,
                checkoutError: action.error,
            };

        default:
            return state;
    }
};

export default CartReducer;
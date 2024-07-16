import * as types from "./constant";

export const initialState = {
    isCategoryWiseProductFetching: false,
    categoryWiseProducts: [],
    categoryWiseProductsError: null,
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_BY_CATEGORY_WISE:
            return {
                ...state,
                isCategoryWiseProductFetching: true,
                categoryWiseProducts: [],
                categoryWiseProductsError: null,
            };
        case types.GET_PRODUCTS_BY_CATEGORY_WISE_SUCCESS:
            return {
                ...state,
                isCategoryWiseProductFetching: false,
                categoryWiseProducts: action.payload,
            };

        case types.GET_PRODUCTS_BY_CATEGORY_WISE_FAILURE:
            return {
                ...state,
                isCategoryWiseProductFetching: false,
                categoryWiseProductsError: action.error,
            };

        default:
            return state;
    }
}

export default ProductReducer;
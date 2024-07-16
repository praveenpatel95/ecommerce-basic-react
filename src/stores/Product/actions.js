import * as types from "./constant";
export const getProductsByCategoryWise = (payload) => ({
    type:types.GET_PRODUCTS_BY_CATEGORY_WISE,
    payload
});

export const getProductsByCategoryWiseSuccess = (payload) => ({
    type:types.GET_PRODUCTS_BY_CATEGORY_WISE_SUCCESS,
    payload
});


export const getProductsByCategoryWiseFailure = (error) => ({
    type:types.GET_PRODUCTS_BY_CATEGORY_WISE_FAILURE,
    error
});
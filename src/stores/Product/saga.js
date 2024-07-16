import {call, put, takeLatest, all} from 'redux-saga/effects'
import api from "../../utils/api";
import {
    getProductsByCategoryWiseFailure,
    getProductsByCategoryWiseSuccess,
} from "./actions";
import {GET_PRODUCTS_BY_CATEGORY_WISE} from "./constant";

export function* sagaProductByCategoryWise({payload}) {
    try {
        const response = yield call(api().get, `/categories/with-products/`);
        if (response) {
            yield put(getProductsByCategoryWiseSuccess(response?.data));
        }
    } catch (e) {
        yield put(getProductsByCategoryWiseFailure(e.response?.data?.message));
    }
}

export function* sagaProductByCategoryWiseFlow() {
    yield takeLatest(GET_PRODUCTS_BY_CATEGORY_WISE, sagaProductByCategoryWise);
}

export default function* productSaga() {
    yield all([
        sagaProductByCategoryWiseFlow(),
    ]);
}
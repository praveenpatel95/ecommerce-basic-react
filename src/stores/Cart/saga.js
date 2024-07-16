import {call, put, takeLatest, all} from 'redux-saga/effects'
import api from "../../utils/api";
import {
    checkoutFailure,
    checkoutSuccess

} from "./actions";
import {CHECKOUT} from "./constant";

export function* sagaCheckout({payload}) {
    try {
        const response = yield call(api().post, `/checkout`, payload);
        if (response) {
            yield put(checkoutSuccess(response?.data));
        }
    } catch (e) {
        yield put(checkoutFailure(e.response?.data?.message));
    }
}

export function* sagaCheckoutFlow() {
    yield takeLatest(CHECKOUT, sagaCheckout);
}

export default function* checkoutSaga() {
    yield all([
        sagaCheckoutFlow(),
    ]);
}
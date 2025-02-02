import { all, fork  } from "redux-saga/effects";
import ProductSaga from "./Product/saga";
import CartSaga from "./Cart/saga";

export default function* rootSaga() {
    yield all([
        fork(ProductSaga),
        fork(CartSaga),
    ]);
}

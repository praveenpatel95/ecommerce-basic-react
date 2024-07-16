import {combineReducers} from "redux";
import ProductReducer from "./Product/reducer";
import CartReducer from "./Cart/reducer";


const rootReducer = combineReducers({
            ProductReducer,
            CartReducer,
        }
    )
;

export default rootReducer;

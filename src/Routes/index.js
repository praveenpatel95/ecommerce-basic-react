import {Route, Routes} from "react-router-dom";
import Home from '../Container/Home'
import WebLayout from "../Container/WebLayout";
import Checkout from "../Container/Checkout";

export default function MainRouter() {
    return (
        <Routes>
            <Route element={<WebLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Route>
        </Routes>
    )
}
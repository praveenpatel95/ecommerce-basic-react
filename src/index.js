import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import MainRouter from "./Routes";
import {Provider} from "react-redux";
import {persistor, store} from "./stores/store";
import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <MainRouter/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();

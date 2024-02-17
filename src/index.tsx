import React from 'react';
import './index.scss';
import {MainApp} from './apps/MainApp';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import {Provider} from "react-redux";
import store from "src/redux/store";
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <MainApp/>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();

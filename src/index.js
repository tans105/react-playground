import React from 'react';
import './index.css';
import App from './components/App';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';
import {render} from 'react-dom'

let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

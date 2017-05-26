import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes.js';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
// import { createHistory } from 'history';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={ hashHistory } routes={routes}></Router>
    </Provider>,
    document.getElementById('root')
);

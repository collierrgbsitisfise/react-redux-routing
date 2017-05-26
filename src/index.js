import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes.js';
import { Router, browseHistory } from 'react-router';
// import { createHistory } from 'history';


ReactDOM.render(
    <Router history={ browseHistory } routes={routes}></Router>,
    document.getElementById('root')
);

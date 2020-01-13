import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './Components/router';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./myStyle.css";
import jquery from "jquery";
window.$ = window.jQuery = jquery;
require("bootstrap");

ReactDOM.render(<Routers />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

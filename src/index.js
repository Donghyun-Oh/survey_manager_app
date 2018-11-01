import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import storeFactory from "./store";
import App from "./component/app";
import Login from "./component/ui/login"

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "../stylesheets/app.css";

const store = storeFactory();

const render =  () => ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
)
render();

// store.subscribe(() => {
//   console.log("subscribe");
// })

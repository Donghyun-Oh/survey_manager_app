import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./component/app";
import storeFactory from "./store";

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "animsition/dist/css/animsition.min.css"

import "../stylesheets/app.css";

const store = storeFactory();



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

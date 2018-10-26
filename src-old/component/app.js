import React, { Component } from "react";
import PropTypes from "prop-types";

import { Menu, NewColor, Colors } from "./container";

import "../../stylesheets/app.css";

const App = () => {
  return (
    <div className="app">
      <Colors />
    </div>
  );
};

//react-redux
export default App;

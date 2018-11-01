import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Login from "./ui/login";
import Sidebar from "./ui/sidebar";
import Page from "./ui/page";

const AppComponent = ({ userinfo}) => {
  if (!userinfo["사용자ID"]) {
    return <Login />;
  } else {
    return (
      <HashRouter>
        <div className="page-wrapper">
          <Sidebar />
          <Page />
        </div>
      </HashRouter>
    );
  }
};
const App = connect(
  state => {
    return {
      userinfo: { ...state.userinfo }
    };
  },
  null
)(AppComponent);

export default App;

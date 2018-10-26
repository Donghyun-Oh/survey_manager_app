import React, { Component } from "react";

import { SidebarContainer } from "./container";
import Page from "./ui/page";
const App = () => {
  return (
    <div className="page-wrapper">
      <SidebarContainer />
      <Page />
    </div>
  );
};
export default App;

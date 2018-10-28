import React, { Component } from "react";

import {SurveyContainer} from "./../container"
import SurveyEditor from "./surveyEditor";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="section-content section-content-p30">
        <div className="container-fluid">
          <div className="row">
            {/* <SurveyContainer /> */}
            <SurveyEditor/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
//https://colorlib.com/polygon/cooladmin/index.html

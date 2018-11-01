import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import SurveyEditor from "./surveyEditor";
import SurveyList from "./surveyList";
import DashBoard from "./dashboard";

const MainContent = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/surveys/new" component={SurveyEditor} />
      <Route exact path="/surveys" component={SurveyList} />
      <Route exact path="/surveys/:id" component={SurveyEditor} />
      <Route component={DashBoard} />
    </Switch>
  );
};
export default MainContent;

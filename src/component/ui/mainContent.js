import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { SurveyContainer } from "./../container";
import SurveyEditor from "./surveyEditor";
import SurveyList from "./surveyList";

import { Home, About, Events, Products, Contact } from "./pages";

const MainContent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/surveys/new" component={SurveyEditor} />
      <Route exact path="/surveys" component={SurveyList} />
    </Switch>
  );
};
export default MainContent;
//https://colorlib.com/polygon/cooladmin/index.html

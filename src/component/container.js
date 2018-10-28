import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'

import Sidebar from "./ui/sidebar";
import SurveyList from "./ui/surveyList"
import { toggleMenu } from "../actions";

export const SidebarContainer = connect(
  (state) => {
    return ({
      menus : [...state.menus].sort()
    })
  },
  (dispatch) => {
    return({
      onMenuToggle(id){
        dispatch(toggleMenu(id))
      }
    })
  }
)(Sidebar)

export const SurveyContainer = connect(
  (state) => {
    return ({
      surveys : [...state.surveys].sort()
    })
  },
  (dispatch) => {
    return({
    })
  }
)(SurveyList)


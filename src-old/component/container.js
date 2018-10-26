import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'

import AddColorForm from "./ui/addColorForm";
import SortMenu from "./ui/sortMenu";
import ColorList from "./ui/colorList";
import { addColor, sortColors, rateColor, removeColor } from "../actions";
import { sortFunction } from "../lib/array-helpers";

export const Colors = connect(
  (state) => {
    return({
      colors : [...state.colors].sort()
    })
  },
  (dispatch) => {
    return({
      onRate(id, rating){
        dispatch(rateColor(id, rating))
      }
    })
  }
)(ColorList)


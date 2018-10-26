import React, { Component } from "react";
import PropTypes from "prop-types";
import Color from './color'

import "../../../stylesheets/colorList.css";

const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) => {
  return (
    <div className="color-list">
      {colors.length === 0 ? (
        <p>색이 없습니다. (색을 추가해주세요)</p>
      ) : (
        colors.map(color => {
          return (
            <Color key={color.id} {...color}
              onRate={ rating => { console.log(rating); return onRate(color.id, rating)}}
              onRemove={() => onRemove(color.id)}
            />
          );
        })
      )}
    </div>
  );
};
ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}
export default ColorList;

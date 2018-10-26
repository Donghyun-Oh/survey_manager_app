import React, { Component } from "react";
import PropTypes from "prop-types";

import StarRating from "./starRating";
//import TimeAgo from "./timeAgo";
//import FaTrash from "react-icons/lib/fa/trash-o";

import "../../../stylesheets/color.css";

const Color = ({title, color, rating = 0, onRemove, onRate}) => {
  return (
    <section className="color">  
      <h1>{title}</h1>
      <button onClick={onRemove}>X</button>
      <div className="color" style={{ backgroundColor: color }} />
      <div>
        <StarRating starsSelected={rating} onRate={ onRate} />
      </div>
    </section>
  );
};

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

export default Color;

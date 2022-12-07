import React from "react";
import PropTypes from "prop-types";

function DreamDetail(props) {
  const { dream } = props;
  console.log(props);
  return(
    <React.Fragment>
      <h1>Dream Details</h1>
      <h3>{dream.date}</h3>
      <p>{dream.description}</p>
      <p>{dream.reflections}</p>
      <p>{dream.happyBefore}</p>
      <p>{dream.neutralBefore}</p>
      <p>{dream.sadBefore}</p>
      <p>{dream.symbols}</p>
    </React.Fragment>
  )
}

DreamDetail.propTypes = {
  dream: PropTypes.object
}

export default DreamDetail;
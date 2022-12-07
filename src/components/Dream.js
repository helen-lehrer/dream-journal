import React from "react";
import PropTypes from "prop-types";

function Dream(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenDreamClicked(props.id)}>
        <h3>{props.date}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Dream.propTypes = {
  date: PropTypes.instanceOf(Date)
}

export default Dream;
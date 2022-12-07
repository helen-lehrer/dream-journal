import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Dream(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenDreamClicked(props.id)}>
      <Link to="/dream-detail"><h3>{props.timeStamp.toDateString()}</h3></Link>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Dream.propTypes = {
  timeStamp: PropTypes.instanceOf(Date)
}

export default Dream;
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Dream(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenDreamClicked(props.id)}>
      <Link to="/dream-detail" class="dream-list-heading"><h3 class="dream-list-heading">{props.timeStamp.toDateString()}</h3></Link><span>Themes- {props.theme}</span>
      </div>
    </React.Fragment>
  );
}

Dream.propTypes = {
  timeStamp: PropTypes.instanceOf(Date),
  theme: PropTypes.string
}

export default Dream;
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Dream from "./Dream";

function DreamList(props){
  return (
    <React.Fragment>
      <Link to="/new-dream-form">Add New Dream</Link>
      {props.dreamList.map((dream)=>
      <Dream
      whenDreamClicked={props.onDreamSelection}
      date={dream.date}
      id={dream.id}
      key={dream.id}/>
      
      )}
    </React.Fragment>
  );
}

export default DreamList


DreamList.propTypes = {
  dreamList: PropTypes.array,
  onDreamSelection: PropTypes.func
}
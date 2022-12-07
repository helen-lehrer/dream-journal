import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DreamDetail(props) {
  const { dream, onClickingDelete } = props;
  return(
    <React.Fragment>
      <h1>Dream Details</h1>
      <p>{dream.theme}</p>
      <p>{dream.description}</p>
      <p>{dream.reflections}</p>
      <p>{dream.happyBefore}</p>
      <p>{dream.neutralBefore}</p>
      <p>{dream.sadBefore}</p>
      <p>{dream.symbols}</p>

      <Link to="/edit-dream-form"><button>Edit Dream</button></Link>

      <Link to="/dream-list"><button onClick={()=>onClickingDelete(dream.id)}>Delete Dream</button></Link>
  
    </React.Fragment>
  )
}

DreamDetail.propTypes = {
  dream: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default DreamDetail;
import React from "react";
import { Link } from "react-router-dom";

function DreamList(){
  return (
    <React.Fragment>
      <Link to="/new-dream-form">Add New Dream</Link>
      <h1>Dream List</h1>
    </React.Fragment>
  );
}

export default DreamList
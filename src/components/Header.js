import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <h1>Dream Journal</h1>
      <ul>
        <li>
          <Link to="/dream-list">Home</Link>
        </li>
        <li>
          <Link to="/">Register</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
        <li>
          <Link to="/sign-out">Sign Out</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header
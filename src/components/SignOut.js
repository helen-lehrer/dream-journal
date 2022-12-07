import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { signOut } from "firebase/auth";

function SignOut() {
  const [ signOutSuccess, setSignOutSuccess ] = useState(null);

  function doSignOut() {
  signOut(auth)
    .then(function() {
      setSignOutSuccess("You have successfully signed out!");
    }).catch(function(error) {
      setSignOutSuccess(`There was an error signing out: ${error.message}!`);
    });
  }
    
  return (
    <React.Fragment>
      <h1>Sign Out</h1>
      {signOutSuccess}
      <br />
      <button onClick={doSignOut}>Sign Out</button>
    </React.Fragment>
  );
}

export default SignOut
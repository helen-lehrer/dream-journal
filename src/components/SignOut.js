import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { signOut } from "firebase/auth";
import styled from 'styled-components';

const SignOutButton = styled.button`
  box-shadow:
    inset 0 0 50px #fff,      /* inner white */
    inset 20px 0 80px #f0f,   /* inner left magenta short */
    inset -20px 0 80px #0ff,  /* inner right cyan short */
    inset 20px 0 300px #f0f,  /* inner left magenta broad */
    inset -20px 0 300px #0ff, /* inner right cyan broad */
    0 0 50px #fff,            /* outer white */
    -10px 0 80px #f0f,        /* outer left magenta */
    10px 0 80px #0ff;         /* outer right cyan */
  }
`

function SignOut() {
  const [ signOutSuccess, setSignOutSuccess ] = useState(null);
  document.body.style = 'background: black;';

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
      {signOutSuccess}
      <br />
      <SignOutButton className="btn btn-secondary btn-lg" onClick={doSignOut}>Sign Out</SignOutButton>
    </React.Fragment>
  );
}

export default SignOut
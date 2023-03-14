import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import styled from 'styled-components';

const SignInHeader = styled.h1`
  font-family: 'Shadows Into Light', cursive;  
  font-size: 32px;
  text-align: center;
  color: black;
  margin: 1rem 0;
`

function SignIn(){
  const [signInSuccess, setSignInSuccess] = useState(null);

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`)
      });
  }

  return (
    <React.Fragment>
      <SignInHeader>Sign In</SignInHeader>
      {signInSuccess}
      <form onSubmit={doSignIn}>
        <div class='app-center-div'>
          <input
            class= 'inputs'
            type='text'
            name='signinEmail'
            placeholder='Email' />
          <input
            class= 'inputs'
            type='password'
            name='signinPassword'
            placeholder='Password' />
          <button class='app-button' type='submit'>Sign in</button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default SignIn
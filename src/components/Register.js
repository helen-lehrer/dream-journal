import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './../assets/css/fonts.css';
import styled from 'styled-components';

const RegisterHeader = styled.h1`
  font-family: 'Shadows Into Light', cursive;  
  font-size: 32px;
  text-align: left;
  color: black;
`

function Register(){

  const [signUpSuccess, setSignUpSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}!`)
      });
  }

  return (
  <React.Fragment>
    <RegisterHeader>Register</RegisterHeader>
    {signUpSuccess}
    <form onSubmit ={doSignUp}>
      <input
        type='text'
        name='email'
        placeholder='email' />
      <input
        type='password'
        name='password'
        placeholder='Password' />
      <button type='submit'>Sign up</button>
    </form>
  </React.Fragment>
  );
}

export default Register
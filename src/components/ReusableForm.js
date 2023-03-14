import React from "react";
import PropTypes from "prop-types"; 
import { useNavigate } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import { v4 } from 'uuid';
import styled from 'styled-components';
import iconAnxious from './../assets/images/icon-anxious.png';

const NewDreamHeader = styled.h2`
  font-family: 'Shadows Into Light', cursive;  
  font-size: 32px;
  text-align: center;
  color: black;
  margin: 1rem 0;
`
function ReusableForm(props) {
  const navigate = useNavigate();

  function handleFormSubmission(event) {
    event.preventDefault();
    props.onUpdating({
      description: event.target.description.value,
      reflections: event.target.reflections.value,
      theme: event.target.themes.value,
      symbols: event.target.symbols.value,
      sadBefore: event.target.sadBefore.value,
      neutralBefore: event.target.neutralBefore.value,
      happyBefore: event.target.happyBefore.value,
      timeStamp: serverTimestamp(),
      id: props.dream ? props.dream.id : v4()
    });
    navigate('/dream-list');
  }
    return (
      <React.Fragment>
        <form onSubmit={handleFormSubmission}>
        <div className='app-center-div'>
          <NewDreamHeader>How do you feel upon waking?</NewDreamHeader>
            <div className='checkbox-container'>
            <div>
                <input
                  className='checkboxes'
                  type='checkbox'
                  name='happyBefore'
                  id='happyBefore'
                  value='happy'/>
                <label 
                  className='labels'
                  htmlFor="happyBefore">happy / joyful / excited </label>
              </div>
              <div>
                <input
                  className='checkboxes'
                  type='checkbox'
                  name='sadBefore'
                  id='sadBefore'
                  value='sad'/>
                <label
                  className='labels' 
                  htmlFor="sadBefore">sad / scared / anxious </label>
              </div>
              <div>
                <input
                  className='checkboxes'
                  type='checkbox'
                  name='neutralBefore'
                  id='neutralBefore'
                  value='neutral'/>
                <label 
                  className='labels'
                  htmlFor="neutralBefore">neutral / other </label>
              </div>
            </div>
            <textarea
              className='inputs'
              type='text'
              name='description'
              placeholder='Describe your dream' />
            <textarea
              className='inputs'
              type='text'
              name='reflections'
              placeholder='Reflections' />
            <input
            className='inputs'
            type='text'
            name='themes'
            placeholder='Theme(s)' />
            <input
            className='inputs'
            type='text'
            name='symbols'
            placeholder='Signs or Symbols' />
            
            <button 
              className='app-button'
              type='submit'>Submit</button>
            </div>
          </form>
        </React.Fragment>
      )}
    
ReusableForm.propTypes ={
  onUpdating: PropTypes.func,
  dream: PropTypes.object
}
export default ReusableForm
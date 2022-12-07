import React from "react";
import PropTypes from "prop-types"; 
import { useNavigate } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import { v4 } from 'uuid';

function ReusableForm(props) {
  const navigate = useNavigate();

  function handleFormSubmission(event) {
    event.preventDefault();
    props.onUpdating({
      description: event.target.description.value,
      reflections: event.target.reflections.value,
      date: event.target.date.value,
      symbols: event.target.symbols.value,
      sadBefore: event.target.sadBefore.value,
      neutralBefore: event.target.neutralBefore.value,
      happyBefore: event.target.happyBefore.value,
      timeStamp: serverTimestamp(),
      id: props.dream ? props.dream.id : v4()
    });
    navigate('/dream-list');
  }
  console.log(props)
    return (
      <React.Fragment>
        <form onSubmit={handleFormSubmission}>
          <input
          type='text'
          name='description'
          placeholder='Describe your dream' />
          <input
          type='text'
          name='reflections'
          placeholder='Reflections' />
          <input
          type='text'
          name='symbols'
          placeholder='Signs or Symbols' />
          <input
          type='checkbox'
          name='sadBefore'
          id='sadBefore'
          value='sad'/>
          <label htmlFor="sadBefore">sad</label>
          <input
          type='checkbox'
          name='neutralBefore'
          id='neutralBefore'
          value='neutral'/>
          <label htmlFor="neutralBefore">neutral</label>
          <input
          type='checkbox'
          name='happyBefore'
          id='happyBefore'
          value='happy'/>
          <label htmlFor="happyBefore">happy</label>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date"></input>
          <button type='submit'>Submit</button>
          </form>
        </React.Fragment>
      )}
    
ReusableForm.propTypes ={
  onUpdating: PropTypes.func,
  dream: PropTypes.object
}
export default ReusableForm
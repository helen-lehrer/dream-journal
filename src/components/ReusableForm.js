import React from "react";
import PropTypes from "prop-types"; 

function ReusableForm(props) {

  function handleNewDreamFormSubmission(event) {
    event.preventDefault();
    props.onNewDreamCreation({
      description: event.target.description.value,
      reflections: event.target.reflections.value,
      date: event.target.date.value,
      symbols: event.target.symbols.value,
      sadBefore: event.target.sadBefore.value,
      neutralBefore: event.target.neutralBefore.value,
      happyBefore: event.target.happyBefore.value
    });
  }

  if (props.onNewDreamCreation) {
    return (
      <React.Fragment>
        <form onSubmit={handleNewDreamFormSubmission}>
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
    else if (props.onEditDream) {
    return (
      <React.Fragment>
      <h1>Edit Dream</h1>
      </React.Fragment>
    )}
}

ReusableForm.propTypes ={
  onNewDreamCreation: PropTypes.func,
  
}
export default ReusableForm
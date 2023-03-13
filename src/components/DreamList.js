import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Dream from "./Dream";
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { images } from './../constants';

const AddNewDreamLink = styled(Link)`
  padding: .5rem;
  text-decoration: none;
  box-shadow: 0px 0px 3px 1px white;
  border: none;
  background: #fed5f180;
  color: black;
  width: 20%;
  margin: 1rem auto;
  
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    color: #f4bbd8;
    background: black;
  }
`

const DreamListContainer = styled.div`
  // border-style: solid;
  border-radius: 10px;
  // border-color: #3333339f;

  padding: 1rem;
  margin: 1rem .5rem 0 .5rem;
  box-shadow: 0px 0px 3px 1px white;
  background: #fed5f180;
  width: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: 1rem auto;

`

function DreamList(props){
  return (
    <React.Fragment>
      <AddNewDreamLink 
        className="btn btn-secondary btn-sm"
        role="button"
        to="/new-dream-form"
        >Add New Dream</AddNewDreamLink>
      {props.dreamList.map((dream)=>
      <DreamListContainer>
      <Dream
      whenDreamClicked={props.onDreamSelection}
      timeStamp={dream.timeStamp}
      theme={dream.theme}
      id={dream.id}
      key={dream.id}
      />
      </DreamListContainer>
      )}
    </React.Fragment>
  );
}

export default DreamList


DreamList.propTypes = {
  dreamList: PropTypes.array,
  onDreamSelection: PropTypes.func
}
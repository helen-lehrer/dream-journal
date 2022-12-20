import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Dream from "./Dream";
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { images } from './../constants';

const AddNewDreamLink = styled(Link)`
  text-align: center;
  padding: .5rem;
  margin: 1rem;
  text-decoration: none;
  box-shadow: 0px 0px 3px 1px white;
  border: none;
  background: #fed5f180;
  color: black;
  font-weight: bold;
  &:hover{
    color: #f4bbd8;
    background: #3333339f;
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
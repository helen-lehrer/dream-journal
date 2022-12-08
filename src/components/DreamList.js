import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Dream from "./Dream";
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { images } from './../constants';

const AddNewDreamLink = styled(Link)`
  text-align: center;
  padding: 10px 10px;
  margin: 50px;
  text-decoration: none;
  box-shadow: 0px 0px 40px 15px #0ff;
  &:hover{
    color: #f4bbd8;
  }
`

function DreamList(props){
  return (
    <React.Fragment>
      <AddNewDreamLink 
        className="btn btn-secondary btn-lg"
        role="button"
        to="/new-dream-form"
        >Add New Dream</AddNewDreamLink>
      {props.dreamList.map((dream)=>
      <Dream
      whenDreamClicked={props.onDreamSelection}
      timeStamp={dream.timeStamp}
      theme={dream.theme}
      id={dream.id}
      key={dream.id}/>
      )}
    </React.Fragment>
  );
}

export default DreamList


DreamList.propTypes = {
  dreamList: PropTypes.array,
  onDreamSelection: PropTypes.func
}
import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import './../assets/css/fonts.css';

const DreamJournalHeader = styled.h1`
  font-family: 'Shadows Into Light', cursive;  
  font-size: 32px;
  text-align: center;
  color: black;
  padding: 10px;
`;

const Navbar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
`

const NavbarList = styled.li`
  float: left;
`

const NavbarLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover{
    color: #f4bbd8;
  }
`

function Header(){
  return (
    <React.Fragment>
      <DreamJournalHeader>Dream Journal</DreamJournalHeader>
      <Navbar>
        <NavbarList>
          <NavbarLink to="/dream-list">Home</NavbarLink>
        </NavbarList>
        <NavbarList>
          <NavbarLink to="/">Register</NavbarLink>
        </NavbarList>
        <NavbarList>
          <NavbarLink to="/sign-in">Sign In</NavbarLink>
        </NavbarList>
        <NavbarList>
          <NavbarLink to="/sign-out">Sign Out</NavbarLink>
        </NavbarList>
      </Navbar>
    </React.Fragment>
  );
}

export default Header
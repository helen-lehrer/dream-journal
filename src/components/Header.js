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
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-left-style: none;
  border-right-style: none;

`

const NavbarList = styled.li`
  float: left;
`

const NavbarLink = styled(Link)`
  display: block;
  color: black;
  padding: 0 1rem;
  margin: .1rem;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    color: white;
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
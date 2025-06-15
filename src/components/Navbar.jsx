import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { StyledButton } from './Button'
import { Link } from 'react-router'

const StyledNavContainer = styled.nav`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 5px;
    color: black;
    padding: 5px;
      
    
`


const StyledLinks = styled.a`
    color: black;
    margin-top: 40px;
    font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif;
    font-size: large;
    margin-right: 25px;
    text-decoration: none;
    &:hover{ color:#2f53d7;
            };

`

const StyledLink =styled(Link)`
  height: 3%;
  width: 6%;
  margin-top: 30px;
  padding: 8px;
  background-color: black;
  border-radius: 15%;
  margin-right: 40px;
  text-align: center;
  text-decoration: none;
  color: white;
  border: 1px solid white;
  &:hover{ color: #7c98ff;
           background-color:white;
           border: 1px solid black;
            };
  
`
const StyledNavButton = styled.button`
  height: 3%;
  width: 6%;
  margin-top: 30px;
  padding: 8px;
  background-color: black;
  border-radius: 10%;
  margin-right: 40px;
  text-align: center;
  text-decoration: none;
  color: white;
  border: 1px solid white;
  &:hover{ color: black;
           background-color: white;
           border: 1px solid black;
            };
`


const Navbar = ({state , setState}) => {
  return (
    <StyledNavContainer>
      { state? <StyledNavButton onClick={(event)=> {
      event.stopPropagation();
      event.preventDefault();
      localStorage.setItem('isLogged' , 'false');
      setState(false);
      }}><b>Log out</b></StyledNavButton> 
                      :
      <StyledLink to="/login"><b>Login</b></StyledLink>
      }
        <StyledLinks href="#report"><b>Report</b></StyledLinks> 
        <StyledLinks href="#history"><b>History</b></StyledLinks>
        <StyledLinks href="#contact"><b>Contact Us</b></StyledLinks>      
    </StyledNavContainer>
  )
}

export default Navbar
import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { StyledButton } from './Button'

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

`
const StyledNavButton = styled(StyledButton)`
  height: 3%;
  width: 6%;
  margin-top: 30px;
  padding: 10px;
  background-color: black;
  border-radius: 10%;
  margin-right: 40px;
`
const Styleda = styled.a`
  color: Black;
  text-decoration: none;
  
`


const Navbar = () => {
  return (
    <StyledNavContainer>
      <StyledNavButton><b>{"Login"}</b></StyledNavButton>
        <StyledLinks><Styleda href="#report"><b>{"Report"}</b></Styleda></StyledLinks> 
        <StyledLinks><Styleda href="#history"><b>{"History"}</b></Styleda></StyledLinks>
        <StyledLinks><Styleda href="#contact"><b>{"Contact Us"}</b></Styleda></StyledLinks>      
    </StyledNavContainer>
  )
}

export default Navbar
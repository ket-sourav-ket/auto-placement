import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { StyledButton } from './Button'

const StyledNavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    border-radius : 15px;
    background-color : #dcdee0;
    padding: 5px;
    
`

const StyledLogo = styled.img`
    flex-basis: 5%;
    min-width : 0px;
    height: auto;
    border-radius: 50%;
`

const StyledLinks = styled.a`
    flex-basis: 15%;
    align-self: center;
`
const StyledNavButton = styled(StyledButton)`
  height: 10%;
  align-self: center;
`

const StyledSpan = styled.span`
  margin-right : auto;
  align-self : center;
`
const Navbar = () => {
  return (
    <StyledNavContainer>
        <StyledLogo src={logo} alt='logo' />
        <StyledSpan>{'Automated Placement'}</StyledSpan>

        <StyledLinks>{"About Us"}</StyledLinks>
        <StyledLinks>{"Contact Us"}</StyledLinks>
        <StyledLinks>{"Placement History"}</StyledLinks>
        <StyledNavButton>{"Login/Register"}</StyledNavButton>

    </StyledNavContainer>
  )
}

export default Navbar
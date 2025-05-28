import React from 'react'
import styled from 'styled-components'


export const StyledButton = styled.button`
    border: solid;
    border-radius: 3px;
    background-color: #2218ba;
    padding: 3px;
    display: flex;
    color: white;
    border: black;
    justify-content: center;
    
`
const Button = ({children , type , name , value , handleClick}) => {
  return (
    <StyledButton onClick={handleClick} name={name} value={value} type={type}>{children}</StyledButton>
  )
}

export default Button
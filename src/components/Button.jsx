import React from 'react'
import styled from 'styled-components'


export const StyledButton = styled.button`
    border-radius: 15px;
    background-color: white;
    padding: 3px;
    border-color: white;
    display: flex;
    font-family: cursive;
    color: #7c98ff;
    justify-content: center;
    
`
const Button = ({children , type , name , value , handleClick}) => {
  return (
    <StyledButton onClick={handleClick} name={name} value={value} type={type}>{children}</StyledButton>
  )
}

export default Button
import React from 'react'
import styled from 'styled-components'


export const StyledButton = styled.button`
    border-radius: 10px;
    background-color: black;
    padding: 3px;
    border-color: white;
    display: flex;
    font-family: sans-serif;
    color: #7c98ff;
    justify-content: center;
    &:hover{ color: black;
           background-color:#cdd3db;
           border: 1px solid black;
            };
    
`
const Button = ({children , type , name , value , handleClick}) => {
  return (
    <StyledButton onClick={handleClick} name={name} value={value} type={type}>{children}</StyledButton>
  )
}

export default Button
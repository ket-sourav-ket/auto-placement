import React from 'react'
import styled from 'styled-components'


export const StyledButton = styled.button`
    border-radius: 10px;
    background-color: black;
    padding: 3px;
    border-color: white;
    display: flex;
    font-family: sans-serif;
    color: white;
    justify-content: center;
    &:hover{ color: white;
           background-color:#7c98ff;
           border: 1px solid black;
            };
    
`
//#7c98ff

const Button = ({children , type , name , value , handleClick}) => {
  return (
    <StyledButton onClick={handleClick} name={name} value={value} type={type}>{children}</StyledButton>
  )
}

export default Button
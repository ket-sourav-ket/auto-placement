import React from 'react'
import styled from 'styled-components'


export const StyledButton = styled.button`
    border: solid;
    border-radius: 3px;
    padding: 3px;
    display: flex;
    justify-content: center;
    
`
const Button = ({children , type , name , value}) => {
  return (
    <StyledButton name={name} value={value} type={type}>{children}</StyledButton>
  )
}

export default Button
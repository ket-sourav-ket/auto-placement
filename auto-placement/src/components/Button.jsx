import React from 'react'
import styled from 'styled-components'


export const StyledButton = styled.button`
    border: solid;
    border-radius: 3px;
    padding: 3px;
    display: flex;
    
`
const Button = ({children}) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default Button
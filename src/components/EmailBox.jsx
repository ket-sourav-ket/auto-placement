import React from 'react'
import styled from 'styled-components'

const StyledListContainer = styled.div`
border : solid;
border-color : black;
border-radius : 5px;
padding: 8px;    
height: 200px;
overflow: auto;
overscroll-behavior: contain;
background: white;
flex-direction : column;
justify-content : flex-end;
`;

import Student from './Student';


const EmailBox = ({list}) => {
  return (
    <StyledListContainer>

      <ul>
        {list.map((item) => <Student key={item.objectID} name = {item.name} email={item.email} stream={item.stream}/>)}
      </ul>

    </StyledListContainer>
    
  )
}

export default EmailBox
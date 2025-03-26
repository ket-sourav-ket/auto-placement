import React from 'react'
import styled from 'styled-components';

const StyledItem = styled.li`
 display: flex;
 align-items: center;
 padding: 1px;
`;



const StyledColumn = styled.span`
padding: 0 5px;
white-space: nowrap;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
a {
color: inherit;
}
width: ${(props) => props.width};
`;

const Student = ({name , email , stream}) => {
  return (
    <StyledItem>
        <StyledColumn width = "30%">{name}</StyledColumn>
        <StyledColumn width = "10%">{stream}</StyledColumn>
        <StyledColumn width = "60%">{email}</StyledColumn>
    </StyledItem>
  )
}

export default Student
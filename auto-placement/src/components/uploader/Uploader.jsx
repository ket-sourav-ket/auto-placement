import React from 'react'
import styled from 'styled-components'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { StyledButton } from '../Button'

const StyledBlueBox = styled.div`
display : flex;
flex-direction: column;
flex-basis: 80%;
background-color: #97caf6;
border-radius: 5px;
border: dashed;
margin-left: auto;
border-color: #075599;
justify-content: center;
align-items: center;
`

const StyledUploadButton = styled(StyledButton)`
  flex-basis: 20%;
  justify-content: center;
  align-items: center;
`

const StyledUploadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 2px;
`
const Uploader = () => {
  return (
    <StyledUploadContainer>
      <StyledBlueBox>
        <MdCloudUpload />
        <span>{"browse files to upload"}</span>
        
      </StyledBlueBox>
      <StyledUploadButton>{"search"}</StyledUploadButton>
    </StyledUploadContainer>
  )
}

export default Uploader
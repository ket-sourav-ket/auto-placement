import React from 'react'
import EmailBox from './components/EmailBox'
import Student from './components/Student'
import UploadBox from './components/uploader/UploadBox'
import styled from 'styled-components'
import Button from './components/Button'
//import job1 from 'C:/Users/SMRITIKANA/Downloads/flower.jpeg'

const StyledAppContainer = styled.div`
  display: flex;
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  justify-content: space-around;
`
const StyledRightDiv = styled.div`
display: flex;
flex-direction: column;
`
const StyledLeftDiv = styled.div`
  display: flex;
  justify-content: stretch;
  background-color: yellow;
`

const App = () => {
  const list = [{name : "dona" , email : "donahappytoday@gmail.com" , stream : "MCA"}];
  return (

    <StyledAppContainer>
      <StyledLeftDiv>image</StyledLeftDiv>
      <StyledRightDiv> 

      <UploadBox />
      <EmailBox list={list} />
      <Button>Send Mail</Button>
      </StyledRightDiv>
      
    </StyledAppContainer>
    

    
  )
}

export default App

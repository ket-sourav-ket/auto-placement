import React from 'react'
import EmailBox from './components/EmailBox'
import Student from './components/Student'
import UploadBox from './components/uploader/UploadBox'
import styled from 'styled-components'

const StyledAppContainer = styled.div`
  display: flex;
  background: linear-gradient(to right, #bdc3c7, #2c3e50);

`

const App = () => {
  const list = [{name : "dona" , email : "donahappytoday@gmail.com" , stream : "MCA"}];
  return (

    <StyledAppContainer>
      <EmailBox list={list} />
      <UploadBox />
    </StyledAppContainer>

    
  )
}

export default App

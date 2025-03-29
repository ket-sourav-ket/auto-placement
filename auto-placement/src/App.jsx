import React from 'react'
import EmailBox from './components/EmailBox'
import Student from './components/Student'
import UploadBox from './components/uploader/UploadBox'
import styled from 'styled-components'
import Button from './components/Button'
import Uploader from './components/uploader/Uploader'
import InfoBox from './components/InfoBox'
import Navbar from './components/Navbar'
//import job1 from 'C:/Users/SMRITIKANA/Downloads/flower.jpeg'
import job1 from './assets/background1.jpg'
import uploadImg from './assets/uploaderImg.png'
import infoImg from './assets/infoImage.png'
const StyledAppContainer = styled.div`
  display: grid;
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 6rem 16rem 1fr;
  grid-template-areas:
  'navbar navbar'
  'leftTop rightTop'
  'here rightBottom';
  background: url(${job1});
  background-repeat : no-repeat;
  background-size : cover;
  border-radius: 5px
`



const PositionInfoBox = styled.div`
  grid-area: here;
`
const StyledRightDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: stretch;
grid-area: rightTop;
padding-right: 5px;
`
const StyledLeftImg = styled.img`
  margin-left: 5%;
  width: 35%;
  border-radius: 6px;
  grid-area : leftTop;

`
const PositionNavBar = styled.div`
  grid-area: navbar;
  
`

const App = () => {
  const list = [{name : "Name" , email : "students@gmail.com" , stream : "MCA"}];
  return (
    <>
    

    
    
    <StyledAppContainer>
      
      <PositionNavBar>
      <Navbar/>
      </PositionNavBar>
      <StyledLeftImg src={infoImg} alt='infoimage'/>
      <StyledRightDiv> 
      <Uploader/>
      <EmailBox list={list} />
      <Button>Send Mail</Button>
      </StyledRightDiv>

      <PositionInfoBox>
        <InfoBox/>
      </PositionInfoBox>

      
      
    </StyledAppContainer>

    
    </>
    

    
  )
}

export default App

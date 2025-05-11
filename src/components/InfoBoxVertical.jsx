import React from 'react'
import styled from 'styled-components'
import infoImage from '../assets/infoImage.png'

const StyledInfoFlex = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #dcdee0;
    padding-left: 3%;
    padding-right: 3%;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0 .4rem .8rem #0005;
`

const StyledImage = styled.img`
    margin-top: 5%;
    width: 70%;
`

const StyledInfo = styled.span`
    padding: 10%;
    margin-top: 10%;
    margin-bottom: 5%;
`
const InfoBoxVertical = () => {
  return (
    <StyledInfoFlex>
        <StyledImage src={infoImage} alt='info' />
        <StyledInfo>
            seamless coordination of placement activities. Automate emails and data updates and view history of
            company activities all from one place. Secure and reliable placement solution which is easy to use and maintain.
        </StyledInfo>
    </StyledInfoFlex>
  )
}

export default InfoBoxVertical
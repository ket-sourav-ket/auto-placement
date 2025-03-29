import React from 'react'
import styled from 'styled-components'
import promo from '../assets/infoImage.png'

const StyledInfoContainer = styled.div`
    padding-left : 3%;
    padding-right : 3%;
    display: grid;
    width: 60%;
    height: auto;
    border-radius: 5px;
    margin: 5px;
    background-color: #dcdee0;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas: 
    'main-info right-img'
    'info info';
`

const StyledImage = styled.img`
    grid-area: right-img;
    width: 70%;
    justify-self: end;
    align-self: center;
    height: auto;
`
const StyledInfo = styled.span`
    grid-area: main-info;
    align-self: center;
    justify-self: center;
    padding: 10px;
`

const StyledSubInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    grid-area: info;
`
const StyledHeadBar = styled.div`
  width: 40px;
  height: 3px;
  background: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
  margin-bottom: 0.25rem;
`

const StyledSubInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoBox = () => {
  return (
    <StyledInfoContainer>
            <StyledImage src={promo} alt='promo'/>
            <StyledInfo>
              seamless coordination of placement activities. Automate emails and data updates and view history of
              company activities all from one place. Secure and reliable placement solution which is easy to use and maintain.
            </StyledInfo>
            <StyledSubInfoContainer>
              <StyledSubInfo>
                <StyledHeadBar/>
                <h3>Automation</h3>
                <p>Hassle free automation of placement activities</p>
              </StyledSubInfo>

              <StyledSubInfo>
                <StyledHeadBar/>
                <h3>Reliable</h3>
                <p>Modern and robust way to communicate with students</p>
              </StyledSubInfo>

              <StyledSubInfo>
                <StyledHeadBar/>
                <h3>Manage</h3>
                <p>Manage company data and activity seamlessly</p>
              </StyledSubInfo>
            </StyledSubInfoContainer>

    </StyledInfoContainer>
  )
}

export default InfoBox
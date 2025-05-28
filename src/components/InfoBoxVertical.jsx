import React from 'react'
import styled from 'styled-components'
import infoImage from '../assets/gemini2.png'

const StyledInfoFlex = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #dcdee0;
    padding-left: 3%;
    padding-right: 3%;
    margin-top: 5%;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0 .4rem .8rem #0005;
`

const StyledImage = styled.img`
    margin-top: 10%;
    width: 60%;
    
`

const StyledInfo = styled.span`
    padding: 2%;
    margin-top: 5%;
    margin-bottom: 13%;
`
const InfoBoxVertical = () => {
//   return (
//     <StyledInfoFlex>
//         <StyledImage src={infoImage} alt='info' />
//         <StyledInfo>
//             Seamless coordination of placement activities. Automate emails and data updates and view history of
//             company activities all from one place. Secure and reliable placement solution which is easy to use and maintain.
//         </StyledInfo>
//     </StyledInfoFlex>
//   )
}

export default InfoBoxVertical
import React from 'react'
import styled from 'styled-components'
import { StyledHeadBar } from './InfoBox'

const StyledH2 = styled.h2`
    margin-top: 20px;
    margin-bottom: 0;
    padding: 0;
`

const Footer = () => {
  return (
    <div>
        <StyledH2>Contact Us</StyledH2>
        <StyledHeadBar width = '15%' />
        <span>
            Mail:  tpo@college.org.import.in
            <br />
            Phone: 789456123
        </span>
        <StyledH2>Site Maintainers</StyledH2>
        <StyledHeadBar width = '15%'/>
        <span>
            Smritikana Bandopadhaya
            <br/>
            Sourabh Saha
        </span>
    </div>
  )
}

export default Footer
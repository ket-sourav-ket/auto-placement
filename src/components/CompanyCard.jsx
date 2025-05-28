import React from 'react'
import styled from 'styled-components'
import { MdWork } from "react-icons/md"
import defaultLogo from '../assets/office-building-svgrepo-com.svg'

const StyledCardContainer = styled.div`
    display: grid;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 1px;
    grid-template-columns: 1fr 2fr;
    background-color: #fff5;
    backdrop-filter: blur(7px);
    color: black;
    justify-items: stretch;
    align-items: stretch;
    grid-template-areas: 
      'logo name'; 
`

export const StyledImage = styled.img`
  border-radius: 5px;
  grid-area : logo;
  height: 90px;
  padding: 5px ;
  width: auto;
  grid-area: logo;
`
export const StyledNameSpan = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-area : name;
  padding-left: 5%;
  padding-bottom: 0%;
  grid-area: name;
`
/*const StyledRoleSpan = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left:5%;
  grid-area : Rrole;
  padding-top: 0px;
` */


const CompanyCard = ({data}) => {
  data = data ?? { logo : defaultLogo,
                   name : 'XYZ',
                   address : 'somewhre far away \nPIN:700001',
                   role: 'software engineer',
                   CTC: '5 LPA variable'
  }
  return (
    <StyledCardContainer>
      <StyledImage src={data.logo} alt='company-logo'/>
      <StyledNameSpan>
        <p><b> {data.name} </b> <br/> <br/>  {data.address} </p>
         <p>
          {data.role} <br />{data.CTC}
        </p>
      </StyledNameSpan>

    </StyledCardContainer>
    
  )
}

export default CompanyCard
import React from 'react'
import styled from 'styled-components'
import { MdWork } from "react-icons/md"
import defaultLogo from '../assets/office-building-svgrepo-com.svg'

const StyledCardContainer = styled.div`
    display: grid;
    height: auto;
    width: auto;
    border-radius: 5px;
    padding: 3px;
    grid-template-columns: 2fr 5fr;
    grid-template-rows: 1fr 1fr;
    background-color: #fff5;
    backdrop-filter: blur(7px);
    color: black;
    grid-template-areas: 
      'logo name'
      'role role'; 
`

export const StyledImage = styled.img`
  border-radius: 5px;
  grid-area : logo;
  height: 50px;
  width: auto;
`
export const StyledNameSpan = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-area : name;
`
const StyledRoleSpan = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-area : role;
`


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
        <p> <b>{data.name}</b><br />{data.address}  </p>
      </StyledNameSpan>

      <StyledRoleSpan>
        <p>{data.role} <br />{data.CTC} </p>
      </StyledRoleSpan>
    </StyledCardContainer>
    
  )
}

export default CompanyCard
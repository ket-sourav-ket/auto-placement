import React from 'react'
import styled from 'styled-components'
import CompanyCard from './CompanyCard'


const StyledCompanyContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-radius: 5px;
    background-color: rgb(0 0 0 / 0);
    padding: 3px;
    gap: 5px;
`

const CompanyBrowser = () => {
  return (
    <StyledCompanyContainer>
      <CompanyCard data={null}/>
      <CompanyCard data={null}/>
      <CompanyCard data={null}/>
      <CompanyCard data={null}/>
      <CompanyCard data={null}/>
      <CompanyCard data={null}/>
      <CompanyCard data={null}/>
      <CompanyCard data={null}/>
    </StyledCompanyContainer>
  )
}

export default CompanyBrowser
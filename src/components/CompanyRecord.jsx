import React from 'react'
import styled from 'styled-components'
import { StyledImage,  StyledNameSpan } from './CompanyCard'
import defaultLogo from '../assets/office-building-svgrepo-com.svg'
import searchLogo from '../assets/search-alt-2-svgrepo-com.svg' 
import cognizant from '../assets/cognizant.png'

const StyledRecordView = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: 0.5fr 2fr;
    grid-template-areas: 
    'logo name search-bar'
    'records records records';
    align-items: center;
`
const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: search-bar;
  justify-content: flex-end;
  
  margin: 0;
  padding: 0;
`
const StyledSearchImage = styled.img`
  height: 20px;
`
const StyledSearchInput = styled.input`
  border-radius: 5px;
  height: 20px;
`

const StyledTableFrame = styled.table`
    background-color: #fff5;

    backdrop-filter: blur(7px);
    box-shadow: 0 .4rem .8rem #0005;
    border-radius: .8rem;
    
    overflow: auto;
    grid-area: records;

    border-collapse: collapse;
    
    
`
const StyledHeader = styled.thead`
    background-color: #d5d1defe;
    cursor: pointer;
    text-transform: capitalize;
  
`

const StyledTh = styled.th`
  border-collapse: collapse;
  padding: 1rem;
  text-align: left;
`
const StyledTd = styled.td`
  border-collapse: collapse;
  padding: 1rem;
  text-align: left;
`

const StyledImg = styled.img`
    width: 36px;
    height: 36px;
    margin-right: .5rem;
    border-radius: 50%;

    vertical-align: middle;
`
const StyledRow = styled.tr`
  &:hover {
    background-color: #fff6 !important;
    }

  &:nth-child(even) {
    background-color: #0000000b;
    }
`
const StyledHeaderImage = styled(StyledImage)`
  margin: 0;
  padding: 10px;
  //height: 60%;
`
const StyledHeaderNameSpan = styled(StyledNameSpan)`
  margin : 0;
  padding: 0;
  font-family: Georgia, 'Times New Roman', Times, serif; 
  font-size: 30px;
  width: 420%;
`
const StyledInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  grid-row: 1;
  background-color: #d5d1defe;
  grid-column: 1 / 4;
  margin: 0;
  padding: 0;
`

const CompanyRecord = () => {
  return (
    <StyledRecordView>
    
      <StyledHeaderImage src={cognizant} alt='companyLogo' />
      <StyledHeaderNameSpan>{'2025 batch Selected Candidates: '}</StyledHeaderNameSpan>
      <StyledSearchBar>
        <StyledSearchImage src={searchLogo} alt='serch-logo' />
        <StyledSearchInput placeholder='Search...' />
      </StyledSearchBar>
      <StyledTableFrame>
        <StyledHeader>
          <StyledRow>
            <StyledTh style={{borderTopLeftRadius : '0.8rem'}} >Name</StyledTh>
            <StyledTh>Roll</StyledTh>
            <StyledTh>Branch</StyledTh>
            <StyledTh>Role</StyledTh>
            <StyledTh style={{borderTopRightRadius: '0.8rem'}}>Package</StyledTh>
          </StyledRow>
        </StyledHeader>
        <tbody>
          <StyledRow>
            <StyledTd>Debrup Nandi</StyledTd>
            <StyledTd>CSE2021025</StyledTd>
            <StyledTd>BTech (CSE)</StyledTd>
            <StyledTd>GEN Z Next</StyledTd>
            <StyledTd>6.5LPA</StyledTd>
          </StyledRow>
          <StyledRow>
            <StyledTd>Debdyuti Paul</StyledTd>
            <StyledTd>IT2021032 </StyledTd>
            <StyledTd>BTech (IT)</StyledTd>
            <StyledTd>GEN Z Pro</StyledTd>
            <StyledTd>5.4LPA</StyledTd>
          </StyledRow>
          <StyledRow>
            <StyledTd>Shruti Shaw</StyledTd>
            <StyledTd>MCA2023044</StyledTd>
            <StyledTd>MCA</StyledTd>
            <StyledTd>GEN Z Pro</StyledTd>
            <StyledTd>5.4LPA</StyledTd>
          </StyledRow>
          <StyledRow>
            <StyledTd>Ranajit Samanta</StyledTd>
            <StyledTd>MCA2023037</StyledTd>
            <StyledTd>MCA</StyledTd>
            <StyledTd>GEN Z</StyledTd>
            <StyledTd>4LPA</StyledTd>
          </StyledRow>
          <StyledRow>
            <StyledTd>Avik Chakraborty</StyledTd>
            <StyledTd>MCA2023011</StyledTd>
            <StyledTd>MCA</StyledTd>
            <StyledTd>GEN Z</StyledTd>
            <StyledTd>4LPA</StyledTd>
          </StyledRow>
        </tbody>
      </StyledTableFrame>
    </StyledRecordView>
  )
}

export default CompanyRecord
import React from 'react'
import styled from 'styled-components'
import { StyledImage,  StyledNameSpan } from './CompanyCard'

const StyledRecordView = styled.div`
    display: grid;
    border-radius: 5px;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-areas: 
    'records records records';
    align-items: center;
    overflow-y: auto;
    max-height: 60%;
    max-width: 160%;
`

const StyledTableFrame = styled.table`
    background-color: #fff5;

    backdrop-filter: blur(20px);
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
    position: sticky;
    top: 0;
  
`

const StyledTh = styled.th`
  border-collapse: collapse;
  padding: 0.5rem;
  text-align: left;
`
const StyledTd = styled.td`
  border-collapse: collapse;
  padding: 0.5rem;
  text-align: left;
`

const StyledRow = styled.tr`
  &:hover {
    background-color: #fff6 !important;
    }

  &:nth-child(even) {
    background-color: #0000000b;
    }
`



const Table = ({list}) => {
  return (
    <StyledRecordView>
    <StyledTableFrame>
        <StyledHeader>
            <StyledRow>
               {/* <StyledTh>Student Name</StyledTh>
                <StyledTh>Stream</StyledTh>
                <StyledTh>Personal Mail</StyledTh> */}
                {
                  Object.keys(list[0] ?? {}).map(function(value){
                    return <StyledTh>{value.replace(/_/g , ' ').toUpperCase()}</StyledTh>
                  })
                
                }

            </StyledRow>
        </StyledHeader>
        
            <tbody>
            {list.map(function(item){
                return <StyledRow>
                        {
                            Object.values(item).map(function(value){
                                return <StyledTd>{value}</StyledTd>
                            })
                        }

                       </StyledRow>
            })}
            </tbody>
        

    </StyledTableFrame>
    </StyledRecordView>
    
  )
}

export default Table
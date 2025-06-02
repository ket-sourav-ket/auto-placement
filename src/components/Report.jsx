import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Table from './Table'
import DropBox from './DropBox'
import { StyledButton } from './Button'

const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color:#cdd3db;
  border-radius: 5px;
  margin-bottom: 10px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color:#cdd3db;
  border-radius: 5px;
  margin-top: 10px;
`




const Report = () => {
  const [selected , setSelected] = useState('null');
  const streamList = ['CA' , 'CSE' , 'IT' , 'ECE'];
  const yearList = ['2025' , '2024' , '2023', ' 2022', '2020']
  const list = []
  return (
    <ReportContainer>
      <FilterContainer>
        <DropBox selected={selected} setSelected={setSelected} name={'stream'} options={streamList} width={'20%'}/>
        <DropBox selected={selected} setSelected={setSelected} name={'year'} options={yearList} width={'20%'}/>
      </FilterContainer>
      <Table list={list} />
      <ButtonContainer>
        <StyledButton>Search</StyledButton>
        <StyledButton>Download PDF</StyledButton>
      </ButtonContainer>
    </ReportContainer>
  )
}

export default Report
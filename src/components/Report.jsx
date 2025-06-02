import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Table from './Table'
import DropBox from './DropBox'
import { SalaryBox } from './DropBox'
import { StyledButton } from './Button'

const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  const streamList = ['CA' , 'CSE' , 'IT' , 'ECE' , 'AIML', 'EE' , 'DSC'];
  const yearList = ['2025' , '2024' , '2023', ' 2022', '2021','2020' , '2020 and earlier']
  const companyList =['Accenture' , 'LTIMindtree' , 'Cognizant' , 'TCS' , 'Hashedin' , 'Kreeti Technologies' , 'BMC software' ,'GT Bharat' , 'HCL']
  const genderList = ['Male', 'Female' , 'Others']
  const list = []
  return (
    <ReportContainer>
      <FilterContainer>
        <DropBox selected={selected} setSelected={setSelected} name={'stream'} options={streamList} width={'20%'}/>
        <DropBox selected={selected} setSelected={setSelected} name={'year'} options={yearList} width={'20%'}/>
        <DropBox selected={selected} setSelected={setSelected} name={'company'} options={companyList} width={'20%'}/>
        <DropBox selected={selected} setSelected={setSelected} name={'gender'} options={genderList} width={'20%'}/>
        <SalaryBox selected={selected} setSelected={setSelected} name={'salary'} width={'20%'} />
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
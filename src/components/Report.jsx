import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Table from './Table'
import DropBox from './DropBox'
import { SalaryBox } from './DropBox'
import { StyledButton } from './Button'
import { Form, useSubmit } from 'react-router'

const StyledReportButton = styled(StyledButton)`
  margin-right: 10px;
  &:last-of-type{
    margin-right: 0px;
  }
`

const ReportContainer = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #cdd3db;
`
const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color:#cdd3db;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color:#cdd3db;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 5px;
`
const StyledHr = styled.hr`
  border: none;
  border-top: 3px double black;
  color: black;
  overflow: visible;
  text-align: center;
  width: 95%;
  height: 5px;
`

export async function reportAction({request , params}){
  const formData = await request.formData();
  console.log("inside report action");
  
  for(let val of formData.values())
  {
    console.log(val)
  }

}


const Report = () => {
  const [submitData , setSubmitData] = useState({
    stream : [],
    year: [],
    company: [],
    gender: [],
    low: 0,
    high: 0
  })
  const handleSumbit = (event)=>{
    event.preventDefault();
    event.stopPropagation();
   // let submit = useSubmit();
    let formData = new FormData();
    formData.append('low' , submitData['low']);
    formData.append('high' , submitData['high']);
    for(let key in submitData)
    {
      if(key !== 'low' && key !== 'high')
      {
        for(let value of submitData[key])
          formData.append( key , value);
      }
    }
    for(let value of formData.entries())
      console.log( value)
  }
  const [selected , setSelected] = useState('null');
  const streamList = ['CA' , 'CSE' , 'IT' , 'ECE' , 'AIML', 'EE' , 'DSC'];
  const yearList = ['2025' , '2024' , '2023', ' 2022', '2021','2020' , '2020 and earlier']
  const companyList =['Accenture' , 'LTIMindtree' , 'Cognizant' , 'TCS' , 'Hashedin' , 'Kreeti Technologies' , 'BMC software' ,'GT Bharat' , 'HCL']
  const genderList = ['Male', 'Female' , 'Others']
  const list = []
  return (
    <ReportContainer>
      <Form action='/report' method='post' onSubmit={handleSumbit}>
      <FilterContainer >
        <DropBox selected={selected} setSelected={setSelected} name={'stream'} options={streamList} width={'20%'} submitData={submitData} setSubmitData={setSubmitData}/>
        <DropBox selected={selected} setSelected={setSelected} name={'year'} options={yearList} width={'20%'} submitData={submitData} setSubmitData={setSubmitData}/>
        <DropBox selected={selected} setSelected={setSelected} name={'company'} options={companyList} width={'20%'} submitData={submitData} setSubmitData={setSubmitData}/>
        <DropBox selected={selected} setSelected={setSelected} name={'gender'} options={genderList} width={'15%'} submitData={submitData} setSubmitData={setSubmitData}/>
        <SalaryBox selected={selected} setSelected={setSelected} name={'salary'} width={'10%'} submitData={submitData} setSubmitData={setSubmitData}/>
      </FilterContainer>
      <ButtonContainer>
        <StyledReportButton type='submit'>Search</StyledReportButton>
        <StyledReportButton>Download PDF</StyledReportButton>
      </ButtonContainer>
      </Form>
      <StyledHr />
      <Table list={list} />
      
    </ReportContainer>
  )
}

export default Report
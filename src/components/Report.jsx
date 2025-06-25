import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Table from './Table'
import DropBox from './DropBox'
import { StyledButton } from './Button'
import { Form, redirect, useSubmit, useActionData, useLocation } from 'react-router'

const StyledReportButton = styled(StyledButton)`
  margin-right: 10px;
  &:last-of-type{
    margin-right: 0px;
  }
  &:disabled{
    text-decoration: line-through;
    background-color: #616161;
    &:hover{
      background-color: white;
      color: black;
      border: 2px outset white;
    }
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
  background-color: #999da3;
  
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 20px;
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

  let response = await fetch(`${BASE}/report/search`,
        {
            method : 'POST',
            body : formData

        }  
    );

  let resList = await response.json();
  console.log("await done")
  console.log(resList[0]);
  return {resList};
}

export async function downloadAction({request , params}){
  const formData = await request.formData();
  console.log("inside download action");
  
  let response = await fetch(`${BASE}/report/download`,
        {
            method : 'POST',
            body : formData

        }  
    );

  let resBlob = await response.blob();
  const url = window.URL.createObjectURL(resBlob);
  const dlink = document.createElement('a');
  dlink.href = url;
  dlink.setAttribute('download' , 'report.pdf')
  document.body.appendChild(dlink);
  dlink.click();
  dlink.parentNode.removeChild(dlink);
  alert("Download started!")
  return redirect("/")
}



const Report = () => {
  const {resList} = useActionData() ?? {resList : []};
  let submit = useSubmit();
  let location = useLocation();
  const [submitData , setSubmitData] = useState({
    stream : [],
    year: [],
    company: [],
    gender: []
  })
  const handleSumbit = (event)=>{
    
    event.preventDefault();
    event.stopPropagation();
    let formData = new FormData();
    console.log(submitData);
    const keys = ['stream' , 'year' , 'company' , 'gender'];
    let valid = true;

    for(let key of keys)
    {
        if(submitData[key].length === 0)
          {
            alert('filter missing')
            valid = false
            break;
          }
        else{
          for(let value of submitData[key]){
          
          formData.append( key , value);
        
          }
        }    
    }
    if(!valid) 
      return redirect("/")
    else{
      console.log(formData);
      submit(formData,{
        method : 'POST',
        action: '/report'
      })

    }
  }

  const handleDownload = (event)=>{
    event.preventDefault();
    event.stopPropagation();
    let formData = new FormData();
    const keys = ['stream' , 'year' , 'company' , 'gender'];
    let valid = true;

    for(let key of keys)
    {
        if(submitData[key].length === 0)
          {
            alert('filter missing')
            valid = false
            break;
          }
        else{
          for(let value of submitData[key]){
          
          formData.append( key , value);
        
          }
        }    
    }
    if(!valid) 
      return redirect("/")
    else{
      console.log(formData);
      submit(formData,{
        method : 'POST',
        action: '/report/download'
      })

    }
  }
  const [selected , setSelected] = useState('null');
  
  const streamList = ['CA' , 'CSE' , 'IT' , 'ECE' , 'AIML', 'EE' , 'DSC'];
  const yearList = ['2025' , '2024' , '2023', ' 2022', '2021','2020']
  const companyList =['Accenture' , 'LTIMindtree' , 'Cognizant' , 'TCS' , 'Hashedin by Deloitte' , 'Kreeti Technologies' , 'BMC Software' ,'GT Bharat' , 'HCL']
  const genderList = ['Male', 'Female' , 'Others']
  return (
    <ReportContainer>
      <Form action='/report' method='post' onSubmit={handleSumbit}>
      <FilterContainer >
        <DropBox selected={selected} setSelected={setSelected} name={'stream'} options={streamList} width={'20%'} submitData={submitData} setSubmitData={setSubmitData}/>
        <DropBox selected={selected} setSelected={setSelected} name={'year'} options={yearList} width={'15%'} submitData={submitData} setSubmitData={setSubmitData}/>
        <DropBox selected={selected} setSelected={setSelected} name={'company'} options={companyList} width={'20%'} submitData={submitData} setSubmitData={setSubmitData}/>
        <DropBox selected={selected} setSelected={setSelected} name={'gender'} options={genderList} width={'15%'} submitData={submitData} setSubmitData={setSubmitData}/>
        
      </FilterContainer>
      <ButtonContainer>
        <StyledReportButton type='submit'><b>Search</b></StyledReportButton>
        <StyledReportButton disabled = {location.pathname !== '/report'} onClick={handleDownload}><b>Download PDF</b></StyledReportButton>
      </ButtonContainer>
      </Form>
      <StyledHr />
      <Table list={resList}/>
      
    </ReportContainer>
  )
}

export default Report
import React from 'react'
import styled from 'styled-components'
import { Form, useNavigation, redirect } from 'react-router'
import { RiFileExcel2Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { MdCloudUpload} from 'react-icons/md'
import { StyledButton } from './Button'
import { PulseLoader } from 'react-spinners';
import { BASE } from '../App';

const StyledBlueBox = styled.div`
display : flex;
flex-direction: column;
cursor: pointer;
flex-basis: 30%;
background-color:  #1bce54;
border-radius: 5px;
border: dashed;
margin-left: 0px;
border-color:  #1D6F42;
justify-content: center;
align-items: center;
`

const StyledUploadButton = styled(StyledButton)`
  flex-basis: 20%;
  justify-content: center;
  background-color: black;
  color:white;
  font-family: sans-serif;
  align-items: center;
  color: white;
  border-radius: 10px;
  border-color: black;
  &:hover{ color: black;
           background-color:white;
           border: 1px solid black;
            };
  cursor: pointer;
`

const StyledUploadContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: transparent;
  gap: 2px;
`

const StyledImportExcel = styled.button`
    border-radius: 5px;
    border-style: dotted;
    background-color: #1bce54;
    border-color:  #1D6F42;
    margin-top: 15px;
    width: 30%; 
    padding: 5 px;   
`

export async function importAction({request, params})
{
  const formData = await request.formData();
  let response = await fetch(`${BASE}/importExcel`,
        {
            method : 'POST',
            body : formData

        }
        
    );
  let message = await response.text();
  console.log('in import action' + message)
  alert('Database imported succesfully')
  return redirect('/');

}


const ExcelUpload = () => {
  const navigation = useNavigation();
  const[fileName , setFileName] = React.useState(null);
  const inputRef = React.useRef();
  const submitRef = React.useRef();
  const handleClick = (eventWrapper) => {
    inputRef.current?.click();
    //event.preventDefault();
    eventWrapper.stopPropagation();
  };
  const handleSubmit = (event) =>{
    submitRef.current?.click();
    event.preventDefault();
    event.stopPropagation();
  }

  const handleChange = (event) =>{
    setFileName(event.target.files[0]?.name);
    event.preventDefault();
    event.stopPropagation();
  }
  return (
    <StyledUploadContainer >
      <StyledBlueBox onClick={handleClick}>
        {fileName ? (
          <>
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <RiFileExcel2Line />
          </IconContext.Provider>
          <span>{fileName}</span>
          </>

        ) :
        (
        <>
        <MdCloudUpload />
        <span>Import database</span>
        </>
        )
        }
        <Form onClick={(eventWrapper)=> eventWrapper.stopPropagation()} onChange={(eventWrapper)=> eventWrapper.stopPropagation()} method='post' action='/import' encType='multipart/form-data'>
          <input name='files' onChange={handleChange}  ref={inputRef} type='file' accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' hidden/>
          <button ref={submitRef} type='submit' hidden/>
        </Form>
        
      </StyledBlueBox>
      {navigation.state === 'submitting'? <PulseLoader /> : <StyledUploadButton type='button' onClick={handleSubmit}><b>Upload</b></StyledUploadButton> }
    </StyledUploadContainer>
  )
}

export default ExcelUpload
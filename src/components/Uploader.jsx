import React from 'react'
import styled from 'styled-components'
import { MdCloudUpload, MdOutlineFeed } from 'react-icons/md'
import { StyledButton } from './Button'
import { Form } from 'react-router'

const StyledBlueBox = styled.div`
display : flex;
flex-direction: column;
cursor: pointer;
flex-basis: 80%;
background-color: #97caf6;
border-radius: 5px;
border: dashed;
margin-left: auto;
border-color: #075599;
justify-content: center;
align-items: center;
`

const StyledUploadButton = styled(StyledButton)`
  flex-basis: 20%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const StyledUploadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 2px;
`
const Uploader = () => {
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
          <MdOutlineFeed />
          <span>{fileName}</span>
          </>

        ) :
        (
        <>
        <MdCloudUpload />
        <span>{"Browse files to upload"}</span>
        </>
        )
        }
        <Form onClick={(eventWrapper)=> eventWrapper.stopPropagation()} onChange={(eventWrapper)=> eventWrapper.stopPropagation()} method='post' encType='multipart/form-data'>
          <input name='files' onChange={handleChange}  ref={inputRef} type='file' accept='.docx,.ppt, .pptx,.txt,.pdf' hidden/>
          <button ref={submitRef} type='submit' hidden/>
        </Form>
        
      </StyledBlueBox>
      <StyledUploadButton type='button' onClick={handleSubmit}>{"search"}</StyledUploadButton>
    </StyledUploadContainer>
  )
}

export default Uploader
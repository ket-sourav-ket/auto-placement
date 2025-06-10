import React, { useEffect } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { IoMdCloseCircle } from "react-icons/io";
import { PiLineVerticalLight } from "react-icons/pi";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from 'react';

export const useOutsideClick = (callback) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
};

const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-radius: 5px;
    background-color: white;
    color:black;
    &:hover{
        cursor: pointer;
    }
`

const DropBoxContainer = styled.div`
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${props => props.$width};
    margin-right: 20px;
    &:last-of-type{
      margin-right: 0px;
    }
    
` 
const fadeIN = keyframes`
  to {
        opacity: 1;
     }
`
const OptionContainer = styled.div`
    padding: 5px;
    box-sizing: border-box;
    z-index: 2;
    position: absolute;
    top: 20px;
    width: 100%;
    display: flex;
    flex-direction : column;
    border-radius: 5px;
    background-color: white;
    opacity: 0;
    animation: ${fadeIN} 1.4s forwards;
`
const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const AllButton = styled.button`
  border-radius: 5px;
  cursor: pointer;

`
const DropBox = ({selected , setSelected , name , options , width , setSubmitData , submitData}) => {

  const [open , setOpen] = useState(false);

    const createChecks = (options)=>{
        const obj = options.reduce((ob , key) => ({...ob, [key]:false}), {});
        return obj;
    }
    const countChecks =(checks) =>{
      let count = 0;
      for(let key in checks)
        if(checks[key])
          count++;
      
      return count;
    }

    const[checks , setChecks] = useState(createChecks(options));

    useEffect(( )=>{
      
      let checkedList = []
      for(let key in checks)
        {
          if(checks[key])
              checkedList.push(key);
        }
      console.log(checkedList);
      setSubmitData({...submitData , [name] : checkedList})
    }, [checks]);


    const handleSelectAll = (event)=>{
      event.stopPropagation();
      event.preventDefault();
      const obj = options.reduce((ob , key) => ({...ob, [key]:true}), {});
      setChecks(obj);
    }

    

    const handleOutsideClick = ()=>{
        setOpen(false);
    }
    const ref = useOutsideClick(handleOutsideClick);

    return (
    <DropBoxContainer ref={ref} $width = {width}>
    <StyledBox onMouseOver={()=>{
        setSelected(name);
        setOpen(true)
    }}>
        <IoMdCloseCircle style={{cursor: 'pointer'}} onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setChecks(createChecks(options));

        }} />
        {name}
        <PiLineVerticalLight/>
        <span style={{marginRight : '5px'}}>{countChecks(checks)} selected</span>
    </StyledBox>
    {open && selected === name?  
    <OptionContainer>
            <AllButton onClick={handleSelectAll}>Select All</AllButton>
            {options.map((option) => <StyledLabel id={option} htmlFor={option}>{option} <input checked={checks[option]} onChange={(event)=> setChecks({...checks, [option]:event.target.checked})} type='checkbox' name={name} value={option}/></StyledLabel>)}
    </OptionContainer>
    :
    null
    }
    </DropBoxContainer>
  )
}

export default DropBox
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { IoMdCloseCircle } from "react-icons/io";
import { PiLineVerticalLight } from "react-icons/pi";
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
    justify-content: space-between;
    border-radius: 5px;
    background-color: white;
    color:black;
    &:hover{
        cursor: pointer;
    }
`

const DropBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.$width};
    
` 
const fadeIN = keyframes`
  to {
        opacity: 1;
     }
`
const OptionContainer = styled.div`
    display: flex;
    flex-direction : column;
    border-radius: 5px;
    background-color: white;
    opacity: 0;
    animation: ${fadeIN} 2s forwards;
`
const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const DropBox = ({selected , setSelected , name , options , width}) => {

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

    

    const handleOutsideClick = ()=>{
        setSelected('null');
    }
    const ref = useOutsideClick(handleOutsideClick);

    return (
    <DropBoxContainer ref={ref} $width = {width}>
    <StyledBox onMouseOver={()=>{
        setSelected(name);
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
    {selected === name?  
    <OptionContainer>
                                      <StyledLabel htmlFor='all'>All<input checked={checks[option]} onChange={(event)=> setChecks({...checks, [option]:event.target.checked})} type='checkbox' name='all' value='all'/></StyledLabel>
            {options.map((option) => <StyledLabel htmlFor={option}>{option} <input checked={checks[option]} onChange={(event)=> setChecks({...checks, [option]:event.target.checked})} type='checkbox' name={name} value={option}/></StyledLabel>)}
    </OptionContainer>
    :
    null
    }
    </DropBoxContainer>
  )
}

export default DropBox
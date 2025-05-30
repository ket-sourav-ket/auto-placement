import React from 'react'
import styled from 'styled-components'
import Table from './Table';
import { Form, useLoaderData, useNavigation } from 'react-router';
import { PacmanLoader } from 'react-spinners';
import Button from './Button';

const StyledListContainer = styled.div`
border : solid;
border-color : black;
border-radius : 5px;
padding: 8px;    
height: 200px;
overflow: auto;
overscroll-behavior: contain;
background: white;
flex-direction : column;
justify-content : flex-end;
`;

import Student from './Student';

{/*<StyledListContainer>

      <ul>
        {list.map((item) => <Student key={item.personal_mail} name = {item.name} email={item.personal_mail} stream={item.department}/>)}
      </ul>

    </StyledListContainer>
    */
}




const EmailBox = () => {
  const { mailList } = useLoaderData();
  const navigation = useNavigation();
  return (
    <>
    <Table list = {mailList} />
    <Form onChange={(event)=> event.stopPropagation()} style={{display: 'flex' , flexDirection: 'column' , alignItems: 'stretch'}} method='POST'>
      <input name='mails' value={mailList.map((item) => item.personal_mail)} hidden />
      {navigation.state === 'submitting'? 
        <PacmanLoader
          color="#7c98ff"
          size={30}
        /> : 
        <Button handleClick={(event)=>event.stopPropagation()} type={"submit"}><b>Send Mail</b></Button>
      }
      </Form>
      </>
    
  )
}

export default EmailBox
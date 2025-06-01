import React from 'react'
import { useEffect, useState } from 'react'
import EmailBox from './components/EmailBox'
import Student from './components/Student'

import styled from 'styled-components'
import Button from './components/Button'
import Uploader from './components/Uploader'
import InfoBoxVertical from './components/InfoBoxVertical'
import Footer from './components/Footer'
import CompanyRecord from './components/CompanyRecord'
import Navbar from './components/Navbar'
import CompanyBrowser from './components/CompanyBrowser'
import DropBox from './components/DropBox'
import { StyledHeadBar } from './components/InfoBox'
import job1 from './assets/greycover.png'
import uploadImg from './assets/uploaderImg.png'
import { PacmanLoader } from 'react-spinners'

import { Outlet,Link , useLoaderData, redirect, Form , useNavigation} from 'react-router-dom'




const StyledAppContainer = styled.div`
  display: grid;
  /*background: #c5ffbc;
   background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%); */
  background-image:url(${job1}); 
  grid-template-columns: 25rem 1fr 1fr;
  background-size: 100%;
  background-repeat: no-repeat;
  grid-template-rows: 4rem 14em 35em 0.2fr 1fr 1fr 0.4fr;
  grid-template-areas:
  'navbar navbar navbar'
  'getButton butRight uploader'
  'hero-img hero-img info-box'
  'browser-header empty-header empty-header'
  'browser browser empspace'
  'record record corner'
  'footer footer footer';
  border-radius: 5px;
`
const StyledHeroImg = styled.div`
  margin-left: 5%;
  margin-right: 2%;
  margin-top: 0;
  margin-bottom:0;
  padding: 0;
  border-radius: 10px;
  background-image: url(${job1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  grid-area: hero-img;
  width: 50%;
  height: 50%;
  box-shadow: 0 .4rem .8rem #0005;
`

const PositionFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  grid-area: footer;
  color: white;
  background-color: black;
  padding-left : 2.5%;
  backdrop-filter: blur(7px);
  box-shadow: 0 .4rem .8rem #0005;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`
const PositionInfoBox = styled.div`
  width: 80%;
  justify-self:end;
  margin-right:10%;
  margin-bottom:0;
  grid-area: info-box;
`


const PositionBrowser = styled.div`
  margin-left: 8%;
  margin-top: 3%;
  border-radius : 5px;
  grid-area : browser;
  border: 4px solid  #f7f6f6;
  height: 800px;
  width: 140%;
  overflow-y: auto;
  overflow-x: hidden;
`
const BrowserHeader = styled.div`
  margin-left: 5%;
  margin-bottom: 1.5%;
  padding: 0;
  align-self: end;
  margin-top: 0%;
  grid-area: browser-header;
`

const PositionUploader = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: stretch;
  grid-area: hero-img;
  justify-self: start;
  margin-left: 20px;
  background-color: transparent;
  border-radius: 5px;
  margin-top: 5%;
`
const StyledLeftImg = styled.img`
  margin-left: 10%;
  width: 20%;
  border-radius: 6px;

`
const PositionNavBar = styled.div`
  grid-area: navbar;
  
`

const PositionRecordView = styled.div`
  grid-area : record;
  padding: 1.8%;
`
const PositionReport = styled.div`
  margin-top: 5%;
  grid-area: record;
`

const GetStartedButton=styled.button`
  background-color: black;
  color: white;
  height: 14%;
  width: 20%;
  margin-bottom: 0%;
  margin-left: 11%;
  border-radius: 15px;
  border: 1px solid white;
  color: #7c98ff;
  font-size: medium;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  &:hover{ color: black;
           background-color:white;
           border: 1px solid black;
           cursor: pointer;
            };
`
const StyledLinkButton = styled(Link)`
  grid-area : hero-img;
  display: flex;
  text-decoration: none;
  min-width: 0px;
  flex-direction: column;
  justify-content: flex-start;
  align-items:flex-start;
`
const UploadDiv = styled.div`
  width: 40%;
  margin-top: 30%;
  margin-right: 30%;
  align-self: flex-end ;
`

export async function searchLoader({request , params})
{
  let fileId = params.fileId;
  let mailList = []
  let resJson = {}
  console.log("in search loader " + fileId);
  if(fileId){
  let respone = await fetch(`http://localhost:5173/api/getMails?fileId=${fileId}`);
  resJson = await respone.json();
  mailList = resJson.mailList;
  }

  console.log("in search loader " + resJson);
  return {mailList}

}

export async function searchAction({request, params})
{
  const formData = await request.formData();
  let response = await fetch('http://localhost:5173/api/uploadFile',
        {
            method : 'POST',
            body : formData

        }
        
    );
  let fileId = await response.text();
  return redirect('search/'+fileId);

}

export async function sendAction({request , params})
{
  let fileId = params.fileId;
  const formData = await request.formData();
  //const formObj = Object.fromEntries(formData)
  let mailList = formData.get('mails').split(",")
  console.log("submit data ")
  console.log(mailList)
  let response = await fetch('http://localhost:5173/api/sendMails',
                              {
                                method: 'POST',
                                headers: {  "Content-Type": "application/json" },
                                body : JSON.stringify(
                                  {
                                    mails : mailList,
                                    fileId : fileId
                                  }
                                )
                              }
    );
    let statusM = await response.text();
    statusM = statusM ?? "fail";
    alert(statusM);
    return redirect(`/search/${fileId}`);
}


const App = () => {
  //const { statusM } = useActionData();

  const [selected , setSelected] = useState('null');
  const streamList = ['CA' , 'CSE' , 'IT' , 'ECE'];

  useEffect(()=> {
    console.log(localStorage.getItem('isLogged'));
    if(localStorage.getItem('isLogged') === 'true')
      setIsLogged(true);
    else 
      setIsLogged(true);     // changed false to true for testing 
  });
  const [isLogged, setIsLogged] = useState( false);

  

  
  
  return (
    <>
    
    <StyledAppContainer>
      
      <PositionNavBar>
      <Navbar state={isLogged} setState={setIsLogged}/>
      </PositionNavBar>
      {isLogged ?
      <PositionUploader> 
      <Uploader/>
      <Outlet />
      
      </PositionUploader>
      :
      <StyledLinkButton to="/registerAdmin"><GetStartedButton><b>Get Started</b></GetStartedButton></StyledLinkButton>
      }

      <PositionInfoBox>
        <InfoBoxVertical/>
      </PositionInfoBox>
      
      <BrowserHeader id="history">
        <h2 style={{margin : '0' , padding: '0'}}>Placement History</h2>
        <StyledHeadBar width = '50%' />
      </BrowserHeader>

      <PositionBrowser>
         <CompanyBrowser />
      </PositionBrowser>
      
     {/* <PositionRecordView>
          <CompanyRecord />
      </PositionRecordView> */}

      <PositionReport>
        <DropBox selected={selected} setSelected={setSelected} name={'stream'} options={streamList} width={'20%'}/>
      </PositionReport>

      <PositionFooter id="contact">
        <Footer />
      </PositionFooter>

      
      
    </StyledAppContainer>

    
    </>
    

    
  )
}

export default App

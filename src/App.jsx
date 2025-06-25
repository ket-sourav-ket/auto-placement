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
import ExcelUpload from './components/ExcelUpload'
import Report from './components/Report'
import { StyledHeadBar } from './components/InfoBox'
import job1 from './assets/greycover.png'
import uploadImg from './assets/uploaderImg.png'
import { PacmanLoader } from 'react-spinners'
import { PulseLoader } from 'react-spinners';

import { Outlet,Link , useLoaderData, redirect, Form , useNavigation} from 'react-router-dom'

export const BASE = 'http://3.25.213.216:8060';
//export const BASE = 'http://localhost:8060';




const StyledAppContainer = styled.div`
  height: 100%;
  display: grid;
  /*background: #c5ffbc;
   background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%); */
  background-image:url(${job1}); 
  grid-template-columns: 25rem 1fr 1fr;
  background-size: 100%;
  background-repeat: no-repeat;
  grid-template-rows: 4rem 14em 35em 0.4fr 0.2fr 0.2fr;
  grid-template-areas:
  'navbar navbar navbar'
  'getButton butRight uploader'
  'hero-img hero-img info-box'
  'record record corner'
  'browser browser empspace'
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
  padding-bottom: 15px;
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
  height: 450px;
  border: 4px solid  #f7f6f6;
  width: 140%;
  overflow-y: auto;
  overflow-x: hidden;
`

const BrowserWrapper = styled.div`
  grid-area: browser;
  margin-top: 8%;
  margin-bottom: 10%;
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


const PositionReport = styled.div`
  width: 140%;
  margin-top: 5%;
  margin-left: 8%;
`
const ReportWrapper = styled.div`
  margin-top: 10%;
  grid-area: record;
`

const GetStartedButton=styled.button`
  background-color: black;
  color: white;
  height: 10%;
  width: 20%;
  margin-bottom: 0%;
  margin-left: 11%;
  border-radius: 15px;
  border: 1px solid white;
  font-size: medium;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  &:hover{ color: #7c98ff;
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
  let respone = await fetch(`${BASE}/getMails?fileId=${fileId}`);
  resJson = await respone.json();
  mailList = resJson.mailList;
  }

  console.log("in search loader " + resJson);
  return {mailList}

}

export async function searchAction({request, params})
{
  const formData = await request.formData();
  let response = await fetch(`${BASE}/uploadFile`,
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
  let response = await fetch(`${BASE}/sendMails`,
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

  const navigation = useNavigation();
  //const { statusM } = useActionData();

  
  

  useEffect(()=> {
    //console.log(localStorage.getItem('isLogged'));
    if(localStorage.getItem('isLogged') === 'true')
      setIsLogged(true);
    else 
      setIsLogged(false);     // changed false to true for testing 
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
      {navigation.state === 'submitting' ? <PulseLoader />: <Outlet />}
      <ExcelUpload />
      
      </PositionUploader>
      :
      <StyledLinkButton to="/registerAdmin"><GetStartedButton><b>Get Started</b></GetStartedButton></StyledLinkButton>
      }

      <PositionInfoBox>
        <InfoBoxVertical/>
      </PositionInfoBox>
      
      

      <ReportWrapper id='report'>
        <h2 style={{margin : '0' , padding: '0' , marginLeft: '20px'}}>Placement Reports</h2>
        <StyledHeadBar width = '20%' />
      <PositionReport >
        <Report/>
      </PositionReport>
      </ReportWrapper>

      <BrowserWrapper id='history'>
      <h2 style={{margin : '0' , padding: '0' , marginLeft: '20px'}}>Placement History</h2>
      <StyledHeadBar width = '20%' />
      <PositionBrowser >  
        <CompanyBrowser />
      </PositionBrowser>
      </BrowserWrapper>

      <PositionFooter id="contact">
        <Footer />
      </PositionFooter>

      
      
    </StyledAppContainer>

    
    </>
    

    
  )
}

export default App

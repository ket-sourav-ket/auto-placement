import React from 'react'
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
import { StyledHeadBar } from './components/InfoBox'
import job1 from './assets/gemini1.png'
import uploadImg from './assets/uploaderImg.png'
import { PacmanLoader } from 'react-spinners'

import { Outlet,Link , useLoaderData, redirect, Form , useNavigation} from 'react-router-dom'



const StyledAppContainer = styled.div`
  display: grid;
  /* background: #020024;
  background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%); */
 /* background-image:url(${job1}); */
  grid-template-columns: 25rem 1fr 1fr;
  grid-template-rows: 4rem 16rem 1fr 0.2fr 1fr 1fr 0.4fr;
  grid-template-areas:
  'navbar navbar navbar'
  'hero-img hero-img uploader'
  'hero-img hero-img info-box'
  'browser-header empty-header empty-header'
  'browser browser empspace'
  'record record corner'
  'footer footer footer';
  border-radius: 5px
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
  background-color: #fff5;
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
  margin-left: 5%;
  margin-top: 5%;
  border-radius : 5px;
  grid-area : browser;
  border-style: solid;
  border-color : #dcdee0;
  height: 400px;
  width: 140%;
  overflow-y: auto;
  overflow-x: hidden;
`
const BrowserHeader = styled.div`
  margin-left: 5%;
  margin-bottom: 1.5%;
  padding: 0;
  align-self: end;
  grid-area: browser-header
`

const PositionUploader = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: stretch;
  grid-area: uploader;
  margin-right: 10%;
  justify-self: end;
  margin-bottom: 1.8%;

  border-radius: 5px;
  box-shadow: 0 .4rem .8rem #0005;
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

  const navigation = useNavigation();

  const { mailList } = useLoaderData();
  
  console.log("in App component " + typeof mailList);
  return (
    <>
    
    <StyledAppContainer>
      
      <PositionNavBar>
      <Navbar/>
      </PositionNavBar>
     
      
      <PositionUploader> 
      <Uploader/>
      <EmailBox list={mailList} />
      <Form onChange={(event)=> event.stopPropagation()} style={{display: 'flex' , flexDirection: 'column' , alignItems: 'stretch'}} method='POST'>
      <input name='mails' value={mailList.map((item) => item.personal_mail)} hidden />
      {navigation.state === 'submitting'? 
        <PacmanLoader
          color="#55d3eb"
          size={30}
        /> : 
        <Button handleClick={(event)=>event.stopPropagation()} type={"submit"}>Send Mail</Button>
      }
      </Form>
      </PositionUploader>

      <PositionInfoBox>
        <InfoBoxVertical/>
      </PositionInfoBox>
      
      <BrowserHeader>
        <h3 style={{margin : '0' , padding: '0'}}>Placement History</h3>
        <StyledHeadBar width = '40%' />
      </BrowserHeader>
      <PositionBrowser>
        <CompanyBrowser/>
      </PositionBrowser>
      <PositionRecordView>
        <CompanyRecord />
      </PositionRecordView>
      <PositionFooter>
        <Footer />
      </PositionFooter>

      
      
    </StyledAppContainer>

    
    </>
    

    
  )
}

export default App

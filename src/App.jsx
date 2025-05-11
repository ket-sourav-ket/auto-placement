import React from 'react'
import EmailBox from './components/EmailBox'
import Student from './components/Student'
import UploadBox from './components/uploader/UploadBox'
import styled from 'styled-components'
import Button from './components/Button'
import Uploader from './components/Uploader'
import InfoBox from './components/InfoBox'
import InfoBoxVertical from './components/InfoBoxVertical'
import Footer from './components/Footer'
import CompanyRecord from './components/CompanyRecord'
import Navbar from './components/Navbar'
import CompanyBrowser from './components/CompanyBrowser'
import { StyledHeadBar } from './components/InfoBox'
import job1 from './assets/background1.jpg'
import uploadImg from './assets/uploaderImg.png'

import { Outlet,Link , useLoaderData, redirect, Form , useActionData} from 'react-router-dom'



const StyledAppContainer = styled.div`
  display: grid;
  background-image: linear-gradient(
    45deg,
    hsl(168deg 82% 50%) 0%,
    hsl(175deg 100% 42%) 8%,
    hsl(181deg 100% 38%) 17%,
    hsl(186deg 100% 38%) 25%,
    hsl(190deg 100% 36%) 33%,
    hsl(193deg 100% 33%) 42%,
    hsl(197deg 80% 33%) 50%,
    hsl(205deg 51% 35%) 58%,
    hsl(214deg 36% 33%) 67%,
    hsl(226deg 25% 29%) 75%,
    hsl(246deg 18% 23%) 83%,
    hsl(268deg 16% 16%) 92%,
    hsl(291deg 13% 10%) 100%
  );
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
  margin-left: 2%;
  margin-right: 5%;
  margin-top: 0;
  margin-bottom:0;
  padding: 0;
  border-radius: 5px;
  background-image: url(${job1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  grid-area: hero-img;
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
  margin-left: 1.8%;
  border-radius : 5px;
  grid-area : browser;
  border-style: solid;
  border-color : #dcdee0;
  height: 400px;
  overflow-y: auto;
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
  let respone = await fetch(`/getMails?fileId=${fileId}`);
  let mailList = await respone.text();
  mailList = mailList?? " ";
  return {mailList}

}

export async function searchAction({request, params})
{
  const formData = await request.formData();
  let response = await fetch('/upload',
        {
            method : 'POST',
            headers: {
                'Content-Type' : 'multipart/form-data'
            },
            body : formData

        }
        
    );
  let fileId = await response.text();
 // return redirect(`search/${fileId}`);

}

export async function sendAction({request , params})
{
  let fileId = params.fileId;
  const formData = await request.formData();
  let response = await fetch('/sendMails',
                              {
                                method: 'POST',
                                headers: {
                                            'Content-Type' : 'multipart/form-data'
                                         },
                                body : formData

                              }
    );
    let statusM = await response.text();
    statusM = styled ?? "fail";
    return { statusM };
   // return redirect(`/search/${fileId}`);
}

const App = () => {
  const { statusM } = useActionData();

  const { mailList } = useLoaderData();
  const list = mailList.split(',');
  return (
    <>
    
    <StyledAppContainer>
      
      <PositionNavBar>
      <Navbar/>
      </PositionNavBar>
      <StyledHeroImg />
      
      <PositionUploader> 
      <Uploader/>
      <EmailBox list={list} />
      <Form method='POST'>
      <Button name='mails' value={list} type={"submit"}>Send Mail</Button>
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

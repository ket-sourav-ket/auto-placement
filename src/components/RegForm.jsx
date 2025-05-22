import styled from 'styled-components'
import Myimage from '../assets/Side.png'

const Mylabel=styled.label`
    color: #0a1310;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`;

const Myinput=styled.input`
    border-radius: 10%;
    border-color: blue;
    margin-left: 5px;
`    
const MyRadioLabel = styled.label`
  padding-left: 15px;
`
const MyButton = styled.button`
  border-radius: 10%;
  border-color: blue;
  margin-right: 2%;
  
`
const MyHeading = styled.h2`
  text-align: center;
  background-color: wheat;
  font-size:180%;
`
const Styledimage = styled.img`
  position: absolute;
  margin-left: 31%;
  height: 70%;
  width:40%;
`
const Myinnerdiv=styled.div`
  background-color: white;
  padding: 5%;
  opacity: 100%;
  border-radius: 3%;
`
const Mydiv=styled.div`
padding: 10%;
background-image: linear-gradient(
    45deg,
    hsl(240deg 61% 85%) 0%,
    hsl(240deg 58% 82%) 8%,
    hsl(241deg 57% 78%) 17%,
    hsl(241deg 55% 75%) 25%,
    hsl(241deg 54% 71%) 33%,
    hsl(241deg 53% 68%) 42%,
    hsl(241deg 52% 64%) 50%,
    hsl(240deg 51% 61%) 58%,
    hsl(240deg 50% 57%) 67%,
    hsl(239deg 49% 53%) 75%,
    hsl(237deg 51% 49%) 83%,
    hsl(234deg 63% 44%) 92%,
    hsl(228deg 90% 36%) 100%
  );
`

const RegForm = () => {
  return (
    <Mydiv >
    <Myinnerdiv>
      <MyHeading>Registration Form</MyHeading>
      <br/><br/>
      <Styledimage src={Myimage}></Styledimage>
      <br></br>
      <Mylabel>Full Name:</Mylabel>
      <Myinput 
        type="text" 
        name="fullname"
      /><br/><br/>
        <Mylabel>Gender:</Mylabel>
        <MyRadioLabel for="M">Male</MyRadioLabel>
        <Myinput type="radio" id="male"value="choice"/>
        <MyRadioLabel for="F">Female</MyRadioLabel>
        <Myinput type="radio" id="female" value="choice"/>
        <MyRadioLabel for="o">Other</MyRadioLabel>
        <Myinput type="radio" id="o" value="choice"/>
        
        <br/><br/>

      <Mylabel>Stream:</Mylabel>
      <Myinput 
        type="text" 
        name="stream" 
      /><br/><br/>

      <Mylabel>College Roll:
      <Myinput 
        type="text" 
        name="college roll"  
      />
      </Mylabel>
      <br/><br/>

      <Mylabel>University Roll:
      <Myinput 
        type="text" 
        name="university roll" 
      />
      </Mylabel>
      <br/><br/>

      <Mylabel>Session:
      <Myinput 
        type="text" 
        name="session"   
      />
      </Mylabel>
      <br/><br/>
      <Mylabel>Highest Qualification:
        <select name="qualification" >
            <option value="Highest Qualification">Hightest Qualification</option>
            <option value="Btech">BTech</option>
            <option value="MCA">MCA</option>
            <option value="BCA">BCA</option>
            <option value="MTech">MTech</option>
        </select>
      </Mylabel>
      <br/><br/>
      <Mylabel>Highest Qualification Marks:
        <Myinput 
          type="number" 
          name="marks" 
        />
        </Mylabel>
        <br/><br/>

       <Mylabel>Current Backlog:
        <MyRadioLabel for="YES">Yes</MyRadioLabel>
        <Myinput type="radio" id="yes"value="choice"/>
        <MyRadioLabel for="NO">No</MyRadioLabel>
        <Myinput type="radio" id="no" value="choice"/>
        </Mylabel>
        <br/><br/>

        <Mylabel>Contact Number:
        <Myinput 
          type="number" 
          name="contact number" 
        />
        </Mylabel>
        <br/><br/>

        <Mylabel>Willing to Relocate:
        <MyRadioLabel for="YES">Yes</MyRadioLabel>
        <Myinput type="radio" id="yes"value="choice"/>
        <MyRadioLabel for="NO">No</MyRadioLabel>
        <Myinput type="radio" id="no" value="choice"/>
        </Mylabel>
        <br/><br/>
        <Mylabel>Technical Skills:
        <Myinput 
            type="text" 
            name="fullname" 
          />
        </Mylabel>
        <br/><br/>
        <MyButton type='submit'>Submit</MyButton>
        <MyButton type='reset'>Reset</MyButton>
        </Myinnerdiv>
    </Mydiv>
  )
}

export default RegForm
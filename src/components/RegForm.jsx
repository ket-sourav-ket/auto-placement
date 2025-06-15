import styled from 'styled-components'
import Myimage from '../assets/infoImage.png'
import { Form } from 'react-router'

const Mylabel=styled.label`
    
    display: flex;
    font-size: large;
    flex-direction: row;
    justify-content: space-between;
    color: #0a1310;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif';

`
const RadioGroup = styled.div`
  
`
const Myinput=styled.input`
    display: inline-block;
    border-radius: 5px;
    border-color: blue;
    margin-left: 5px;
    vertical-align: text-bottom;
` 
const ButtonDiv = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
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
  font-size:150%;
`
const Styledimage = styled.img`
  min-width: 0px;
  min-height:0px;
  width: 80%;
`
const Myinnerdiv=styled.div`
  background-color: white;
  padding: 3%;
  opacity: 100%;
  border-radius: 3%;
  width: 80%;
`
const Mydiv=styled.div`
padding: 10%;
background: #868c8f;
background: linear-gradient(90deg, rgba(134, 140, 143, 1) 0%, rgba(92, 99, 95, 1) 50%, rgba(13, 13, 11, 1) 100%);
`
const BodyDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  
`
const FormDiv = styled(Form)`

width: 100%;
height: 50%;
  
`
const ImageDiv = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: flex-start;
  flex-wrap: wrap;
  
`
export async function driveAction({request , params}){
  const formData = await request.formData();
  
  let response = await fetch('http://localhost:5173/api/studentRegister',
        {
            method : 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body : JSON.stringify(Object.fromEntries(formData))

        }  
    );

  let message = await response.text()
  alert(message)
  


}

const RegForm = () => {
  return (
    <Mydiv >
    <Myinnerdiv>
      <MyHeading>Registration Form</MyHeading>
      <br/><br/>
      <BodyDiv>
      <FormDiv method='POST'>
      <Mylabel>Full Name:
      <Myinput required
        type="text" 
        name="fullname"
      />
      </Mylabel>
      <br/>
        <Mylabel>Gender:
        <RadioGroup>
        <MyRadioLabel htmlFor="M">Male</MyRadioLabel>
        <Myinput required type="radio" id="male" name="genderChoice" value={'male'}/>
        <MyRadioLabel htmlFor="F">Female</MyRadioLabel>
        <Myinput required type="radio" id="female" name="genderChoice" value={'female'}/>
        <MyRadioLabel htmlFor="o">Other</MyRadioLabel>
        <Myinput required type="radio" id="other" name="genderChoice" value={'other'}/>
        </RadioGroup>
        </Mylabel>
        
        <br/>

      <Mylabel>Stream:
      <select name="stream" required>
            <option value="Null">Select your stream</option>
            <option value="CSE">CSE</option>
            <option value="CA">CA</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value = "AIML">AIML</option>
            <option value = "DSC">Data Science</option>
            <option value="EE">EE</option>
      </select>
      </Mylabel>
      <br/>

      <Mylabel>College Roll:
      <Myinput required
        type="text" 
        name="collegeRoll"  
        pattern='\d{11}'
      />
      </Mylabel>
      <br/>

      <Mylabel>University Roll:
      <Myinput required pattern='\d{11}'
        type="text" 
        name="universityRoll" 
      />
      </Mylabel>
      <br/>

      <Mylabel>Session:
      <Myinput required placeholder='xxxx-xx' pattern='\d{4}-\d{2}'
        type="text" 
        name="session"   
      />
      </Mylabel>
      <br/>
      <Mylabel>Highest Qualification:
        <select name="qualification" required>
            <option value="Null">Hightest Qualification</option>
            <option value="BTech">BTech</option>
            <option value="MCA">MCA</option>
            <option value="BCA">BCA</option>
            <option value="MTech">MTech</option>
        </select>
      </Mylabel>
      <br/>
      <Mylabel>Highest Qualification Marks:
        <Myinput placeholder='marks out of hundred' pattern='\d{2}' 
          type="number"
          name="marks" 
        />
        </Mylabel>
        <br/>

       <Mylabel>Current Backlog:
        <RadioGroup>
        <MyRadioLabel htmlFor="YES">Yes</MyRadioLabel>
        <Myinput required type="radio" id="yes" name="backlogChoice" value={true}/>
        <MyRadioLabel htmlFor="NO">No</MyRadioLabel>
        <Myinput type="radio" id="no" name="backlogChoice" value={false}/>
        </RadioGroup>
        </Mylabel>
        <br/>

        <Mylabel>Contact Number:
        <Myinput 
          type="number" 
          name="contact" 
        />
        </Mylabel>
        <br/>

        <Mylabel>Willing to Relocate:
        <RadioGroup>
        <MyRadioLabel htmlFor="YES">Yes</MyRadioLabel>
        <Myinput required type="radio" id="yes" name="relocateChoice" value={true}/>
        <MyRadioLabel htmlFor="NO">No</MyRadioLabel>
        <Myinput type="radio" id="no" name="relocateChoice" value={false}/>
        </RadioGroup>
        </Mylabel>
        <br/>
        <Mylabel>Technical Skills:
        <Myinput 
            type="text" 
            name="techSkill" 
          />
        </Mylabel>
        <br/>
        <ButtonDiv>
        <MyButton type='submit'>Submit</MyButton>
        <MyButton type='reset'>Reset</MyButton>
        </ButtonDiv>
        </FormDiv>
        <ImageDiv>
          <Styledimage src={Myimage}></Styledimage>
        </ImageDiv>
        </BodyDiv>
        </Myinnerdiv>
    </Mydiv>
  )
}

export default RegForm
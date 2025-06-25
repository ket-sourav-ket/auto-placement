import React, { useEffect } from "react";
import * as Components from './Components';
import {Outlet, Link, useNavigate,Form, redirect, useLoaderData} from 'react-router-dom';
import { ScaleLoader } from "react-spinners";

import { BASE } from "../App";

export async function loader({request, params}){

    const url = new URL(request.url);
    const endpoint = url.pathname;
    console.log("hello loader");
    console.log("url " + endpoint);
    if (endpoint === '/login')
        return true;
    else if(endpoint === '/registerAdmin')
        return false;


}

export async function loginAction({request, params}) {
    const formData = await request.formData();
    const loginData = Object.fromEntries(formData);
    //console.log("Inside login action");
    console.log(loginData);
    let response = await fetch(`${BASE}/UserDtls/${loginData.email}/${loginData.password}`)
    console.log(response.ok)
    if (response.ok)
    {
        let json = await response.text();
        console.log(json);
        if (json=== 'Success') {
            localStorage.setItem('isLogged','true');
            return redirect("/");
            
        }
        else 
        {
            localStorage.setItem('isLogged','false');
            alert('wrong credentials!!! Try again');
            return redirect("/");
        }
    }
    else 
    {
        localStorage.setItem('isLogged','false');
        return redirect("/");
    }
    
}

export async function registerAction({request, params}) {
    const formData = await request.formData();
    const userData = Object.fromEntries(formData);
    console.log(userData);
    let response = await fetch(`${BASE}/register` , {
        method: 'POST',
      //  mode:"no-cors",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    });
    if (response.ok)
    {
        localStorage.setItem('isLogged','true');
        let json = await response.json();
        return redirect('/');
    }
    else 
    {
        localStorage.setItem('isLogged','false');
        return redirect("/login");
    }
    
}



const RegisterForm = ({children ,render , isLoading , setLoading}) =>
{

return(
    <Components.StyledRouterForm method="post"  onSubmit={()=> setLoading(true)}>
        <Components.StyledFormLabel > Create Account </Components.StyledFormLabel>
        <Components.Input  placeholder="Name" type="text" name="name" required/>
        <Components.Input  placeholder="Email" type="email" name="email" required/>
        <Components.Input  placeholder="Password" type="password" name="password" required/>
        {isLoading ? (render()) : (<Components.Button type="submit"> {children} </Components.Button>)}

    </Components.StyledRouterForm>
);}

const LoginForm = ({children ,render, isLoading, setLoading}) =>
    {
    return(
        <Components.StyledRouterForm method="post"  
               onSubmit={()=>{setLoading(true)}}>
            <Components.StyledFormLabel > Sign In </Components.StyledFormLabel>
            <Components.Input  placeholder="Email" type="email" name="email" required/>
            <Components.Input  placeholder="Password" type="password" name="password" required/>
            <Components.Anchor href="#">Forgot Your Password?</Components.Anchor>
            {isLoading ? (render()) : (<Components.Button type="submit"> {children} </Components.Button>)}
        </Components.StyledRouterForm>
    );

}

function Login() {
    const value = useLoaderData();
    console.log(value);
    useEffect(()=>{
        setLoading(false);
    })
     const [isLoading, setLoading] = React.useState(false);


     const [signIn, toggle] = React.useState(value);
      return(
        <Components.StyledPageContainer>
          <Components.Container>
              <Components.SignUpContainer $$signinIn={signIn}>
                  <RegisterForm isLoading={isLoading} setLoading={setLoading} render = {()=> <ScaleLoader color="#44f2f1" /> }>Sign Up</RegisterForm>
              </Components.SignUpContainer>

              <Components.SignInContainer $signinIn={signIn}>
                  <LoginForm isLoading={isLoading} setLoading={setLoading} render={()=> <ScaleLoader color="#44f2f1" />}>Sign In</LoginForm>
              </Components.SignInContainer>

              <Components.OverlayContainer $signinIn={signIn}>
                  <Components.Overlay $signinIn={signIn}>

                  <Components.LeftOverlayPanel $signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      
                     <Link to={'/login'}> <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Link>
                 </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel $signinIn={signIn}>
                        <Components.Title>Get Started!</Components.Title>
                        
                        <Link to={'/registerAdmin'}>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton> 
                            </Link>
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
          </Components.StyledPageContainer>
      )
 }

export function BasicLogin ()
{

    return(
    <Form method="post">
        <input placeholder="email" name="email" type="text" />
        <input placeholder="password" name="password" type="text" />
        <button type="submit">login</button>

        
    </Form>
    );

}

export async function demoAction({request,params}) {
    const formData = await request.formData();
    const creds = Object.fromEntries(formData);
    console.log(creds);
   // localStorage.setItem('isLogged','true');
    return redirect('/');
    
    
}

export default Login;


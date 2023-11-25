import React from 'react'
import { Container, Spacer, Text } from '@chakra-ui/react'
import { useState, useEffect} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import { LOGIN_FAILURE, login } from '../Action';
import loginPage from '../Images/loginPage.png'
import { useDispatch, useSelector } from 'react-redux';


export default function Login(){
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [color, setColor] = useState("");
  


  const dispatch = useDispatch();
  const navigator = useNavigate();

  const isLoggedIn = useSelector ((state)=>{
  return state.user.isLoggedIn;
})
// console.log(isLoggedIn);

const message = useSelector((state)=>{
  return state.user.message;
})
// console.log(message)

  
const handlelogin = (e) => {
  e.preventDefault();
  if (!password || !email) {
    dispatch(LOGIN_FAILURE("All Fields must be filled"));
    setColor("red");
  } else if (!email.includes("@")) {
    dispatch(LOGIN_FAILURE("Email is invalid"));
    setColor("red");
  }else {
    dispatch(login(email, password)) 
      }
    }  

  useEffect(()=>{
    if(isLoggedIn===true){
      navigator('/')
    }
  }, [isLoggedIn, navigator]);
   
  return (
    <div style={{marginTop:"6rem"}}>
    <img src={loginPage} alt="Welcome" style={{width:"50%"}} />
    <Container>
    <h1 className='login'>Log in / Sign up</h1>
    <h5 className='tag'>for latest trends, exciting offers and everything Bewakoof® !</h5>
    
    <Text className="error" style={{color: color, marginLeft:"850px"}}>
    {message} </Text>

    <input placeholder='Enter Email ID' type='text' className='enterEmail' value={email} 
    onChange={(event)=>setEmail(event.target.value)}/>

    <input placeholder='Enter Password' type='password' className='enterEmail' value={password} 
    onChange={(event)=>setPassword(event.target.value)}/>
    <Spacer/>
    <button className='LogButton' onClick={handlelogin}>CONTINUE</button>
     
    
    <div className="registerButton">Not Register?
    <NavLink to ="/SignUp" style={{textDecoration:"none"}}>
    <span style={{color:'#42a2a2', fontWeight:"Bold"}}> SIGN UP</span>
    </NavLink>
    </div>
    </Container>
    
    </div>
    
   )
}

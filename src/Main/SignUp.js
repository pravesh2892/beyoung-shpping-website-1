import React, { useState, useEffect } from 'react';
import { Container, Spacer, Text } from '@chakra-ui/react';
import loginPage from '../Images/loginPage.png'
import {useDispatch, useSelector} from 'react-redux';
import { LOGIN_FAILURE,  signup} from '../Action';
import {useNavigate} from 'react-router-dom';


 function SignUp(){

    const[name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
    const navigator = useNavigate();
     
    const isLoggedIn = useSelector ((state)=>{
        return state.user.isLoggedIn;
    })
    //console.log(isLoggedIn);
   

    const message = useSelector((state)=>{
        return state.user.message;
    })
    //console.log(message)

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!name || !password || !email) {
          dispatch(LOGIN_FAILURE("All Fields must be filled"));
          setColor("red");
        } else if (!email.includes("@")) {
          dispatch(LOGIN_FAILURE("Email is invalid"));
          setColor("red");
        }else {
          dispatch(signup(name, email, password)); 
          }
        }

        useEffect(()=>{
          if(isLoggedIn==true){
            navigator('/');
          }
        },[isLoggedIn, navigator]);
      
    
  
  return (
    <div style={{marginTop:"6rem"}}>
    <img src={loginPage} alt="Welcome" style={{width:"50%"}} />
    <Container>
    <h1 className='login'>Sign Up</h1>
    <h5 className='tag'>for latest trends, exciting offers and everything Bewakoof® !</h5>
    
    <Text className="error" style={{color: color, marginLeft:"850px"}}>
    {message} </Text>

    <input placeholder='Enter Username' type='text' className='enterEmail'
    value={name} onChange={(event)=>setName(event.target.value)}/>
    
    <input placeholder='Enter Email ID' type='text' className='enterEmail'
    value={email} onChange={(event)=>setEmail(event.target.value)}/>

    <input placeholder='Enter Password' type='password' className='enterEmail'
    value={password} onChange={(event)=>setPassword(event.target.value)}/>
    <Spacer/>
    <button className='LogButton' onClick={handleSignUp}>CONTINUE</button>
    </Container>
    
    </div>
    
   )
}

export default SignUp;

import { useState, useEffect } from 'react';
import{Box, Button, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


export default function Profile() {
    const [userDetailsList, setUserDetailsList] = useState(
        { name: '', email: '', password: '' });

    useEffect(()=>{
        const savedAddress = localStorage.getItem("signup");
        if(savedAddress){
        const userData = JSON.parse(savedAddress);
        setUserDetailsList(userData);
        }
      },[]);
    //   const data = userDetailsList;
    //   console.log(data);
    // //   const{name, email, password} = data;
    //   console.log(data?.signup?.data?.name);


  return (
    <div style={{marginLeft:"50px", marginTop:"7rem"}}>
   <h3 style={{marginBottom:"50px", fontSize:"25px"}}>My Profile</h3>
   <hr className='ruler' style={{marginLeft:"10px", marginTop:"-40px", marginBottom:"5%"}}/>
   <Box>
    <label name="name" style={{color:"rgba(0, 0, 0, 0.5)"}}>Full name</label>
    <br/>
    <input type="text" className='inputname' value={userDetailsList?.signup?.data?.name}/>
    <br/>
    <label name="email" style={{color:"rgba(0, 0, 0, 0.5)"}}>Email Address</label>
    <br/>
    <input type="email" className='inputname' readOnly value={userDetailsList?.signup?.data?.email} />
    <br/>
    <label name="password" style={{color:"rgba(0, 0, 0, 0.5)"}}>Password</label>
    <br/>
    <input type="password" className='inputname' readOnly value={userDetailsList?.signup?.data?.password}/>
    <br/>
    <input type="date" className='inputname' />
    <Text style={{color:"rgba(0, 0, 0, 0.5)", fontSize:"10px", marginTop:"-30px", marginBottom:"30px"}}>Save Your Birthdate</Text>
    <Link to="/Account">
    <Button style={{backgroundColor:"#42A2A2", color:"white", border:"none", height:"40px", fontSize:"25px", fontWeight:"bold", borderRadius:"5px", width:"250px", marginBottom:"30px", cursor:"pointer" }}>
    CONTINUE</Button>
    </Link>
    
   </Box>
   </div>
  )
}

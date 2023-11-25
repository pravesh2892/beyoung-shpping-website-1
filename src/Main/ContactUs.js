import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import airoplane from '../Images/airoplane.webp'

export default function ContactUs() {
    const[search, setSearch] = useState('');
    const [showMessage, setShowMessage] = useState(false);

  const handleclick=(event)=>{
       if(event.key==='Enter'){
      setShowMessage(true);
      setSearch('');
       }
  }
  return (
    <div style={{marginTop:"6rem", marginLeft:"40px"}}>
        <Box style={{backgroundColor:"#fafafa", height:"350px", marginRight:"30px"}}>
        <h5 style={{fontSize:"25px", paddingLeft:"30px", paddingTop:"30px"}}>
        Contact Us</h5>
        <hr className='ruler' style={{marginTop:"-40px", marginRight:"88%", marginLeft:"30px"}}/>   
        <Text style={{fontSize:"30px", paddingLeft:"50px"}}>What's your query about ?</Text>
        <Flex style={{justifyContent:"space-between"}}>
        <Flex style={{flexDirection:"column"}}>
        <input placeholder='Search your Query here' type='text' className='Inputicon' value={search} 
        onChange={(e)=>setSearch(e.target.value)} onKeyDown={handleclick}/>
          {showMessage && (
          <Text style={{ fontWeight: '500', paddingTop: '50px', marginLeft: '50px', color:"#42A2A2" }}>
            We are trying to resolve your query!!! 
          </Text>
        )}
        </Flex>
        <img src='https://www.beyoung.in/desktop/images/contact-us/new/desktop-contact_us-BB_image.png' style={{marginTop:"-130px", width:"350px", paddingRight:"150px"}}/>
        </Flex>
        </Box>  
        <Box style={{backgroundColor:"#fafafa", height:"350px", marginRight:"30px"}}>
        <Text style={{fontWeight:"500", paddingTop:"50px", marginLeft:"30px"}}>Corporate Address:</Text>
        <Text style={{marginLeft:"30px"}}>Beyoung  Pvt. Ltd.</Text>
        <Text style={{marginTop:"-15px",marginLeft:"30px"}}>Eklingpura Chouraha, Ahmedabad Main Road</Text>
        <Text style={{marginTop:"-15px",marginLeft:"30px"}}>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</Text>
       
        <Text style={{marginLeft:"250px", marginTop:"50px"}}>If you still can't find the answers you seek, send us a mail at support@beyoung.in, and we'll work our magic!</Text>
        </Box>
    </div>
  )
}

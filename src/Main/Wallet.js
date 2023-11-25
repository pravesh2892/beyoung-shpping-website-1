import { Box, Container, Text, Flex } from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import { AiFillStar, AiOutlineLeft } from 'react-icons/ai';
import {FaRupeeSign} from 'react-icons/fa';
import React from 'react'

export default function Wallet() {
  return (
    <Box style={{marginLeft:"7%", marginTop:"6rem"}}>
      <Flex>
        <Link to ="/Account" style={{textDecoration:"none"}}>
        <AiOutlineLeft style={{marginTop:"25px", marginRight:"15px", color:"#51cccc"}}/>
        <Text style={{color:"#51cccc", marginTop:"-24px", marginLeft:"25px"}}> Back to My Account</Text>
        </Link>
    </Flex>
    <h1 className='heading3'style={{letterSpacing:"0.5px"}}>My Wallet</h1>
    <hr className='ruler' style={{marginLeft:"10px", marginTop:"-10px"}}/>
    
    <Container style={{border:"1px solid grey", width:"70%", height:"340px", marginTop:"40px"}}>

    <Box style={{backgroundColor:"rgb(211, 232, 206)", width:"100%", height:"100px", marginTop:"0"}}>
        <h2 style={{marginLeft:"5%", marginTop:"0", paddingTop:"5px"}}>₹0</h2>
        <Text style={{marginLeft:"5%", marginTop:"-10px", }}>Total Wallet Balance</Text>
    </Box>

    <Box style={{backgroundColor:"#eee", height:"10px"}}></Box>

    <Box style={{marginTop:"10px", marginLeft:"10px", height:"80px", marginBottom:"20px"}}>
        <Flex>
        <AiFillStar style={{color: "red", marginTop:"20px", marginRight:"20px", fontSize:"25px"}}/>
        <Text style={{marginRight:"60%", fontSize:"20px"}}>Bewakoof Credit</Text>
        <Text style={{color:"#42A2A2", fontWeight:"bold"}}>Balance : ₹0.0</Text>
        </Flex>
        <Text style={{color: "grey", marginTop:"-10px", fontSize:"12px",marginLeft:"10px"}}>Earned from referral, offers and cash-back. Limited validity</Text>
    </Box>

    <Box style={{backgroundColor:"#eee", height:"10px"}}></Box>

    <Box style={{marginTop:"10px", marginLeft:"10px", height:"80px"}}>
        <Flex>
        <FaRupeeSign style={{color: "green", marginTop:"20px", marginRight:"20px", fontSize:"25px"}}/>
        <Text style={{marginRight:"60%", fontSize:"20px"}}>Bewakoof Cash</Text>
        <Text style={{color:"#42A2A2", fontWeight:"bold"}}>Balance : ₹0.0</Text>
        </Flex>
        <Text style={{color: "grey", marginTop:"-10px", fontSize:"12px",marginLeft:"10px"}}>
        Recieved from refund for orders that you have returned</Text>
    </Box>
    </Container>
    </Box>
  )
}

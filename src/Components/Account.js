import { Box , Flex, Text} from '@chakra-ui/react';
import {MdArrowForwardIos} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import React from 'react'

export default function Account(){
  return (
    <Box style={{marginLeft:"50px", marginTop:"8rem"}}>
        <h1 className='heading3'style={{letterSpacing:"0.5px"}}>My Account</h1>
        <hr className='ruler' style={{marginLeft:"10px", marginTop:"-10px"}}/>
    <Flex style={{marginTop:"7rem"}}>
    <Box>
    <NavLink to="/Orders" style={{textDecoration:"none", color:"black"}}>
        <Flex>
        <Text style={{fontSize:"20px"}}>My Orders</Text>
        <MdArrowForwardIos style={{color:"grey", marginLeft:"10px", marginTop:"26px"}}/>
        </Flex>
        </NavLink>
        <Text style={{fontSize:"12px", marginTop:"-10px", color:"grey"}}>View, modify and track orders</Text>
    </Box>

    

    <Box style={{borderLeft:"1px solid #e6e6e6", marginLeft:"30px", marginRight:"10px"}}>
    <NavLink to="/Wallet" style={{textDecoration:"none", color:"black"}}>
    <Flex>
    <Text style={{fontSize:"20px", marginLeft:"30px"}}>My Wallet <span style={{color:"#20a437", fontSize:"12px"}}>Rs. 0</span></Text>
    <MdArrowForwardIos style={{color:"grey", marginLeft:"10px", marginTop:"26px"}}/>
    </Flex>
    </NavLink>
    <Text style={{fontSize:"12px", marginTop:"-10px", color:"grey", marginLeft:"30px"}}>View and modify payment methods</Text>
    </Box>

    <Box style={{borderLeft:"1px solid #e6e6e6", marginLeft:"30px", marginRight:"10px"}}>
    <NavLink to ="/Address" style={{textDecoration:"none", color:"black"}}>
    <Flex>
    <Text style={{fontSize:"20px", marginLeft:"30px"}}>My Addresses</Text>
    <MdArrowForwardIos style={{color:"grey", marginLeft:"10px", marginTop:"26px"}}/>
    </Flex>
    <Text style={{fontSize:"12px", marginTop:"-10px", color:"grey", marginLeft:"30px"}}>Edit, add or remove address</Text>
    </NavLink>
    </Box>

    <Box style={{borderLeft:"1px solid #e6e6e6", marginLeft:"30px", marginRight:"10px"}}>
    <NavLink to ="/Profile" style={{textDecoration:"none", color:"black"}}>
    <Flex>
    <Text style={{fontSize:"20px", marginLeft:"30px"}}>My Profile</Text>
    <MdArrowForwardIos style={{color:"grey", marginLeft:"30px", marginTop:"26px"}}/>
    </Flex>
    <Text style={{fontSize:"12px", marginTop:"-10px", color:"grey", marginLeft:"30px"}}>Edit personal info, change password</Text>
    </NavLink>
    </Box>
   
    <Box style={{borderLeft:"1px solid #e6e6e6", marginLeft:"30px", marginRight:"10px"}}>
    <NavLink to ="/NotAvailable" style={{textDecoration:"none", color:"black"}}>
    <Flex>
    <Text style={{fontSize:"20px", marginLeft:"30px"}}>Refer & Earn</Text>
    <MdArrowForwardIos style={{color:"grey", marginLeft:"30px", marginTop:"26px"}}/>
    </Flex>
    <Text style={{fontSize:"12px", marginTop:"-10px", color:"grey", marginLeft:"30px"}}> Invite your friends and earn rewards</Text>
    </NavLink>
    </Box>
   
    </Flex>
    </Box>
   
  )
}

import React from 'react';
import { Flex, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import placed from '../Images/placed.gif'

export default function PlaceOrder() {
  return (
    <div>
        <Flex style={{marginTop:"10rem", flexDirection:"column", alignItems:"center"}}>
            <img src={placed} alt='orderplaced' style={{width:"50%"}}/>
            <Link to='/'>
            <Button 
            style={{ width:"13rem", height:"2.5rem", fontWeight:"bold",fontSize:"18px",marginTop:"1.5rem",
            color:"white", backgroundColor:"rgb(66, 162, 162)", borderRadius:"5px", border:"1px solid rgb(66, 162, 162)", cursor:"pointer"}}>
            SHOP MORE</Button>
            </Link>
        </Flex>
    </div>
  )
}

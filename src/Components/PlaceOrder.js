import React from 'react';
import { Flex,Text, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import placed from '../Assets/order-succesfull.gif'

export default function PlaceOrder() {
  return (
    <div>
        <Flex style={{marginTop:"10rem", flexDirection:"column", alignItems:"center"}}>
            <img src={placed} alt='orderplaced' style={{width:"20%"}}/>
            <Text style={{color:"black", fontWeight:"600"}}>"Payment processed! Your order is now being prepared."</Text>
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

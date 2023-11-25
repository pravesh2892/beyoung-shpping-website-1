import { Box, Flex, Text, Button, OrderedList } from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import {AiOutlineLeft} from'react-icons/ai';
import empty from '../Images/empty.webp';
import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrderList } from '../ServiceApi';

export default function Orders(){
 
  const [orderList, setOrderList] = useState("");
  // const [getList, setGetList]= useState([]);
  
   
 

  useEffect(()=>{
  const fetchData = async()=>{
    try{
      const data = await getOrderList();
      console.log(data);
      setOrderList(data);  
    }catch(error){
      console.error(error);
    }
  };
  fetchData();
  // const list = localStorage.getItem("orderHistory");
  // if(list){
  // setOrderList(JSON.parse(list));
  // }
},[])
 
console.log(orderList);
console.log(orderList?.data);





// const logProductNames = () => {
//   orderList?.data?.items?.forEach((order) => {
//     order.data.items.forEach((productItem) => {
//       console.log(productItem.product.name);
//     });
//   });
// };
// logProductNames();

 
  return (
    <Box style={{marginLeft:"10%", marginTop:"5rem"}}>
      <Box>
    <Flex>
        <Link to ="/Account" style={{textDecoration:"none"}}>
        <AiOutlineLeft style={{marginTop:"25px", marginRight:"15px", color:"#51cccc"}}/>
        <Text style={{color:"#51cccc", marginTop:"-24px", marginLeft:"25px"}}> Back to My Account</Text>
        </Link>
    </Flex>
    <h1 className='heading3'style={{letterSpacing:"0.5px", marginTop:"30px"}}>My Orders</h1>
    <hr className='ruler' style={{marginLeft:"10px", marginTop:"-10px"}}/>
    </Box>
     {orderList?.data?.length> 0 ? (
     <>
     {orderList?.data?.map((order)=>(
      <Box key={order._id} style={{marginTop:"50px"}}>
       order# <span style={{fontWeight:"bold"}}>{order?.order?._id}</span>
       
      {order?.order?.items?.map((item) => (
      <Box key={item?.product?._id} style={{ border: "1px solid #d6d6d6", width: "80%", height: "250px" }}>
      <Flex>
      <img src={item?.product?.displayImage} style={{ width: "22%" }} alt="item" />
      <Flex style={{ flexDirection: "column", width: "80%" }}>
      <Text style={{ marginLeft: "5%" }}>{item?.product?.name}</Text>
      <Button style={{ border: "none", marginLeft: '5%', marginRight: "70%", color: "# 128A27", backgroundColor: "#e7ffeb", height: '30px' }}>CONFIRMED</Button>
      <Link to={`/OrderInfo/${order?.order?._id}`} style={{textDecoration:"none"}}>
      <Button style={{ border: "2px solid #42A2A2", marginLeft: '70%', marginRight:"20px", color: "#42A2A2", backgroundColor: "WHITE", height: '50px', borderRadius:"5px", marginTop:"10%", fontWeight:"bold", width:"150px"}}>
      ORDER INFO</Button>
      </Link>
      </Flex>
      </Flex>
      </Box>
      ))}   
      </Box>
      ))}
     
     </>
     ):(
      <>
        <Box><img src={empty} alt="empty bag" style={{marginLeft:"35%", width:"20%"}}/></Box>       
        <Text style={{ marginLeft:"32%", marginTop:"0",fontWeight:"bold"}}>Hey! You haven't order anything till yet.</Text>
            <Link to='/' style={{marginLeft:"35%"}}>
            <Button 
            style={{ width:"13rem", height:"2.5rem", fontWeight:"bold",fontSize:"18px",
            color:"white", backgroundColor:"rgb(66, 162, 162)", borderRadius:"5px", border:"1px solid rgb(66, 162, 162)", cursor:"pointer"}}>
            SHOP NOW</Button>
            </Link>
            </>
        )}
    </Box>
    
  )
}

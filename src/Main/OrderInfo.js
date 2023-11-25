import React from 'react';
import { Box, Flex, Text, Button} from '@chakra-ui/react';
import {Link, useParams} from 'react-router-dom'
import {AiOutlineLeft} from'react-icons/ai';
import {TiTick} from 'react-icons/ti';
import empty from '../Images/empty.webp';
import { useEffect, useState } from 'react';
import { getSingleOrder } from '../ServiceApi';

export default function OrderInfo() {
    const{id} = useParams();
    console.log(id);
    const [singleOrder, setSingleOrder] = useState("");
    // const [getList, setGetList]= useState([]);
    
     
   
  
    useEffect(()=>{
    const fetchData = async()=>{
      try{
        const data = await getSingleOrder(id);
        console.log(data);
        setSingleOrder(data);  
      }catch(error){
        console.error(error);
      }
    };
    fetchData();
    // const list = localStorage.getItem("orderHistory");
    // if(list){
    // setOrderList(JSON.parse(list));
    // }
  },[id])
   
  console.log(singleOrder);
  console.log(singleOrder.data);
  console.log(singleOrder.data.shipmentDetails);
  console.log(singleOrder.data.shipmentDetails.address.street);

  
  
  
  
  
  // const logProductNames = () => {
  //   orderList?.data?.items?.forEach((order) => {
  //     order.data.items.forEach((productItem) => {
  //       console.log(productItem.product.name);
  //     });
  //   });
  // };
  // logProductNames();
  
   
    return (
      <Box style={{ marginLeft: "10%", marginTop: "5rem" }}>
      <Flex>
        <Link to="/Orders" style={{ textDecoration: "none" }}>
          <AiOutlineLeft style={{ marginTop: "25px", marginRight: "15px", color: "#51cccc" }} />
          <Text style={{ color: "#51cccc", marginTop: "-24px", marginLeft: "25px" }}> Back to My Orders</Text>
        </Link>
      </Flex>
      {singleOrder?.data?.items.map((order) => (
        <Box key={order._id} style={{ marginTop: "50px", flex: 1 }}>
          <Flex style={{ gap: "15%", color: "rgba(0,0,0,.7)", fontSize: "14px" }}>
            <h5>
              order# <span style={{ fontWeight: "bold", color: "black" }}>{order?.product._id}</span>
            </h5>
            <h5>
              ORDER PLACED<span style={{ fontWeight: "bold", marginLeft: "10px" }}>{order?.product.createdAt && order?.product.createdAt.split('.')[0]}</span>
            </h5>
          </Flex>
          <Box style={{ border: "1px solid #d6d6d6", width: "50%", height: "280px", marginBottom: "25px" }}>
            <Flex>
              <img src={order?.product?.displayImage} style={{ width: "22%" }} alt="item" />
              <Flex style={{ flexDirection: "column", width: "80%", marginTop: "30px" }}>
                <Button
                  style={{
                    border: "none",
                    marginLeft: '5%',
                    marginRight: "70%",
                    color: "#128A27",
                    backgroundColor: "#e7ffeb",
                    height: '30px',
                  }}
                >
                  CONFIRMED
                </Button>
                <Text style={{ marginLeft: "5%", fontSize: "14px" }}>{order?.product?.name}</Text>
                <Text style={{ marginLeft: "5%", fontSize: "14px", marginTop: "-10px" }}>₹ {order?.product?.price}</Text>
              </Flex>
            </Flex>
            <Flex style={{ marginTop: "30px", marginLeft: "40px", color: "#2ca003" }}>
              <Flex style={{ flexDirection: "column" }}>
                <Button
                  style={{
                    borderRadius: "50px",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #2ca003",
                    backgroundColor: "#e7ffeb",
                    marginLeft: "50px",
                  }}
                >
                  <TiTick style={{ color: "#2ca003" }} />
                </Button>
                <Text style={{ color: "#2ca003", marginTop: "5px", paddingLeft: "5px" }}>CONFIRMED</Text>
              </Flex>
              <Text style={{ marginTop: "-2px" }}>______________________</Text>
              <Flex style={{ flexDirection: "column" }}>
                <Button
                  style={{
                    borderRadius: "50px",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #2ca003",
                    backgroundColor: "#e7ffeb",
                  }}
                >
                  <TiTick style={{ color: "#2ca003" }} />
                </Button>
                <Text style={{ color: "#2ca003", marginTop: "5px", marginLeft: "-10px" }}>PROCESSING</Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      ))}
      <Box style={{ width: "50%", height: "100px", border: "1px solid #d6d6d6" }}>
        <Button style={{ height: "20px", color: "#fe8f00", backgroundColor: "#fff9f2", border: "1px solid #fe8f00", width: "60px", marginLeft:"30px", marginTop:"20px" }}>
          {singleOrder?.data.shipmentDetails?.type}
        </Button>
        <Text style={{marginLeft:"20px", fontSize:"12px"}}>
          {singleOrder?.data?.shipmentDetails?.address?.street}, {singleOrder?.data?.shipmentDetails?.address?.city}
        </Text>
      </Box>
      <div style={{ flex: 1, marginLeft: "60%", marginTop: "-36%" }}>
        <Flex style={{ width: "90%", height: "500px", flexDirection: "column" }}>
          <Box style={{ width: "100%", height: "100px", border: "1px solid #d6d6d6" }}>
            <h5 style={{ color: "rgba(0,0,0,.38)", marginLeft: "20px", marginRight: "10px" }}>SHIPPING DETAILS</h5>
            <Text style={{marginLeft:"20px", fontSize:"12px"}}>
            {singleOrder?.data?.shipmentDetails?.address?.street}, {singleOrder?.data?.shipmentDetails?.address?.city}</Text>
          </Box>
          {singleOrder?.data?.items.map((order) => (
          <Box style={{ width: "100%", height: "300px", marginTop: "50px", border: "1px solid #d6d6d6" }}>
            <h5 style={{ marginLeft: "20px", marginRight: "10px", color: "rgba(0,0,0,.38)" }}>PAYMENT SUMMARY</h5>
            <Flex style={{ justifyContent: "space-between", marginLeft: "20px", marginRight: "20px" }}>
              <Text>Cart Total</Text>
              <Text>₹ {order?.product?.price}</Text>
            </Flex>
            <Flex style={{ justifyContent: "space-between", marginTop: "-15px", marginLeft: "20px", marginRight: "20px" }}>
              <Text>Delievery Fee</Text>
              <Text>FREE</Text>
            </Flex>
            <Flex style={{ justifyContent: "space-between", marginTop: "-15px", marginLeft: "20px", marginRight: "20px" }}>
              <Text>COD</Text>
              <Text>FREE</Text>
            </Flex>
            <Flex
              style={{ justifyContent: "space-between", marginTop: "-15px", borderBottom: "2px solid #d6d6d6", marginLeft: "20px", marginRight: "20px" }}
            >
              <Text>Order Total</Text>
              <Text>₹ {order?.product?.price}</Text>
            </Flex>
            <Flex style={{ justifyContent: "space-between", marginLeft: "20px", marginRight: "20px" }}>
              <h5>Amount Paid</h5>
              <h5>₹ {order?.product?.price}</h5>
            </Flex>
          </Box>
          ))}
        </Flex>
      </div>
    </Box>
  );
}
  

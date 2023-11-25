import React, { useEffect } from 'react'
import {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import {BsFillCreditCardFill} from 'react-icons/bs';
import{BiSolidWalletAlt, BiSolidBank, BiSolidCaretRightCircle} from 'react-icons/bi';
import {GiMoebiusTriangle} from 'react-icons/gi';
import {FaIndianRupeeSign} from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeCart} from '../Action';
import info from '../Images/info.png';



export default function Payment() {
    const[selectPayment, setSelectPayment]  = useState(null);
    const[userDetail, setUserDetail] = useState(null);
      
    const navigator = useNavigate();

    const handlePayment = (paymentMethod)=>{
        setSelectPayment(paymentMethod)
    }
     const dispatch = useDispatch();
     const cart = useSelector((state)=>state.data.cart);
            //  console.log(cart)
     useEffect(()=>{
        dispatch(getCart());
     },[])
     
     const handleRemoveItem =(itemId)=>{
        console.log(itemId);
        dispatch(removeCart(itemId))
          dispatch(getCart());
        };
        const items = cart?.data?.items

        const handlePay = async () => {
            const itemsToRemove = cart?.data?.items || [];
            const removeItems = async (items) => {
              for (const product of items) {
                const itemId = product.product?._id;
                if (itemId) {
                  await dispatch(removeCart(itemId));
                }
              }
            };
            await removeItems(itemsToRemove);
            navigator('/PlaceOrder');
          };
        
         
    useEffect(()=>{
        const userInfo = localStorage.getItem("userDetailsList");
        if(userInfo){
            setUserDetail(JSON.parse(userInfo));
        }
    },[])
    const Price = cart?.data?.totalPrice;
    const totalPrice = Price+20;
    
  return (
    <div style={{ display:"flex",marginTop:"8rem", marginLeft:"40px"}}>
    <div style={{flex:1}}>
     <h2>Choose your payment method</h2>
     <div>
     <Box style={{border:"1px solid black", height:"480px", width:"120%"}}>
     <Flex style={{gap:"50px"}}>
    <Box style={{width:"30%", height:"45px", padding:"25px", borderBottom:"1px solid #d6d6d6",
    background: selectPayment === "debitCard" ? "white" : "rgba(0, 0, 0, 0.05)"}} onClick={() => handlePayment("debitCard")}>
    <BsFillCreditCardFill style={{marginRight:"20px", color:"rgba(0, 0, 0, 0.5)"}}/>Debit Card & Credit Card</Box>
    {selectPayment === "debitCard" && (
    <h3 style={{height:"40px"}}>Not Applicable</h3>
    )}
    </Flex>

    <Flex style={{gap:"50px"}}>
    <Box style={{width:"30%", height:"45px", padding:"25px", borderBottom:"1px solid #d6d6d6" , 
    background: selectPayment === "wallet" ? "white" : "rgba(0, 0, 0, 0.05)"}} onClick={() => handlePayment("wallet")}>
    <BiSolidWalletAlt  style={{marginRight:"20px",color:"rgba(0, 0, 0, 0.5)"}}/>Wallet</Box>
    {selectPayment === "wallet" && (
    <h3 style={{height:"40px", marginTop:"-10%"}}>Not Applicable</h3>
    )}
    </Flex>
     
     <Flex style={{gap:"50px"}}>
    <Box style={{width:"30%", height:"45px", padding:"25px", borderBottom:"1px solid #d6d6d6",
    background: selectPayment === "upi" ? "white" : "rgba(0, 0, 0, 0.05)"}} onClick={() => handlePayment("upi")}>
    <GiMoebiusTriangle  style={{marginRight:"20px",color:"rgba(0, 0, 0, 0.5)"}}/>UPI</Box>
    {selectPayment === "upi" && (
    <h3 style={{height:"40px", marginTop:"-20%"}}>Not Applicable</h3>
    )}
    </Flex>

    <Flex style={{gap:"50px"}}>
    <Box style={{width:"30%", height:"45px",padding:"25px", borderBottom:"1px solid #d6d6d6",
    background: selectPayment === "net" ? "white" : "rgba(0, 0, 0, 0.05)"}} onClick={() => handlePayment("net")}>
    <BiSolidBank  style={{marginRight:"20px", color:"rgba(0, 0, 0, 0.5)"}}/>Net Banking</Box>
    {selectPayment === "net" && (
    <h3 style={{height:"40px", marginTop:"-30%"}}>Not Applicable</h3>
    )}
    </Flex>
    
    <Flex style={{gap:"50px"}}>
    <Box style={{width:"30%", height:"45px", padding:"25px", borderBottom:"1px solid #d6d6d6",
    background: selectPayment === "cod" ? "white" : "rgba(0, 0, 0, 0.05)"}} onClick={() => handlePayment("cod")}>
    <FaIndianRupeeSign  style={{marginRight:"20px", color:"rgba(0, 0, 0, 0.5)"}}/>Cash On Delivery</Box>
    {selectPayment === "cod" && (
    <div>
    <p style={{height:"40px", marginTop:"-90%"}}>Cash handling charges of ₹ 20 are applicable</p>
    <Button style={{backgroundColor:"#42A2A2", color:"white", fontWeight:"bold", width:"350px", border:"none", height:"50px", borderRadius:"5px", 
    marginTop:"-13px"}} onClick={handlePay}>
    Pay  ₹ {totalPrice}</Button>
    </div>
    )}
    </Flex>
    </Box>
    </div>
    </div>
    <div style={{ flex: 1 }}>
    <Box style={{border:"none", borderLeft:"2px solid #d6d6d6", width:"65%", marginLeft:"30%", height:"550px"}}>
    {userDetail?.map((item)=>(
        <NavLink to='/Address' style={{textDecoration:"none", color:"black"}}>
        <Box style={{marginLeft:"20px", borderBottom:"2px solid rgba(0, 0, 0, 0.3)"}}>
        <Text>Delivering order to <span style={{fontWeight:"bold"}}>{item.name}</span></Text>
        <Text style={{fontSize:"15px", marginTop:"-10px", color:"#525252"}}>{item.street} {item.locality}....<BiSolidCaretRightCircle style={{color:"#42A2A2", fontSize:"20px"}}/></Text>
        </Box>
        </NavLink>
))}

    <Box style={{marginLeft:"8%"}}>
        <h3>You are paying for these items</h3>
    <Container style={{borderBottom:"2px solid rgba(0, 0, 0, 0.3)"}}>
        {cart?.data?.items?.map((item)=>(
        <Flex style={{gap:"10px", marginBottom:"10px"}}>
        <img src={item.product.displayImage} alt="product" style={{width:"50px", height:"50px"}}/>
        <Text style={{fontSize:"12px"}}>{item.product.name}</Text>
        </Flex>
        ))}
    </Container>
    <Container style={{borderBottom:"2px solid rgba(0, 0, 0, 0.3)"}}>
    <h3>Price Summary</h3>
    <Flex>
        <Text style={{marginRight:"40%", fontSize:"13px"}}>Total MRP (Incl. of taxes)</Text>
        <Text style={{fontSize:"13px"}}>₹ {Price}</Text>
    </Flex>
    <Flex>
        <Text style={{marginRight:"52%", marginTop:"-10px",fontSize:"13px"}}>Shipping Charges</Text>
        <Text style={{color:"#42A2A2", marginTop:"-10px", fontSize:"13px"}}>FREE</Text>
    </Flex>
    <Flex>
        <Text style={{marginRight:"52%", marginTop:"-10px", fontSize:"13px"}}>Discount on MRP</Text>
        <Text style={{marginTop:"-10px", fontSize:"13px"}}>₹ 0</Text>
    </Flex>
    </Container>
    <Container>
        <Flex>
        <h4 style={{marginRight:"50%"}}>Final Amount</h4>
        <h4>₹ {Price}</h4>
        </Flex>
    </Container>
    </Box>
    <Box style={{marginLeft:"10%"}}>
    <img src={info} alt="infoPage" style={{width:"400px"}}/>
    </Box>
    </Box>
    </div>
    </div>
    
    
  )
}


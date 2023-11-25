import React, { useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {Container, Box, Text, Button, Flex} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder, updateProfile } from '../ServiceApi';
import {IoMdAdd} from 'react-icons/io';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, FormControl, FormLabel, 
  Input, ModalBody, useDisclosure, MenuButton, Menu, MenuList, MenuItem } from "@chakra-ui/react";
import {removeCart, getCart} from '../Action';

export default function Address() {

  const [formData, setFormData] = useState({
    name:"",
    mobile:"",
    pinCode:"",
    city:"",
    state:"",
    street:"",
    locality:"",
    landmark:"",
    addressType:"",
    country:"India",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[selectedAddress, setSelectedAddress] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  const [addCount, setAddCount] = useState(()=>{
    const savedData = localStorage.getItem("userDetailsList");
    return savedData ? JSON.parse(savedData).length :0;
  });

  const[userDetailsList, setUserDetailsList] = useState(()=>{
    const savedAddress = localStorage.getItem("userDetailsList");
    return savedAddress ? JSON.parse(savedAddress):[];
  });

  const cart = useSelector((state)=> state.data.cart);

  useEffect(()=>{
  dispatch(getCart());
  },[dispatch]);  


const items = cart?.data?.items;

  // const handleEdit = (index) => {
  //   setFormData(userDetailsList[index]);
  // };

  const handleRemove = (index) => {
    const updatedList = [...userDetailsList];
    updatedList.splice(index, 1);
    setUserDetailsList(updatedList);
    localStorage.setItem("userDetailsList", JSON.stringify(updatedList));
  };

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(formData);
    setAddCount((prev) => prev + 1);
    setUserDetailsList([...userDetailsList, formData]);
    setFormData({
    name:"",
    mobile:"",
    pinCode:"",
    city:"",
    state:"",
    street:"",
    locality:"",
    landmark:"",
    addressType:"",
    country:"India",
    })
}

  useEffect(() => {
    localStorage.setItem("userDetailsList", JSON.stringify(userDetailsList)); 
  }, [userDetailsList]);
    
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleOrder = async (address) => {
    for (const product of items) {
      await delay(200);
      await placeOrder(product.product._id, address, product.quantity);
      // dispatch(REMOVE_FROM_CART(product.product._id, product.quantity));
    }
  };
   
  return (
   <div style={{marginLeft:"50px", marginTop:"7rem"}}>
   <h3 style={{marginBottom:"50px", fontSize:"25px"}}>My Address</h3>
   <hr className='ruler' style={{marginLeft:"10px", marginTop:"-40px"}}/>
   <Flex style={{gap:"20px", marginTop:"40px"}}>
   {addCount > 0 && (
   <>
   {userDetailsList.map((formData, index) => (
  <>
  <Box key={index} style={{border:"1px solid rgba(0, 0, 0, 0.2)", width:"30%", height:"250px"}}>
  <input style={{marginLeft:"20px", marginTop:"20px"}}
  className="inputRadio"
  type="radio"
  name={index}
  checked={selectedAddress === index}
  onChange={() => setSelectedAddress(index)}/>
  <h3 style={{marginLeft:"60px", marginTop:"-25px"}}>{formData.name}</h3>
  <Button style={{marginLeft:"80%", marginTop:"-80px", color:" rgba(0, 0, 0, 0.3)", border:"none", borderRadius:"5px"}}>
  {formData.addressType}</Button>

  <Text style={{marginTop:"-25px", fontSize:"13px", marginLeft:"20px"}}>
  {formData.street}, {formData.locality}</Text>
  
  <Text  style={{fontSize:"13px", marginLeft:"20px", marginTop:"10%"}}>{formData.city}, {formData.pinCode}</Text>
  <Text style={{fontSize:"13px", marginLeft:"20px", marginTop:"-10px"}}>{formData.state}, {formData.country}</Text>
  
  
  <button style={{color:"#42A2A2", backgroundColor:"WHITE", border:"1.5px solid #42A2A2", borderRadius:"5px", marginLeft:"20px", height:"30px", cursor:"pointer", marginTop:"30px"}} 
  onClick={() => handleRemove(index)}>REMOVE</button>
  
  <Link to ="/Payment" >
  <button style={{color:"white", backgroundColor:"#42A2A2", border:"1.5px solid #42A2A2", borderRadius:"5px", marginLeft:"20px", height:"30px", cursor:"pointer"}}
  onClick={()=>handleOrder(formData)}> 
  CONFIRM</button></Link>
  </Box>
  </>
  ))}
  </>
   )}

   {/* {console.log(addCount)} */}
  {addCount<2   && (
  <>
  <Flex onClick={onOpen} style={{border:"1px solid rgba(0, 0, 0, 0.3)", width:"30%", justifyContent:"center", alignItems:"center", flexDirection:"column", height:"200px"}}>
  <IoMdAdd style={{color:"#42A2A2", fontSize:"20px"}}/>
  <Text style={{color:"#42A2A2"}}>Add New Address</Text>
  </Flex>
  </>
  )}
  </Flex>

    <Modal
          isOpen={isOpen}
          onClose={onClose}>
          <form onSubmit={handleSubmit}>
          <ModalOverlay style={{backgroundColor:"rgba(0, 0, 0,0.2)"}}/>
          <ModalContent className="modal" maxH="100vh">
          {/* <form onSubmit={handleSubmit}> */}
            <ModalHeader style={{display:"flex", marginBottom:"12%", marginLeft:"10px", fontWeight:"bold"}}>Add New Address
            <ModalCloseButton style={{width:"10px", marginLeft:"75%", backgroundColor:"white", border:"none"}} />
            </ModalHeader>
            <ModalBody pb={6} ml={20} overflowY="auto" >
              <FormControl style={{position:"relative"}}>
                <FormLabel className='label'>Country</FormLabel>
                <Input placeholder='INDIA (in capital)' className='input' name="country" required onChange={handleChange} value={formData.country} />
              </FormControl>
              <hr style ={{marginRight:"10%", color:"grey"}} />
              <FormControl mt={20} style={{position:"relative"}}>
                <FormLabel className='label'>Full name</FormLabel>
                <Input placeholder='Full name' className='input' name="name" required onChange={handleChange} value={formData.fullName}/>
              </FormControl>

            <FormControl mt={20} style={{position:"relative"}}>
                <FormLabel className='label'>Mobile Number</FormLabel>
                <Input placeholder='+91' className='input' required onChange={handleChange} name="mobile" value={formData.mobile}/>
              </FormControl>

            <hr style ={{marginRight:"10%", color:"grey"}} />
            
            <FormControl mt={20} style={{position:"relative"}}>
            <Input placeholder='Pincode/Postal/Zipcode' className='input' name="pinCode" 
            required onChange={handleChange} value={formData.pin} type='number'/>
            </FormControl>
            
            <Flex>
            <FormControl mt={20} ml={10} style={{position:"relative"}}>
            <Input placeholder='City(in capital)' required value={formData.city} onChange={handleChange} type='text' name="city"
            style={{lineHeight:"6ex", width:"240px", left:"2em", borderRadius:"6px",border:"1px solid gray", paddingLeft: "20px"}}/>
            </FormControl>

            <FormControl mt={20} ml={10} style={{position:"relative"}}>
            <Input placeholder='State(in capital)'  required value={formData.state} onChange={handleChange} type='text' name="state"
            style={{lineHeight:"6ex", width:"240px", left:"2em", borderRadius:"6px", border:"1px solid gray", paddingLeft: "20px"}}/>
            </FormControl>
            </Flex>

            <FormControl mt={20} ml={10} style={{position:"relative"}}>
            <Input placeholder='Flat no/Building, Street name' required value={formData.address} onChange={handleChange} type='text' name="street"
            style={{lineHeight:"8ex", width:"520px", left:"2em", borderRadius:"6px", border:"1px solid gray", paddingLeft: "20px"}} />
            </FormControl>

            <FormControl mt={20} ml={10} style={{position:"relative"}}>
            <Input placeholder='Area/Locality' required value={formData.locality} onChange={handleChange} type='text' name="locality"
            style={{lineHeight:"8ex", width:"520px", left:"2em", borderRadius:"6px", border:"1px solid gray", paddingLeft: "20px"}}/>
            </FormControl>

            <FormControl mt={20} ml={10} style={{position:"relative"}}>
            <Input placeholder='Landmark' required value={formData.landmark} onChange={handleChange} type='text' name="landmark"
            style={{lineHeight:"8ex", width:"520px", left:"2em", borderRadius:"6px", border:"1px solid gray", paddingLeft: "20px"}}/>
            </FormControl>
             
            <FormControl mt={20} ml={10} style={{position:"relative"}}>
            <Input placeholder='Address Type (Home, Office or Others)' required value={formData.addressType} onChange={handleChange} type='text' name="addressType"
            style={{lineHeight:"8ex", width:"520px", left:"2em", borderRadius:"6px", border:"1px solid gray", paddingLeft: "20px"}}/>
            </FormControl>
         

            <Flex mt={40} ml={50} mb={30}>
              <Button className='save' type="submit" mr={30} onClick={handleSubmit}>
                SAVE ADDRESS
              </Button>
              <Button onClick={onClose} className='cancel'>CANCEL</Button>
              </Flex>
            
              </ModalBody>
              {/* </form> */}
          </ModalContent>
          </form>
        </Modal>
    </div>
  )
}

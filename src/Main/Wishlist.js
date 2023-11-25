import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, getWishlist, removeWishlist } from '../Action';
import {Box, Button, Container, Flex, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {RxCrossCircled} from 'react-icons/rx';
import {PiShoppingBagLight} from 'react-icons/pi';
import wishImage from '../Images/wishImage.png';

export default function Wishlist() {
     
    const[smallerScreen, setSmallerScreen] = useState(window.innerWidth<1000);
    const dispatch = useDispatch();
    const wishlist = useSelector((state)=> state.data.wishlist);
    //console.log(wishlist);

    useEffect(()=>{
        dispatch(getWishlist());
    },[dispatch])

    const handleRemoveItem =(itemId)=>{
        dispatch(removeWishlist(itemId));
        dispatch(getWishlist());
    }

 const handleAddToCart = (itemId, quantity) => {
  if (itemId) {
    dispatch(addCart(itemId, quantity));
    dispatch(removeWishlist(itemId)); 
    dispatch(getWishlist()); 
  } else {
    console.error("Invalid item ID:", itemId);
  }
};
    

   useEffect(()=>{
    const handleResize =()=>{
        setSmallerScreen(window.innerWidth<1000);
        if(window.innerWidth<1000){      
        }
    };
    window.addEventListener('resize', handleResize);
    return()=>{
        window.removeEventListener("resize", handleResize);
    }
   },[]);

   
    return(
        <div style={{marginTop:"6rem"}}>
        {smallerScreen?(
        <>
       <Container style={{display:"flex", flexWrap:"wrap", width:"100%", height:"fit-content", justifyContent:"space-between"}}>    
       {wishlist?.data?.items && wishlist.data.items.length>0 ?(
       wishlist?.data?.items?.map((item, index) => (
       <Box style={{border:"1px solid #eee", width:"45%", padding:"5px"}} key={index}>
        <Container>
       <Link to={`/product/${item.products._id}`}>   
        <img className ="wishlistImage" src={item.products.displayImage}></img>
        </Link>
        <RxCrossCircled  onClick={()=>handleRemoveItem(item.products._id)}
        style={{position: "absolute", marginLeft:"-20px", marginTop:"5px", borderRadius:"50%", 
        backgroundColor: "white", color: "black", cursor:"pointer"}}/>
        </Container>
        <Flex>
        </Flex>
        <div className='wishTitle'  style={{color: "rgb(115, 115, 115)"}}>{item.products.name}</div>
        <div className='wishdata' style={{fontSize: "20px", marginLeft:"20px" }}>₹{item.products.price}</div>
        <Button className='addbag'><PiShoppingBagLight style={{color: "#207bb4", marginRight:"10px"}}/>ADD TO BAG</Button>
        </Box>
        ))
       ):(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',textAlign: 'center', marginLeft:"10%", marginRight:"10%" }}>
    <Flex style={{width: '100%', margin: '0 auto' }}>
    <img src={wishImage} alt="wishlist" style={{ width: '90%' }} />
    </Flex>
    <Text style={{ marginTop: '0', fontWeight: 'bold', textAlign:"center" }}>Hey! Your wishlist is empty.</Text>
    <Text style={{ marginTop: '0', width: '19rem', color: '#8f98a9' }}>
    Save Your favorites here and make them your soon!
    </Text>
    <Link to='/' style={{ margin: '0 auto' }}>
    <Button style={{width: '13rem', height: '2.5rem', fontWeight: 'bold', fontSize: '18px', color: 'white', backgroundColor: 'rgb(66, 162, 162)',
    borderRadius: '5px', border: '1px solid rgb(66, 162, 162)', cursor: 'pointer'}} >
      SHOP NOW
    </Button>
    </Link>
    </div>
    )
    }
    </Container>
    </>
        ):(
        <>
        <h1 style={{marginLeft: "50px"}}>Wishlist</h1>
       <Container style={{display: "flex", flexWrap:"wrap"}}>    
       {wishlist?.data?.items && wishlist.data.items.length>0 ?(
       wishlist?.data?.items?.map((item, index) => (
       <Box className='wishlistData' key={index}>
        <Container>
       <Link to={`/product/${item.products._id}`}>   
        <img className ="wishlistImage" src={item.products.displayImage}></img>
        </Link>
        <RxCrossCircled  onClick={()=>handleRemoveItem(item.products._id)}
        style={{position: "absolute", marginLeft:"-20px", marginTop:"5px", borderRadius:"50%", 
        backgroundColor: "white", color: "black", cursor:"pointer"}}/>
        </Container>
        <Flex>
        </Flex>
        <div className='wishTitle'  style={{color: "rgb(115, 115, 115)"}}>{item.products.name}</div>
        <div className='wishdata' style={{fontSize: "20px", marginLeft:"20px" }}>₹{item.products.price}</div>
        
        <Button className='addbag' onClick={() => handleAddToCart(item.products._id, item.quantity)}><PiShoppingBagLight style={{color: "#207bb4", marginRight:"10px"}}/>ADD TO BAG</Button>
        </Box>
        ))
       ):(
        <Flex style={{justifyContent:"center", alignItems:"center", flexDirection:"column", marginLeft:"37%"}}>
            <img src={wishImage} alt="wishlist" style={{ width:"35%"}} />
            <Text style={{marginTop:"0",fontWeight:"bold"}}>Hey! Your wishlist is empty.</Text>
            <Text style={{marginTop:"0", width:"24rem", color:"#8f98a9"}}>
            Save Your favourites here and make them your soon!</Text>
            <Link to='/'>
            <Button 
            style={{ width:"13rem", height:"2.5rem", fontWeight:"bold",fontSize:"18px",
            color:"white", backgroundColor:"rgb(66, 162, 162)", borderRadius:"5px", border:"1px solid rgb(66, 162, 162)", cursor:"pointer"}}>
            SHOP NOW</Button>
            </Link>
        </Flex>
       )
    }
        </Container>
        </>)}
        </div>
    )
}
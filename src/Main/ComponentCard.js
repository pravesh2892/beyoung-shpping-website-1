
import { Container, Box, Flex, Text} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import {BsHeart} from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DATA, addWishlist, removeWishlist} from '../Utils/Action';
import noAvailable from '../Assets/noAvailable.jpg';


const ComponentCard = ({ data }) => {
    const [inWishList, setInWishlist] = useState({});
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [smallerScreen,  setSmallerScreen] = useState(window.innerWidth < 1000);
    
    const dispatch = useDispatch();
    const wishlist = useSelector((store)=> store.data.wishlist);
    const isLoggedIn = useSelector((store)=>store.user.isLoggedIn)
    console.log(wishlist);

    useEffect(()=>{
    dispatch(FETCH_DATA())
    .then(()=>{
        setIsLoading(false);
    })
    .catch((error) => {
        setIsLoading(false);
        console.error('Error fetching data:', error);
      });
    },[dispatch])

    const handleAddToWishList =(productId)=>{
       if(isLoggedIn){
        if(inWishList[productId]){
          dispatch(removeWishlist(productId));
          setInWishlist((prevState)=>({
            ...prevState,
            [productId]: false,
          }));
        }else{
          dispatch(addWishlist(productId));
          setInWishlist((prevState)=>({
            ...prevState,
            [productId]: true,
          }));
             }
          }
      }
      
      useEffect(()=>{
        if (product) {
          const updatedData = data.map((item) => {
            const inWishList = wishlist && wishlist[item._id]
            return { ...item, inWishlist: inWishList };
          });
          setProduct(updatedData);
        }
      }, [wishlist]);

      useEffect(()=>{
        const handleResize = () => {
          setSmallerScreen(window.innerWidth < 1000);
          if(window.innerWidth<1000){
          }
          
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      },[]);
  

  return (
    <>
    {isLoading ? (
    <div style={{display:"flex", justifyContent:"center", 
    alignItems:"center",height:"70vh", width:"50vw",}}>
   <Text>Loading is .....</Text>
    </div>
    ):(
    <>
    {smallerScreen ? (
     <Container className='ResdataInfo' style={{marginLeft:"10px", marginTop:"35px"}}>
          {data.map((item, index) => (
            <Flex key={index} style={{flexDirection:"column"}}>
              <Link to={`/product/${item._id}`}>
                <img src={item.displayImage} style={{width:"100%"}}></img>
              </Link>
              <Flex>
                <h5 style={{paddingLeft:"10px", marginTop:"5px", width:"50%"}}>{item.brand}</h5>
                {isLoggedIn ? (
                  <>
                {inWishList[item._id] ? (
                 <AiFillHeart style={{ height: "20px", width: "20px", color:"red", marginLeft: "45px" }} 
                 onClick={()=> handleAddToWishList(item._id)}/>
                ):(
                <BsHeart style={{ height: "20px", width: "20px", color:"grey", marginLeft: "45px" }} 
                onClick={()=> handleAddToWishList(item._id)}/>
                )}
                </>
                ):(
                  <>
                  <Link to ='/Login'>
                  <BsHeart style={{ height: "20px", width: "20px", color:"grey", marginLeft: "15px" }}/>
                  </Link>
                  </>
                )}
                </Flex>
                <Text style={{marginTop:"-10px", paddingLeft:"10px", overflow: "hidden"}}>{item.name}</Text>
                <h3 style={{marginTop:"-10px", paddingLeft:"10px"}}>₹ {item.price}</h3>
                </Flex>
               
          ))}        
        </Container>
    ):(
    <>
      {data?.map((item, index) => (
        <Box className='dataStyle' key={index} style={{ position: 'relative', borderRadius:"5px" }}>
        <Link to={`/product/${item._id}`}>
         <img className='dataImage' src={item.displayImage ? item.displayImage : noAvailable} alt="image" />
        </Link>
        
         
          {isLoggedIn ? (
            <div style={{ position: 'absolute', top: '5px', right: '9px',height: "25px", width: "25px", borderRadius:"50%" ,background:"#fff" }}>
          {inWishList[item._id] ? (
           <AiFillHeart style={{ height: "20px", width: "20px", color:"red", marginLeft: "8%",marginTop:"5px", cursor:"pointer", lineHeight:"44px"  }} 
           onClick={()=> handleAddToWishList(item._id)}/>
          ):(
          <BsHeart style={{ height: "20px", width: "20px", color:"grey" , marginLeft: "8%" ,marginTop:"5px", cursor:"pointer" , lineHeight:"44px" }} 
          onClick={()=> handleAddToWishList(item._id)}/>
          )}
          </div>
          ):(
            <>
            <Link to ='/Login'>
            <BsHeart style={{ height: "20px", width: "20px", color:"grey" , marginLeft: "8%" ,marginTop:"5px", cursor:"pointer", lineHeight:"44px" }}/>
            </Link>
            </>
          )}
        
        <div className='dataTitle' style={{ color: "rgba(0,0,0,0.7)", fontWeight:"600", fontSize:"14px" }}>{item.name}</div>
        <div className='dataPrice' style={{ fontSize: "20px" }}>₹{item.price}/-</div>
     </Box>
    )
    )}
    </>  
    )}
    </>
    )}
    </>
  );
};

export default ComponentCard;
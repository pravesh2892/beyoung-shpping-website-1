  import { useState } from 'react'
  import { useEffect, useRef } from 'react';
  import {Link, useNavigate} from 'react-router-dom';
  import { Container, Flex, Box, Button, Text, propNames} from '@chakra-ui/react';
  import {FaTruck} from 'react-icons/fa';
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import info from '../Images/info.png';
  import emptybag from '../Images/emptybag.png';
  import { placeOrder } from '../ServiceApi';
  import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, FormControl, FormLabel, 
  Input, ModalBody, useDisclosure, MenuButton, Menu, MenuList, MenuItem } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import {addWishlist, getCart, removeCart, removeWishlist } from '../Action';
import Footer from './Footer';

  export default function Cart() {
    const [inWishList, setInWishlist] = useState({});
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("S");
    const [smallerScreen, setSmallerScreen] = useState(window.innerWidth<100);
    
  
    const navigate = useNavigate();
    const wishlist = useSelector((store)=> store.data.wishlist);
    const isLoggedIn = useSelector((store)=> store.user.isLoggedIn);

    const handleAddToWishList =(productId)=>{
      // console.log("handlewishlist being called", productId)
     if(isLoggedIn){
      if(inWishList[productId]){
        dispatch(removeWishlist(productId));
        dispatch(removeCart(productId));
        setInWishlist((prevState)=>({
          ...prevState,
          [productId]: false,
        }));
      }else{
        dispatch(addWishlist(productId));
        dispatch(removeCart(productId));
        setInWishlist((prevState)=>({
          ...prevState,
          [productId]: true,
        }));
           }
        }
    } 
  
    const dispatch = useDispatch();
    const cart = useSelector((store)=> store.data.cart);
    console.log(cart)
  
   
    useEffect(()=>{
    dispatch(getCart());
    },[dispatch])

    const handleRemoveItem =(itemId)=>{
      console.log(itemId);
      dispatch(removeCart(itemId))
        dispatch(getCart());
      };
       
  

  const totalPrice = cart?.data?.totalPrice;
  const items = cart?.data?.items
  console.log(items);

  useEffect(() => {
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    // localStorage.setItem("userDetailsList", JSON.stringify(userInfo));
  // }, [userInfo]);
  },[])

      return (
        <div>
          <Flex flexDirection="row">
            <h5 style={{ marginLeft: '50px', marginTop: '50px', fontSize: '20px' }}>My Bag</h5> 
         <div style={{ marginLeft: '10px', marginTop: '50px', fontSize: '20px' }}>{cart?.data?.items?.length} item(s)</div>
          </Flex>
          {Array.isArray(cart?.data?.items) && cart?.data?.items.length > 0 ? (
            <div>
              <Flex>
                <div className="cartInfo">
                  <FaTruck style={{ color: 'red', marginRight: '20px' }} />
                  Yay! You get FREE delivery on this order
                </div>
                <Box className="cartDiscount">Save extra <span style={{ fontWeight: 'bold' }}>₹ 70</span> with <span style={{ fontWeight: 'bold' }}>TriBe</span></Box>
              </Flex>
              <Flex>
                <Container style={{ width: '50%', height: 'fit-content', marginLeft: '30px', marginTop: '20px' }}>
                  {cart?.data?.items?.map((item) => (
                    <div key={item._id} style={{ marginBottom: '5%', border: '1px solid rgb(203, 201, 201)', height: '250px' }}>
                      <Flex>
                        <div className='cartName'>{item.product.name}</div>
                        <img className="cartImage" src={item.product.displayImage} alt="image" />
                      </Flex>
                      <div className='cartPrice'>₹ {item.product.price}</div>
                      <div >
                      
                      <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton className="chooseButton"
                    isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />} >
                    Size:{size}
                    </MenuButton>
                    <MenuList >
                      {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                        <MenuItem key={index} onClick={() => setSize(size)} className="setButton">
                          {size}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </>
                )}
              </Menu>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton className="chooseButton" isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon/>}>
                    Qty:{qty}
                    </MenuButton>
                    <MenuList>
                      {[1, 2, 3, 4].map((qty) => (
                    <MenuItem key={qty} onClick={() => setQty(qty)} className="setButton">
                      {qty}
                    </MenuItem>
                    ))}
                    </MenuList>
                  </>
                )}
              </Menu>
              </div>
                      <hr className='divider' style={{ marginTop: '65px' }} />
                      <Flex style={{zIndex:0}}>
                      <Button className='removeCart'onClick={() => handleRemoveItem(item.product._id)}>Remove</Button>
                      <Button className='wishcart' onClick={()=>handleAddToWishList(item.product._id)}>Move To Wishlist</Button>
                      </Flex>
                      </div>
               ))}
                </Container>
                <Container className='order' style={{ width: '35%', height: 'fit-content', marginLeft: '80px', marginTop: '20px' }}>
                  <Box className='cartTotal'>PRICE SUMMARY</Box>
                  <Flex>
                  <Box className='priceTag'>Total MRP (Incl. of taxes)</Box>
                  <Box className='priceTag' style={{marginLeft:"10rem"}}>₹ {totalPrice}</Box>
                  </Flex>
                  <Flex>
                  <div className='priceTag'>Shipping Charges</div>
                  <div style={{ color:"#42a2a2", marginLeft:"14.5rem", marginTop:"20px"}}>FREE</div>
                </Flex>
                <Flex>
                <Box className='priceTag' style={{fontWeight:"bold"}}>SubTotal</Box>
                <Box style={{fontWeight:"bold", marginLeft:"17rem", marginTop:"20px"}}>₹ {totalPrice}</Box>   
                </Flex>
                <Box>
                <Flex style={{borderTop:"1px solid #eee", marginTop:"20px"}}>
                <div className='total'>Total</div>
                <Link to ="/Address">
                <Button className='totalButton'>CONTINUE</Button>
                </Link>
                </Flex>
              <div style={{marginTop:"-30px", marginLeft:"20px"}}>₹<span style={{fontWeight:"bold"}}>{totalPrice}</span></div>
              </Box>
              <Box className='cartpic'>
              <img src={info} alt="infoPage" style={{width:"400px"}}/>
              </Box> 
                </Container>
               
              </Flex>
            </div>
          ) : (
            <Flex style={{flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
              <img src={emptybag} alt="cartbag" style={{ width: '150px'}} />
              <Text style={{marginTop: '0', fontSize: '25px' }}>Nothing in the bag.</Text>
              <Link to='/'>
                <Button
                  style={{
                    width: '200px',
                    height: '2.5rem',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    
                    color: 'rgb(66, 162, 162)',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    border: '1px solid rgb(66, 162, 162)',
                    cursor: 'pointer',
                  }}
                >
                  Continue Shopping
                </Button>
              </Link>
            </Flex>
          )}
          
        </div>
      );
    } 

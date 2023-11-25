import { useEffect, useState} from "react";
import { Container, Box, Flex, Text, Button} from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react";
import { NavLink, useParams, useNavigate, Link } from 'react-router-dom';
import {AiFillStar, AiFillHeart} from 'react-icons/ai';
import {PiShoppingBagLight} from 'react-icons/pi';
import {BiStar, BiMinus} from 'react-icons/bi';
import {BsHeart} from 'react-icons/bs';
import {GrLocation} from 'react-icons/gr';
import {MdAdd} from 'react-icons/md';
import {RiFileListLine, RiExchangeLine} from 'react-icons/ri';
import flag from '../Images/flag.png';
import info from '../Images/info.png';
import { useDispatch, useSelector } from "react-redux";
import { addCart, addWishlist, removeWishlist } from "../Action";
import { getProduct } from "../ServiceApi";
import Footer from "./Footer";


function ProductDetail(){

    const {id} = useParams();
    //console.log(id);
   
    const[productImages, setProductImages] = useState([]);
    const[productInfo, setProductInfo] = useState([]);
    const[number, setNumber] = useState(0);
    const [smallerScreen, setSmallerScreen] = useState(window.innerWidth<1000)
    const [inWishList, setInWishlist] = useState({});
    const [buttonText, setButtonText] = useState('ADD TO BAG');
    const [selectedSize, setSelectedSize] = useState('');
     const navigate = useNavigate();

     const handleAddToCart = () => {
      if (buttonText === 'ADD TO BAG') {
        setButtonText('GO TO BAG');
        dispatch(addCart(productInfo._id, productInfo.quantity)); 
      }else{
      navigate('/cart');
      }
    };

    const dispatch = useDispatch();
    const cartItem = useSelector((state)=>state.data.cart);
    console.log(cartItem);
    const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
    const wishlist = useSelector((state)=>state.data.wishlist)
    const productSize = ['S','XL', 'L', 'M', 'XXL']; 
    const availableSizes = productInfo.size || [];
    //console.log(cartItem);
     
    const handleAddToWishList =(productId)=>{
      // console.log("handlewishlist being called", productId)
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
    
    
    useEffect(() => {
    const fetchData = async () => {
        try {
          const data = await getProduct(id);
          setProductImages(data.data?.images);
          setProductInfo(data.data);
        } catch (error) {
          console.error("Error fetching product data: ", error);
        }
      };
      fetchData();
    }, [id]);

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

    

    return(
     <Box style={{ marginTop:"6rem",display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {smallerScreen?(
      <>
    <div style={{marginLeft:"10px"}}>
  <div style={{ marginTop: "-50px" }}>
  <div style={{marginRight:"10px" }}>
  {productImages[number] && (
  <img src={productImages[number]} alt="numberImage" style={{ maxWidth:"100%",margin:"20px auto"}} />
  )}
  </div>
    {productImages && productImages.length > 0 ? (
      <div style= {{ display: "flex", justifyContent: "center", marginLeft:"8px"}}>
        {productImages.map((item, index) => (
          <div key={index} style={{flexDirection:"row"}}>
            <img src={item} alt="" onClick={() => setNumber(index)} style={{width:"50px", maxWidth:"10%", minWidth:"50px", margin:"0 10px", cursor:"pointer"}} />
          </div>
        ))}
         </div>
         ) : null}
        </div>     
        <h4 style={{color:"#4f5632", textTransform:"capitalize", marginTop:"30px", marginLeft:"10px"}}>{productInfo.brand}</h4>
        <Text style={{marginLeft:"10px", marginTop:"-12px"}}>{productInfo.name}</Text>
        <div style={{marginLeft:"10px", height:"25px", display:"flex", width:"55px", marginTop:"8px", fontSize:"18px", border:".3px solid #949494", backgroundColor:"#f7f7f7"}}>
        <AiFillStar style={{color:"#ffc700", marginLeft:"10px", marginRight:"8px", paddingTop:"3px", paddingLeft:"7px"}}/><div>4</div></div>
        <div style={{marginTop:"8px", marginLeft:"10px"}}>₹<span style={{fontSize:"24px", fontWeight:"bold", paddingTop:"10px"}}>{productInfo.price}</span></div>
        <div style={{color:"#737373", marginBottom:"5%", marginLeft:"10px"}}>inclusive of all taxes</div>
        <div className="productOffer" style={{marginLeft:"10px"}}>TriBe members get an extra discount of 
        <span style={{fontWeight:"bold", marginLeft:"10px"}}> ₹30</span> and FREE shipping.<br/>
        <span style={{color:"#42a2a2", marginLeft:"10px"}}>Learn more</span>
        </div>
        <Flex>
    <h2 style={{ marginTop:"20px", marginRight:"40%", marginLeft:"20px"}}>Select Size</h2>
    <h2 style={{fontSize:"12px", marginTop:"20px", color:"#42a2a2"}}>Size Guide</h2>
    </Flex>
    <Flex style={{borderBottom:"2px solid #eee"}}>
    <button className="size">S</button>
    <button className="size">M</button>
    <button className="size">L</button>
    <button className="size">XL</button>
    <button className="size">XXL</button>
    </Flex>
    <br/>
    <Flex style={{borderBottom:"2px solid #eee", marginTop:"10px", marginLeft:"20px"}}>
    <div style={{marginTop:"10px", marginRight:"10px", fontWeight:"bold",fontSize:"15px", color:"#363636"}}>
    Delivering in 
    <span style={{color:"#207bb4"}}> India</span>
    </div>
    <img src={flag} alt="flagIcon" className="flag"/>
    </Flex>
    <div style={{borderBottom:"2px solid #eee", marginTop:"15px", marginLeft:"10px"}}>
    <BiStar style={{fontSize:"35px", marginRight:"20px"}}/>
    <Flex>
    <div style={{fontSize:"15px", fontWeight:"bold", marginLeft:"45px", marginTop:"-35px"}}>Offers</div>
    <div style={{marginBottom:"20px",marginLeft:"-40px", fontSize:"12px", marginTop:"-15px", color:"#878787"}}>
    NO OFFER AVAILABLE</div>
    </Flex>
    </div>
    <div style={{borderBottom:"2px solid #eee", marginTop:"15px"}}>
    <Accordion allowMultiple>
    <AccordionItem style={{marginRight:"30px"}}>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton style={{backgroundColor:"white", border:"none"}}>
            <Box as="span" flex='1' textAlign='left'>
            <div>
        <RiFileListLine style={{fontSize:"38px", marginRight:"20px"}}/>
        <Flex>
        <div style={{fontSize:"15px", fontWeight:"bold", marginLeft:"45px", marginTop:"-40px"}}>Product Description</div>
        <div style={{marginLeft:"-142px", fontSize:"13px", marginTop:"-17px", color:"#878787"}}>
        Manufacture, Care and Fit</div>
        </Flex>
            </div>
            </Box>
            {isExpanded ? (
              <BiMinus fontSize='12px' marginRight={50}/>
            ) : (
              <MdAdd fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} style={{ width: "400px" }}>
          {productInfo.description}
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
    </div>
    <div style={{borderBottom:"2px solid #eee", marginTop:"15px"}}>
    <Accordion allowMultiple>
    <AccordionItem style={{marginRight:"30px"}}>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton style={{backgroundColor:"white", border:"none"}}>
            <Box as="span" flex='1' textAlign='left'>
            <div>
        <RiExchangeLine style={{fontSize:"38px", marginRight:"20px"}}/>
        <Flex>
        <div style={{fontSize:"15px", fontWeight:"bold", marginLeft:"45px", marginTop:"-40px"}}>15 Days Returns & Exchange</div>
        <div style={{marginLeft:"-205px", fontSize:"13px", marginTop:"-17px", color:"#878787"}}>
        Know about return & exchange policy</div>
        </Flex>
            </div>
            </Box>
            {isExpanded ? (
              <BiMinus fontSize='12px' marginRight={50}/>
            ) : (
              <MdAdd fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} style={{ width: "400px" }}>
        Easy returns upto 15 days of delivery. Exchange available on select pincodes
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
    </div>
    <Flex style={{marginTop:"20px", justifyContent:"center", alignItems:"center"}}>
    <img src={info} alt="infoPage" width={350}/>
    </Flex>
    </div>
    <div>
     <Footer/>
     </div>
      </>
      ):(
      <>
      <Flex className='heading1'>
      <NavLink to="/" style={{textDecoration:"none", color:"black"}}>
      <Container className='heading2'>Home</Container>
      </NavLink>
      <Container className='heading2'>/</Container>
      <Container className='heading2'>{productInfo?.gender} Clothing</Container>
      <Container className='heading2'>/</Container>
      <Container className='heading2'>{productInfo?.name}</Container>
      </Flex>
      <Flex>
      <Container style={{marginTop:"10px"}}>
  <div style={{ display: "flex", flex:"1"}}>
  <div style={{ flex: "1", marginTop: "30px" }}>
    {productImages && productImages?.length > 0 ? (
      <div>
        {productImages.map((item, index) => (
          <Flex key={index}>
            <img src={item} alt="" onClick={() => setNumber(index)} className="ProductImage" />
          </Flex>
        ))}
      </div>
      
    ) : null}
    </div>
  
  <div style={{ flex: "1", marginLeft: "20px" }}>
    {productImages[number] && (
      <img src={productImages[number]} alt="numberImage" className="imageNumber" />
    )}
  </div>

    <div className="detail" style={{flex:"1", marginLeft:"70px"}}>
    <div className="brand">{productInfo.brand}</div>
    <div style={{fontSize:"16px", paddingTop:"5px", color:"#737373", fontFamily:"sans-serif"}}>
    {productInfo.name}
    </div> 
    <div style={{height:"25px", display:"flex", width:"55px", marginTop:"8px", fontSize:"18px", border:".3px solid #949494", backgroundColor:"#f7f7f7"}}>
    <AiFillStar style={{color:"#ffc700", marginRight:"8px", paddingTop:"3px", paddingLeft:"7px"}}/><div>4</div></div>
    <div style={{marginTop:"8px"}}>₹<span style={{fontSize:"24px", fontWeight:"bold", paddingTop:"10px"}}>{productInfo.price}</span></div>
    <div style={{color:"#737373"}}>inclusive of all taxes</div>
    <br/>

    <div className="productOffer">TriBe members get an extra discount of 
    <span style={{fontWeight:"bold"}}> ₹30</span> and FREE shipping.<br/>
    <NavLink to="Tribe" style={{color:"#42A2A2", textDecoration:"none"}}>
    <span style={{color:"#42a2a2"}}>Learn more</span>
    </NavLink>
    </div>
    <h2 style={{fontSize:"15px", marginTop:"20px", marginRight:"250px"}}>Color option</h2>
    <Button style={{borderRadius:"50px", height:"50px", width:"50px", 
    border:"5px solid white",  boxShadow: "0px 0px 15px 0px #42A2A2", backgroundColor:productInfo.color}}>
    </Button>
    <Flex>
    <h2 style={{fontSize:"15px", marginTop:"20px", marginRight:"250px"}}>Select Size</h2>
    {/* <h2 style={{fontSize:"15px", marginTop:"20px", color:"#42a2a2"}}>Size Guide</h2> */}
    </Flex>
    <div>
    {productSize.map((size, index) => (
  <button
    key={index}
    className="size"
    style={{
      color: availableSizes.includes(size) ? 'black' : 'grey',
      border: availableSizes.includes(size) ? '1px solid black' : '1px solid grey',
      cursor: availableSizes.includes(size)? 'pointer' : "not-allowed",
      backgroundColor: selectedSize === size ? 'black' : 'white',
      color: selectedSize === size ? 'white' : 'black',
      fontWeight: selectedSize === size ? 'bold' : 'normal'
    }}
    onClick={() => {
      if (availableSizes.includes(size)) {
        setSelectedSize(selectedSize === size ? '' : size);
      }
    }}
    disabled={!availableSizes.includes(size)}
  >
    {size}
  </button>
))}
    </div>
    <br/>
     
    <Flex style={{marginTop:"40px", borderBottom:"2px solid #eee"}}>
     {isLoggedIn ? (
    <button className="CART" onClick={handleAddToCart}>
    <PiShoppingBagLight style={{marginRight:"10px", marginTop:"-5px", fontSize:"25px"}}/>
    {buttonText}</button>
    ):(
      <NavLink to="/Login" style={{textDecoration:"none"}}>
      <button className="CART">
      <PiShoppingBagLight style={{marginRight:"10px", marginTop:"-5px", fontSize:"25px"}}/>
      ADD TO BAG</button>
      </NavLink>
    )}
  
    {isLoggedIn ? (
      <>
    {inWishList[productInfo._id] ? (
     <button className="WISH"  onClick={()=> handleAddToWishList(productInfo._id)}>
     <AiFillHeart style={{marginRight:"10px", marginTop:"-5px", fontSize:"25px", color:"red"}}/>
      ADDED TO WISHLIST
      </button>
    ):(
    <button className="WISH"  onClick={()=> handleAddToWishList(productInfo._id)}>
    <BsHeart style={{ height: "20px", width: "20px", color:"grey", marginLeft: "5%", marginRight:"10px" }} 
    onClick={()=> handleAddToWishList(productInfo._id)}/>WISHLIST
    </button>
    )}
    </>
    ):(
      <>
      <Link to ='/Login' style={{textDecoration:"none", color:"black"}}>
    <button className="WISH"  onClick={()=> handleAddToWishList(productInfo._id)}>
    <BsHeart style={{ height: "20px", width: "20px", color:"grey", marginLeft: "5%", marginRight:"10px" }} 
    onClick={()=> handleAddToWishList(productInfo._id)}/>WISHLIST
    </button>
      </Link>
      </>
    )}
    </Flex>

    <Flex style={{marginTop:"20px"}}>
     <GrLocation style={{width:"20px", height:"20px", marginRight:"10px"}}/>
     <div style={{fontSize:"12px", fontWeight:"bold"}}>CHECK FOR DELIVERY DETAILS</div> 
    </Flex>

    <Flex style={{borderBottom:"2px solid #eee"}}>
    <div style={{marginTop:"10px", marginRight:"10px", fontWeight:"bold",fontSize:"15px", color:"#363636"}}>
    Delivering in 
    <span style={{color:"#207bb4"}}> India</span>
    </div>
    <img src={flag} alt="flagIcon" className="flag"/>
    </Flex>
    <div style={{borderBottom:"2px solid #eee", marginTop:"15px"}}>
    <BiStar style={{fontSize:"35px", marginRight:"20px"}}/>
    <Flex>
    <div style={{fontSize:"15px", fontWeight:"bold", marginLeft:"45px", marginTop:"-35px"}}>Offers</div>
    <div style={{marginBottom:"20px",marginLeft:"-40px", fontSize:"12px", marginTop:"-15px", color:"#878787"}}>
    NO OFFER AVAILABLE</div>
    </Flex>
    </div>
    <div style={{borderBottom:"2px solid #eee", marginTop:"15px"}}>
    <Accordion allowMultiple>
    <AccordionItem style={{marginRight:"30px"}}>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton style={{backgroundColor:"white", border:"none"}}>
            <Box as="span" flex='1' textAlign='left'>
            <div>
        <RiFileListLine style={{fontSize:"38px", marginRight:"20px"}}/>
        <Flex>
        <div style={{fontSize:"15px", fontWeight:"bold", marginLeft:"45px", marginTop:"-40px"}}>Product Description</div>
        <div style={{marginLeft:"-142px", fontSize:"13px", marginTop:"-17px", color:"#878787"}}>
        Manufacture, Care and Fit</div>
        </Flex>
            </div>
            </Box>
            {isExpanded ? (
              <BiMinus fontSize='12px' marginRight={50}/>
            ) : (
              <MdAdd fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} style={{ width: "400px" }}>
          {productInfo.description}
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
    </div>
    <div style={{borderBottom:"2px solid #eee", marginTop:"15px"}}>
    <Accordion allowMultiple>
    <AccordionItem style={{marginRight:"30px"}}>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton style={{backgroundColor:"white", border:"none"}}>
            <Box as="span" flex='1' textAlign='left'>
            <div>
        <RiExchangeLine style={{fontSize:"38px", marginRight:"20px"}}/>
        <Flex>
        <div style={{fontSize:"15px", fontWeight:"bold", marginLeft:"45px", marginTop:"-40px"}}>15 Days Returns & Exchange</div>
        <div style={{marginLeft:"-205px", fontSize:"13px", marginTop:"-17px", color:"#878787"}}>
        Know about return & exchange policy</div>
        </Flex>
            </div>
            </Box>
            {isExpanded ? (
              <BiMinus fontSize='12px' marginRight={50}/>
            ) : (
              <MdAdd fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} style={{ width: "400px" }}>
        Easy returns upto 15 days of delivery. Exchange available on select pincodes
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
    </div>
 
 <div style={{marginTop:"20px"}}>
    <img src={info} alt="infoPage" width={500}/>
 </div>
     
    </div> 
    
    </div>
      </Container>
      </Flex>
      </>)}
      <Footer />
    </Box>
    )
}
export default ProductDetail;
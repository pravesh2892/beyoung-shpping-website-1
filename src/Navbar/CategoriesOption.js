import { Container, Divider, Center, Box,Flex, Text} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const OptionMen =()=>{

    
      
    return(
    <Container style=
    {{backgroundColor:"white", 
    zIndex:"100",  
    position:"absolute",
    width:"800px",
    border:"1px solid rgba(0, 0, 0, 0.2)",
    height:"410px",
    }}>
    <div style={{ position: "absolute", backgroundColor: "white", width: "150px" ,}}>
    <ul className="ul" style={{flex:"1"}}>

    <NavLink to='/subcategories/men/shirt' style={{ color: "black", textDecoration: "none" }}>
    <li className="listItem" style={{marginTop:"20px", marginBottom:"15px", fontWeight:"500"}}>
    Topwear
    </li>
    </NavLink>
    <NavLink to='/subcategories/men/tshirt' style={{color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    T-Shirts
    </li>
    </NavLink>
    <NavLink to='/subcategories/men/shirt' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Shirts
    </li>
    </NavLink>
    <NavLink to='/subcategories/men/kurta' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Kurta
    </li>
    </NavLink>
    <NavLink to='/subcategories/men/sweater' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Sweaters
    </li>
    </NavLink>
    <NavLink to='/subcategories/men/hoodie' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
     Hoodies
    </li>
    </NavLink>
    <NavLink to='/subcategories/men/tracksuit' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    TrackSuit
    </li>
    </NavLink>
    </ul>
    </div>
   
    <div style={{
          flex: 1, 
          position: "relative",
          marginTop: "20px",
          backgroundColor: "white",
          width:"200px",
          marginLeft:"150px",
          }}>
   
    <ul className="ul" flex="1">     
    <NavLink to='' style={{ color: "black", textDecoration: "none" }}>
    <li className="listItem" style={{marginTop:"20px", marginBottom:"15px", fontWeight:"500"}}>
    Bottomwear
    </li>
    </NavLink>
    <NavLink to='/subcategories/men/jeans' style={{ color:"rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Jeans
    </li>
    </NavLink>
    <NavLink to='/subcategories/men/jogger' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Joggers
    </li>
    </NavLink>
    <NavLink to='/subcategories/men/pyjamas' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Pyjama
    </li>
    </NavLink>
<NavLink to='/subcategories/men/shorts' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
<li className="listItem">
Shorts
</li>
</NavLink>
<NavLink to='/subcategories/men/trouser' style={{ color:"rgba(45,45,45,.5)", textDecoration: "none" }}>
<li className="listItem">
Trousers
</li>
</NavLink>
<br />
</ul>
</div>

<div style={{ position: "absolute", marginTop: "20px", backgroundColor: "white"}}>
      
    <ul className="ul" flex="1">     
    <NavLink to='' style={{ color: "black", textDecoration: "none" }}>
    <li className="listItem" style={{marginTop:"20px", marginBottom:"15px", fontWeight:"500"}}>
   Winterwear
    </li>
    </NavLink>
    <NavLink to='/subcategories/men/hoodie' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
     Hoodies
    </li>
    </NavLink>
    <NavLink to='/subcategories/men/jogger' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Joggers
    </li>
    </NavLink>
    <NavLink to='/subcategories/men/sweater' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Sweaters
    </li>
    </NavLink>
    </ul>
    </div>
    <div style={{
          flex: 1, 
          position: "relative",
          marginTop: "-220px",
          backgroundColor: "white",
          width:"400px",
          marginLeft:"350px",
          paddingLeft:"20px",
          borderLeft: "2px solid grey",
          height:"380px"

          }}>
    <Box style={{color:"grey", fontSize:"10px", fontWeight:"bold", marginBottom:"20px"}}></Box>
    <NavLink to='/' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <Flex><img src='https://www.beyoung.in/api/catalog/Navigation/desktop-navigation_19_10_jpg.jpg' alt="disney" style={{width:"400px", height:"350px"}}/>
    </Flex>
    </NavLink>
   

     </div>

    </Container>
    );
}
export default OptionMen;
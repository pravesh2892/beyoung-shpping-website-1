import { Container, Divider, Center, Box,Flex, Text} from "@chakra-ui/react";
import Disney from '../Images/Disney.webp';
import garfield from '../Images/garfield.png';
import Naruto from '../Images/Naruto.jpg';
import tom from '../Images/tom.png';
import Marvel from '../Images/Marvel.jpg';
import minion from '../Images/minion.jpg';
import { NavLink } from "react-router-dom";

const OptionWomen =()=>{
    return(
    <Container style=
    {{backgroundColor:"white", 
    zIndex:"100", 
    position:"absolute",
    width:"800px",
    border:"1px solid rgba(0, 0, 0, 0.2)",
    
    height:"400px",
    }}>
    <div style={{ position: "absolute", backgroundColor: "white", width: "500px" }}>
    <ul className="ul" style={{flex:"1"}}>

    <NavLink to='subcategories/women/tshirt'style={{ color: "black", textDecoration: "none" }}>
    <li className="listItem" style={{marginTop:"20px", marginBottom:"15px", fontWeight:"500"}}>
     Topwear
     </li>
    </NavLink>
    <NavLink to='subcategories/women/shirt' style={{color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Top
    </li>
    </NavLink>
    <NavLink to='subcategories/women/tshirt' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    T-Shirts
    </li>
    </NavLink>
    <NavLink to='subcategories/women/kurti' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Kurti
    </li>
    </NavLink>
    <NavLink to='subcategories/women/shirt' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Shirt
    </li>
    </NavLink>
    <br/>
    <NavLink to='subcategories/women/jumpsuit' style={{ color: "black", textDecoration: "none" }}>
    <li className="listItem" style={{marginTop:"20px", marginBottom:"15px", fontWeight:"500"}}>
      Dresses
    </li>
    </NavLink>
    <NavLink to='subcategories/women/jumpsuit' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    JumpSuit
    </li>
    </NavLink>
    <NavLink to='subcategories/women/kurti' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Kurti
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
    marginLeft:"150px", }}>
      
    <ul className="ul" flex="1">     
    <NavLink to='subcategories/women/jeans' style={{ color: "black", textDecoration: "none" }}>
    <li className="listItem" style={{marginTop:"20px", marginBottom:"15px", fontWeight:"500"}}>
    Bottomwear
    </li>
    </NavLink>
    <NavLink to='subcategories/women/jeans' style={{ color:"rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Jeans
    </li>
    </NavLink>
    <NavLink to='subcategories/women/jogger' style={{ color: "rgba(45,45,45,.5)", textDecoration: "none" }}>
    <li className="listItem">
    Joggers
    </li>
    </NavLink>
<br />
</ul>
</div>
<div style={{
          flex: 1, 
          position: "relative",
          marginTop: "-130px",
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
export default OptionWomen;
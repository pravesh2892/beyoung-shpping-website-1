import React, { useState, useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import {
  Flex,
  UnorderedList,
  ListItem,
  Text,
  Box,
  List,
  Button,
} from "@chakra-ui/react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { NavLink, useNavigate } from "react-router-dom";
import { BsHeart, BsBag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import OptionWomen from "./CategoriesWomen";
import OptionMen from "./CategoriesOption";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../Action";
import ResNav from "./ResNav";
import { searchOrder } from "../ServiceApi";


export default function Nav() {
  const [menuHover, setMenuHover] = useState(false);
  const [dropmenu, setDropmenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [smallerScreen, setSmallerScreen] = useState(window.innerWidth < 1000);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((store) => store.user?.isLoggedIn);
  const cartItem = useSelector((state) => state.data.cart);
  // console.log(cartItem.results);

  const searchInputRef = useRef(null);
  const suggestionBoxRef = useRef(null);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleMouseEnter = (category) => {
    setMenuHover(category);
  };
  const handleMouseLeave = () => {
    setMenuHover(null);
  };

  const handleProfileClick = () => {
    setDropmenu(!dropmenu);
  };

  const handleLogout = () => {
    dispatch(LOGOUT());
    setDropmenu(false);
  };

  const handleSearchInputChange = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setShowSuggestions(term.trim().length > 0);
    try {
      const result = await searchOrder(term);
      setSearchResult(result);
      setShowSuggestions(result.data && result.data.length > 0);
    } catch (error) {
      console.error("Error while searching:", error);
    }
  };

  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target) &&
      suggestionBoxRef.current &&
      !suggestionBoxRef.current.contains(event.target)
    ) {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const productId = suggestion?._id;
    console.log(productId);
    const productUrl = `/product/${productId}`;
    navigate(productUrl);
    // setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const handleSeeAllResultsClick = () => {
    const encodesearchTerm = encodeURIComponent(searchTerm);
    const searchResultsUrl = `/searchResult/${encodesearchTerm}`;
    navigate(searchResultsUrl);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [searchTerm]);

  useEffect(() => {
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 1000);
      if (window.innerWidth < 1000) {
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("signup");
    if (user) {
      const parseData = JSON.parse(user);
      setUserInfo(parseData);
    }
  }, []);

  const combinedStyles = {
    background: "#ffdd00",
    padding: "6px 0",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#1d1d1d",
    textAlign: "center",
    fontWeight: 600,
    width: "100vw",
  };

  return (
    <>
      {smallerScreen ? (
        <>
          <ResNav />
        </>
      ) : (
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            zIndex: "100",
            backgroundColor: "white",
          }}
        >
          <div className="top-offer" style={combinedStyles}>
            Free shipping available on all orders. Don't miss out – shop now!
          </div>
          <Flex className="topBar" style={{ justifyContent: "space-between" }}>
            <Flex>
              <UnorderedList className="topBar-left">
              <NavLink
                  to="Orders"
                  style={{ textDecoration: "none", color: "white", }}
                >
                <Flex>
                  <LocationOnOutlinedIcon style={{ marginTop: '-7px' }}/>
                  <ListItem style={{marginLeft:"5px", lineHeight:"12px"}}>TRACK YOUR ORDER</ListItem>
                  </Flex>
                </NavLink>
                
  
              </UnorderedList>
            </Flex>
            <Flex>
              <UnorderedList className="topBar-right">
              {isLoggedIn ? (
                  <div>
                    <CiUser
                      onClick={handleProfileClick}
                      style={{
                        fontSize: "25px",
                        color:"white",
                        marginRight: "75px",
                        borderRight: "2px solid white",
                        paddingRight: "10px",
                        marginTop:"-6px",
                        strokeWidth: "1"
                      }}
                    />
                    {dropmenu && (
                      <ul className="profileOption">
                        <li
                          style={{
                            backgroundColor: "#eee",
                            color: "black",
                          }}
                        >
                          Hello, {userInfo?.signup?.data?.name}
                        </li>
                        <NavLink
                          to="/Account"
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "black",
                          }}
                        >
                          <li>My Account</li>
                        </NavLink>
                        <NavLink
                          to="/Wishlist"
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "black",
                          }}
                        >
                          <li>My Wishlist</li>
                        </NavLink>
                        <NavLink
                          to="/Orders"
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "black",
                          }}
                        >
                          <li>My Orders</li>
                        </NavLink>
                        <NavLink
                          to="/Wallet"
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "black",
                          }}
                        >
                          <li>My Wallet</li>
                        </NavLink>
                        <li onClick={handleLogout}>Logout</li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <>
                    <NavLink
                      to="/Login"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <ListItem
                        style={{
                          marginRight:"55px",
                          color:"white",
                          fontSize:"12px",
                          fontWeight:"500",
                          cursor: "pointer",
                          borderRight: "1px solid white",
                          paddingRight: "10px",
                        }}
                      >
                        LOGIN
                      </ListItem>
                    </NavLink>
                  </>
                )}
               
          
        
              </UnorderedList>
            </Flex>
          </Flex>

          <Flex className="navBar" style={{ justifyContent: "space-between", marginLeft:"35px", marginRight:"45px" }}>
            <Flex
              style={{
                overflow: "hidden",
                alignItems: "center",
                height: "60px",
                maxWidth: "40rem",
              }}
            >
              <NavLink to="/">
                <Flex>
                  <svg
                    width="150px"
                    height="40px"
                    transform="translate(20, 0)"
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 887.38 109.91"
                  >
                    <path
                      d="M129.14,97.73a90.42,90.42,0,0,1,16.1,1.32,38.39,38.39,0,0,1,12.47,4.34,21.56,21.56,0,0,1,8,8,24.61,24.61,0,0,1,2.85,12.35A20.5,20.5,0,0,1,164.37,137q-4.25,5.28-12.55,8.67,11.43,2.79,17.05,9.78a26,26,0,0,1,5.63,16.83A25.31,25.31,0,0,1,170.86,186a28.57,28.57,0,0,1-9.78,9.48,47.11,47.11,0,0,1-14,5.45,74.23,74.23,0,0,1-16.19,1.76H71v-105Zm-3.47,42.49q7.28,0,12-2.94t4.68-9.56a10,10,0,0,0-5.72-9.7,19.26,19.26,0,0,0-6-1.84,46.89,46.89,0,0,0-7-.52H98.15v24.56Zm1.56,44.55a42.55,42.55,0,0,0,7.62-.66,20.63,20.63,0,0,0,6.41-2.21,12,12,0,0,0,4.41-4.19,12.58,12.58,0,0,0,1.65-6.76q0-8.08-5.37-11.54T127.75,156H98.15v28.82Z"
                      transform="translate(-70.96 -95.23)"
                    ></path>
                    <path
                      d="M285.3,97.73v19.4H220v22.5h59.91v17.94H220V183.3h66.66v19.41H192.85v-105Z"
                      transform="translate(-70.96 -95.23)"
                    ></path>
                    <path
                      d="M291.71,97.73h30.47l28.91,41.46,28.74-41.46h30.3l-45.88,64.69v40.29H337.07V161.83Z"
                      transform="translate(-70.96 -95.23)"
                    ></path>
                    <path
                      d="M419.31,128.83a51.27,51.27,0,0,1,11.94-17.58,55.17,55.17,0,0,1,19.13-11.76,78.93,78.93,0,0,1,51.16,0,55.38,55.38,0,0,1,19.05,11.76,51.13,51.13,0,0,1,11.94,17.58,56.48,56.48,0,0,1,4.16,21.83,54.64,54.64,0,0,1-4.16,21.39,50,50,0,0,1-11.94,17.28,55.7,55.7,0,0,1-19.05,11.54,80.18,80.18,0,0,1-51.16,0,55.5,55.5,0,0,1-19.13-11.54,50.09,50.09,0,0,1-11.94-17.28,54.64,54.64,0,0,1-4.16-21.39A56.48,56.48,0,0,1,419.31,128.83Zm24.84,34.69a32.22,32.22,0,0,0,5.8,11.25,28.48,28.48,0,0,0,10.39,8,41.83,41.83,0,0,0,31.16,0,28.56,28.56,0,0,0,10.39-8,32.22,32.22,0,0,0,5.8-11.25,45.83,45.83,0,0,0,1.82-12.86,49.27,49.27,0,0,0-1.82-13.38,32.77,32.77,0,0,0-5.8-11.54,28.29,28.29,0,0,0-10.39-8.09,41.83,41.83,0,0,0-31.16,0A28.21,28.21,0,0,0,450,125.74a32.77,32.77,0,0,0-5.8,11.54,49.27,49.27,0,0,0-1.82,13.38A45.83,45.83,0,0,0,444.15,163.52Z"
                      transform="translate(-70.96 -95.23)"
                    ></path>
                    <path
                      d="M646.11,194.7q-14,10.37-38.78,10.36-25.11,0-38.87-10.29T554.69,163V97.73h27.19V163a40.32,40.32,0,0,0,.86,8.38,15.79,15.79,0,0,0,3.64,7.28,19.86,19.86,0,0,0,7.7,5.15q4.93,2,13.25,2,14.53,0,20.08-5.51T633,163V97.73h27.18V163Q660.13,184.33,646.11,194.7Z"
                      transform="translate(-70.96 -95.23)"
                    ></path>
                    <path
                      d="M705.49,97.73l51.6,70.43h.34V97.73h25.45v105H755.7l-51.42-70.28h-.35v70.28H678.48v-105Z"
                      transform="translate(-70.96 -95.23)"
                    ></path>
                    <path
                      d="M880,201.9a52.57,52.57,0,0,1-17.84,3.16,73.17,73.17,0,0,1-25.54-4.19,55.5,55.5,0,0,1-19.13-11.54,50.09,50.09,0,0,1-11.94-17.28,54.82,54.82,0,0,1-4.16-21.39,56.66,56.66,0,0,1,4.16-21.83,51.27,51.27,0,0,1,11.94-17.58,55.17,55.17,0,0,1,19.13-11.76,72.24,72.24,0,0,1,25.54-4.26,69.78,69.78,0,0,1,18.44,2.42,56.3,56.3,0,0,1,16.1,7.13,41.7,41.7,0,0,1,11.86,11.62,35.14,35.14,0,0,1,5.72,15.88h-26A21.9,21.9,0,0,0,879,119.05q-6.93-4.41-16.8-4.41a36.38,36.38,0,0,0-15.58,3,28.29,28.29,0,0,0-10.39,8.09,32.94,32.94,0,0,0-5.8,11.54,49.26,49.26,0,0,0-1.81,13.38,45.82,45.82,0,0,0,1.81,12.86,32.39,32.39,0,0,0,5.8,11.25,28.56,28.56,0,0,0,10.39,8,36.38,36.38,0,0,0,15.58,3q13.51,0,20.86-5.81t8.58-16.83H864.23V146h51.94v56.76H898.86l-2.77-11.91A40.35,40.35,0,0,1,880,201.9Z"
                      transform="translate(-70.96 -95.23)"
                    ></path>
                    <path
                      d="M944.66,177.89a13.57,13.57,0,1,0,13.56,13.56A13.57,13.57,0,0,0,944.66,177.89Zm0,24.91A11.35,11.35,0,1,1,956,191.45,11.35,11.35,0,0,1,944.66,202.8Z"
                      transform="translate(-70.96 -95.23)"
                    ></path>
                    <path
                      d="M946.77,192.34a5,5,0,0,0,2.74-1.1,3.59,3.59,0,0,0,1.11-2.92,3.75,3.75,0,0,0-1.36-3.24,6.77,6.77,0,0,0-4-1h-5.58v14.73h2.42v-6.3h2.27l3.81,6.3h2.74Zm-2-1.88h-2.7v-4.31H945c.36,0,.73,0,1.11,0a3.32,3.32,0,0,1,1,.27,2,2,0,0,1,.76.6,1.74,1.74,0,0,1,.31,1.07,2.36,2.36,0,0,1-.29,1.27,2.07,2.07,0,0,1-.75.69,2.57,2.57,0,0,1-1.08.3C945.66,190.44,945.23,190.46,944.78,190.46Z"
                      transform="translate(-70.96 -95.23)"
                    ></path>
                  </svg>
                </Flex>
              </NavLink>
              <div
                onMouseEnter={() => handleMouseEnter("Men")}
                onMouseLeave={handleMouseLeave}
                className="menu-container"
              >
                <NavLink to={`/categories/men`} className="navLink">
                  <Text
                    className="menuItem"
                    style={{
                      margin: "0",
                      cursor: "pointer",
                      marginLeft: "40px",
                    }}
                  >
                    MEN
                  </Text>
                </NavLink>
                {menuHover === "Men" && <OptionMen />}
              </div>

              <div
                onMouseEnter={() => handleMouseEnter("Women")}
                onMouseLeave={handleMouseLeave}
                className="menu-container"
              >
                <NavLink to={`/categories/women`} className="navLink">
                  <Flex
                    className="menuItem"
                    style={{ marginRight: "0", cursor: "pointer" }}
                  >
                    WOMEN
                  </Flex>
                </NavLink>
                {menuHover === "Women" && <OptionWomen />}
              </div>

              <NavLink to="/NotAvailable" className="navLink">
                <Flex className="menuItem">KIDS</Flex>
              </NavLink>
              <NavLink to="/NotAvailable" className="navLink">
                <Flex className="menuItem">ACCESSORIES</Flex>
              </NavLink>
            </Flex>
            <Flex>
              <UnorderedList className="navBar-right">
                <Box style={{ marginRight: "10px" }}>
                  <BiSearch
                    className="icon"
                    onClick={handleSeeAllResultsClick}
                  />
                  <input
                    type="search"
                    placeholder="Search by product"
                    className="inputSearch"
                    onChange={handleSearchInputChange}
                    ref={searchInputRef}
                  />
                  {showSuggestions &&
                    Array.isArray(searchResult?.data) &&
                    searchResult?.data?.length > 0 && (
                      <Box
                        ref={suggestionBoxRef}
                        position="absolute"
                        top="80"
                        left="800"
                        right="0"
                        zIndex="10"
                        backgroundColor="white"
                        boxShadow="md"
                        borderRadius="md"
                        border="1px solid grey"
                        overflow="hidden"
                        width="22%"
                        height="fit-content"
                        bottom="20"
                      >
                        <List>
                          {searchResult.data
                            .slice(0, 5)
                            .map((result, index) => (
                              <ListItem
                                key={index}
                                p="2"
                                fontSize="12"
                                paddingTop="20"
                                onClick={() => handleSuggestionClick(result)}
                                cursor="pointer"
                              >
                                {result.name}
                              </ListItem>
                            ))}
                          {searchResult.data.length > 5 && (
                            <ListItem
                              p="2"
                              fontSize="12"
                              marginBottom="15"
                              paddingTop="20"
                              onClick={() => handleSeeAllResultsClick()}
                              cursor="pointer"
                              color="#42A2A2"
                            >
                              See All Results
                            </ListItem>
                          )}
                        </List>
                      </Box>
                    )}
                </Box>
              
                {isLoggedIn ? (
                  <>
                    <NavLink to="/Wishlist" style={{ color: "black" }}>
                      <ListItem>
                        <BsHeart
                          style={{
                            height: "20px",
                            width: "20px",
                            marginTop: "12px",
                          }}
                        />
                      </ListItem>
                    </NavLink>
                    <NavLink to="/Cart" style={{ color: "black" }}>
                      <ListItem>
                        <BsBag
                          style={{ marginTop: "11px", fontSize: "20px" }}
                        />
                        {cartItem.results > 0 && (
                          <Button className="cartlength">
                            {cartItem.results}
                          </Button>
                        )}
                      </ListItem>
                    </NavLink>
                  </>
                ) : (
                  <Flex>
                    <NavLink to="/Login" style={{ color: "black" }}>
                      <ListItem>
                        <BsHeart
                          style={{
                            height: "20px",
                            width: "20px",
                            marginTop: "12px",
                          }}
                        />
                      </ListItem>
                    </NavLink>
                    <NavLink to="/Login" style={{ color: "black" }}>
                      <ListItem>
                        <BsBag
                          style={{ marginTop: "11px", fontSize: "20px" }}
                        />
                      </ListItem>
                    </NavLink>
                  </Flex>
                )}
              </UnorderedList>
            </Flex>
          </Flex>
          <hr style={{ marginTop: "-5px" }} />
        </div>
      )}
    </>
  );
}

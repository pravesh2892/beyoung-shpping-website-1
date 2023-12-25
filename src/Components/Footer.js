import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Container, Box, Flex, Text, Button } from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

import {
  BiLogoTwitter,
  BiLogoSnapchat,
  BiLogoApple,
  BiCategory,
  BiUser,
  BiFilterAlt,
  BiSortAlt2,
} from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";

import React from "react";

export default function Footer() {
  const [smallerScreen, setSmallerScreen] = useState(window.innerWidth < 1000);
  const [isBarOpen, setIsBarOpen] = useState(false);
  const location = useLocation();
  const [text, setText] = useState(false);

  const handleButton = () => {
    setText(true);
  };

  const openBar = () => {
    setIsBarOpen(true);
  };

  const closeBar = () => {
    setIsBarOpen(false);
  };

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

  return (
    <div>
      {smallerScreen ? (
        <div
          style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: "100",
            margin: "0",
          }}
        >
          {location.pathname.includes("/subcategories") ? (
            <>
              <Flex
                style={{ width: "100%", backgroundColor: "white", bottom: "0" }}
              >
                <Flex
                  on
                  onClick={openBar}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: "20px",
                    border: "1px solid rgba(0,0,0,0.2)",
                    width: "45%",
                  }}
                >
                  <BiSortAlt2 style={{ fontSize: "25px" }} />
                  <Text>Sort</Text>
                </Flex>
                <Flex
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingRight: "40px",
                    border: "1px solid rgba(0,0,0,0.2)",
                    width: "40%",
                  }}
                >
                  <BiFilterAlt style={{ fontSize: "25px" }} />
                  <Text>Filter</Text>
                </Flex>
              </Flex>
            </>
          ) : location.pathname.includes("/product") ? (
            <div style={{ padding: "10px", backgroundColor: "white" }}>
              <Flex
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  bottom: "0",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#ffc700",
                    border: "none",
                    width: "95%",
                    height: "50px",
                  }}
                >
                  ADD TO BAG
                </Button>
              </Flex>
            </div>
          ) : location.pathname === "/" ? (
            <div
              style={{
                paddingLeft: "10px",
                backgroundColor: "white",
                position: "relative",
                width: "auto",
                height: "70px",
                paddingRight: "10px",
              }}
            >
              <Container>
                <Flex style={{ justifyContent: "space-between" }}>
                  <Flex style={{ marginTop: "16px", flexDirection: "column" }}>
                    <Link
                      to="/"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                     
                      <Text
                        style={{
                          marginTop: "5px",
                          fontSize: "15px",
                          marginLeft: "2px",
                        }}
                      >
                        Home
                      </Text>
                    </Link>
                  </Flex>
                  <Flex style={{ marginTop: "20px", flexDirection: "column" }}>
                    <Link
                      to="/ResCategory/men"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <BiCategory style={{ fontSize: "20px" }} />
                      <Text
                        style={{
                          marginTop: "5px",
                          fontSize: "15px",
                          marginLeft: "-15px",
                        }}
                      >
                        Categories
                      </Text>
                    </Link>
                  </Flex>
                  <Flex style={{ marginTop: "20px", flexDirection: "column" }}>
                    <IoRocketOutline style={{ fontSize: "20px" }} />
                    <Text
                      style={{
                        marginTop: "5px",
                        fontSize: "15px",
                        marginLeft: "-15px",
                      }}
                    >
                      Explore
                    </Text>
                  </Flex>
                  <Flex style={{ marginTop: "20px", flexDirection: "column" }}>
                    <BiUser style={{ fontSize: "20px" }} />
                    <Text
                      style={{
                        marginTop: "5px",
                        fontSize: "15px",
                        marginLeft: "-15px",
                      }}
                    >
                      Profile
                    </Text>
                  </Flex>
                </Flex>
              </Container>
            </div>
          ) : null}
        </div>
      ) : (
        <div>
          <Container
            style={{
              paddingLeft: "50px",
              backgroundColor: "#181818",
              color: "white",
              margin: "0",
            
            }}
          >
            <Box>
              <Flex style={{ gap: "12%" }}>
                <Box>
                  <Box
                    style={{
                      marginBottom: "20px",
                      color: "#fdd835",
                      fontSize: "20px",
                    }}
                  >
                    NEED HELP
                  </Box>
                  <NavLink
                    to="ContactUs"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <div>Contact Us</div>
                  </NavLink>
                  <NavLink
                    to="/NotAvailable"
                    style={{ textDecoration: "none", color: "white",  }}
                  >
                    <div>Track Order</div>
                  </NavLink>
                  <NavLink
                    to="Orders"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <div>Returns & Refunds</div>
                  </NavLink>
                  <NavLink
                    to="Orders"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <div>Cancel Order</div>
                  </NavLink>
                </Box>
                <Box>
                  <Box
                    style={{
                      marginBottom: "20px",
                      color: "#fdd835",
                      fontSize: "20px",
                    }}
                  >
                    COMPANY
                  </Box>
                  <div>About Us</div>
                  <div>Beyoungistan</div>
                  <div>Collaboration</div>
                  <div>Media</div>
                  <div >Beyoung Blog</div>
                </Box>

                <Box>
                  <Box
                    style={{
                      marginBottom: "20px",
                      color: "#fdd835",
                      fontSize: "20px",
                    }}
                  >
                    MORE INFO
                  </Box>
                 
                  <div>Term and Conditions</div>
                  <div>Privacy Policy</div>
                  <div>Shipping Policy</div>
                  <div>Sitemap</div>
                </Box>
                <Box>
                  <Box
                    style={{
                      marginBottom: "20px",
                      color: "#fdd835",
                      fontSize: "20px",
                    }}
                  >
                    LOCATION
                  </Box>
                  <Flex>
                    <div style={{lineHeight: ".5"}}>
                      <p>support@beyoung.in</p>
                      <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
                      <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
                    </div>
                  </Flex>
      
                </Box>
              </Flex>
              
            </Box>
          
          </Container>
         
        </div>
      )}
    </div>
  );
}

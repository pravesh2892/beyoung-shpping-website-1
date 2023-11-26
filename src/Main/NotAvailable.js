import React from "react";
import notfound from "../Images/not.gif";
import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotAvailable() {
  return (
    <div style={{ marginTop: "5rem" }}>
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
         <img src={notfound} style={{width:"40%"}}  />
        <h3>We are working on something amazing.</h3>
        <h4 style={{ marginTop: "-15px" }}>Till then stay tuned</h4>
        <Link to="/">
          <Button
            style={{
              width: "9rem",
              height: "2.5rem",
              fontWeight: "bold",
              fontSize: "14px",
              color: "white",
              backgroundColor: "#ffdd00",
              borderRadius: "5px",
              border: "1px solid #ffdd00",
              cursor: "pointer",
              transition: "background-color 0.3s ease-in-out",
              ":hover": {
                backgroundColor: "#f7f3bf",
              },
            }}
          >
            SHOP NOW
          </Button>
        </Link>
      </Flex>
    </div>
  );
}

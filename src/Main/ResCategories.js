import { Flex, Text, Box, Container} from '@chakra-ui/react'
import React, { useState } from 'react';
import res1 from '../Images/res1.jpg';
import res2 from '../Images/res2.jpg';
import res3  from '../Images/res3.jpg';
import res4 from '../Images/res4.jpg';
import res5 from '../Images/res5.jpg';
import res6  from '../Images/res6.jpg';
import res8  from '../Images/res8.jpg';
import res9 from '../Images/res9.jpg';
import resw1 from '../Images/resw1.jpg';
import resw2 from '../Images/resw2.jpg';
import resw3  from '../Images/resw3.jpg';
import resw4 from '../Images/resw4.webp';
import resw6  from '../Images/resw6.jpg';
import resw7  from '../Images/resw7.webp';
import { useLocation, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function ResCategories() {
  const location = useLocation();
  const {id} = useParams();
  // console.log(id)

  // console.log(location);

    return (
        <div style={{ marginTop: '4.3rem', display: 'flex' }}>
        {location.pathname==='/ResCategory/men' ? (
        <Flex style={{flexWrap:"wrap", marginTop:"20px", justifyContent:"space-between"}}>
            
        <NavLink to='/subcategories/men/tshirt' style={{ color: "black", textDecoration: "none" }}>
        <img src={res1}
        style={{ width: '90%', maxWidth: '150px', height: 'auto', margin: '10px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}/>
        </NavLink>

        <NavLink to='/subcategories/men/sweater' style={{ color: "black", textDecoration: "none" }}>
        <img src={res2}
        style={{width: '90%',maxWidth: '150px',height: 'auto',margin: '10px',borderTopLeftRadius: '50px',borderTopRightRadius: '50px'}}/>
        </NavLink>

        <NavLink to='/subcategories/men/hoodie' style={{ color: "black", textDecoration: "none" }}>
        <img src={res3}
        style={{ width: '90%', maxWidth: '150px', height: 'auto', margin: '10px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}/>
        </NavLink>

        <NavLink to='/subcategories/men/shirt' style={{ color: "black", textDecoration: "none" }}>
        <img src={res4}
        style={{width: '90%',maxWidth: '150px',height: 'auto',margin: '10px',borderTopLeftRadius: '50px',borderTopRightRadius: '50px'}}/>
        </NavLink>

        <NavLink to='/subcategories/men/kurta' style={{ color: "black", textDecoration: "none" }}>
        <img src={res5}
        style={{width: '90%', maxWidth: '150px', height: 'auto', margin: '10px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}/>
        </NavLink>

        <NavLink to='/subcategories/men/jogger' style={{ color: "black", textDecoration: "none" }}>
        <img src={res6}
          style={{width: '90%', maxWidth: '150px', height: 'auto', margin: '10px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}/>
        </NavLink>  
          
        <NavLink to='/subcategories/men/shorts' style={{ color: "black", textDecoration: "none" }}>
        <img src={res8}
        style={{width: '90%',maxWidth: '150px',height: 'auto',margin: '10px',borderTopLeftRadius: '50px',borderTopRightRadius: '50px'}}/>
        </NavLink>

        <NavLink to='/subcategories/men/jeans' style={{ color: "black", textDecoration: "none" }}>
        <img src={res9}
        style={{width: '90%',maxWidth: '150px',height: 'auto',margin: '10px',borderTopLeftRadius: '50px',borderTopRightRadius: '50px', marginBottom:"70px"}}/>
          </NavLink>
          </Flex>
          ):(
          <>
        {location.pathname==='/ResCategory/women'}
          <Flex style={{flexWrap:"wrap", marginTop:"20px", justifyContent:"space-between"}}>
          <NavLink to='/subcategories/women/jogger' style={{ color: "black", textDecoration: "none" }}>
          <img src={resw1}
          style={{ width: '90%', maxWidth: '150px', height: 'auto', margin: '10px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}/>
          </NavLink>

          <NavLink to='/subcategories/women/jogger' style={{ color: "black", textDecoration: "none" }}>
          <img
          src={resw2}
          style={{width: '90%',maxWidth: '150px',height: 'auto',margin: '10px',borderTopLeftRadius: '50px',borderTopRightRadius: '50px',}}/>
          </NavLink>

          <NavLink to='/subcategories/women/jeans' style={{ color: "black", textDecoration: "none" }}>
          <img src={resw3}
           style={{ width: '90%', maxWidth: '150px', height: 'auto', margin: '10px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}/>
          </NavLink>

          <NavLink to='/subcategories/women/tshirt' style={{ color: "black", textDecoration: "none" }}>
          <img src={resw4}
          style={{width: '90%',maxWidth: '150px',height: 'auto',margin: '10px',borderTopLeftRadius: '50px',borderTopRightRadius: '50px'}}/>
          </NavLink>

          <NavLink to='/subcategories/women/jumpsuit' style={{ color: "black", textDecoration: "none" }}>
          <img src={resw6}
          style={{width: '90%', maxWidth: '150px', height: 'auto', margin: '10px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}/>
          </NavLink>
           
          <NavLink to='/subcategories/women/shirt' style={{ color: "black", textDecoration: "none" }}>
          <img src={resw7}
          style={{ width: '90%', maxWidth: '150px', height: 'auto', margin: '10px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}/>
          </NavLink>

          </Flex>
          </>
          )}

        </div>
      );
    }
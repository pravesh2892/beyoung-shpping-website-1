
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import bewakoof1 from '../Images/bewakoof1.png';
import bewakoof2 from '../Images/bewakoof2.png';
import bewakoof3 from '../Images/bewakoof3.png';
import bewakoof4 from '../Images/bewakoof4.png';
import winter   from '../Images/beyoung-winter.jpg';
import shirts  from '../Images/beyoung-shirt.jpg';
import tshirts from '../Images/beyoung-tshirts.jpg'
import joggers from '../Images/beyoung-joggers.jpg'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  function LargerCarousel() {
    const carouselOptions = {
      responsive: responsive,
      autoPlay: false,
      infinite: true,
      autoPlaySpeed: 2000,
      keyBoardControl: true,
      customTransition: "transform 500ms ease-in-out",
      removeArrowOnDeviceType: ["tablet", "mobile"],
    };

    const [smallerScreen,  setSmallerScreen] = useState(window.innerWidth < 500);
    useEffect(()=>{
      const handleResize = () => {
        setSmallerScreen(window.innerWidth < 500);
        
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },[])
  
    return (
      <>
      {smallerScreen?(
        <>
        <div style={{marginLeft:"10px", paddingTop:"10px", marginTop:"1rem", zIndex:"0"}}>
        <Carousel {...carouselOptions}>
          <div>
            <img style={{width:"370px"}} src={winter} alt="winter" />
          </div>
          <div>
            <img style={{width:"370px"}} src={shirts} alt="shrits" />
          </div>
          <div>
            <img style={{width:"370px"}} src={tshirts} alt="tshirts" />
          </div>
          <div>
            <img style={{width:"370px"}} src={joggers} alt="joggers" />
          </div>
        </Carousel>
      </div>
        </>
        ):(
      <div className="largerCarousel">
        <Carousel {...carouselOptions}>
          <div className='swiper-slide-carousel'>
          <Link to="/subcategories/men/sweater">
            <img className="large-slider-img" src={winter} alt="winter" />
            <span>Winter wear</span>
           
            </Link>
          </div>
          <div className='swiper-slide-carousel'>
          <Link to="/subcategories/men/shirt">
            <img className="large-slider-img" src={shirts} alt="shrits" />
            <span>Shirts</span>
           
            </Link>
          </div>
          <div className='swiper-slide-carousel'>
          <Link to="/subcategories/men/tshirt">
            <img className="large-slider-img" src={tshirts} alt="t-shirts" />
            <span>Oversize T-Shirts</span>
           
            </Link>
          </div>
          <div className='swiper-slide-carousel'>
          <Link to="/subcategories/men/jogger">
            <img className="large-slider-img" src={joggers} alt="joggers" />
            <span>Pants</span>
           
            </Link>
          </div>
        </Carousel>
      </div>
      )}
      </>
    );
  }
  
  export default LargerCarousel;
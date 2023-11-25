
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import bewakoof1 from '../Images/bewakoof1.png';
import bewakoof2 from '../Images/bewakoof2.png';
import bewakoof3 from '../Images/bewakoof3.png';
import bewakoof4 from '../Images/bewakoof4.png'

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
            <img style={{width:"370px"}} src={bewakoof1} alt="bewakoof1" />
          </div>
          <div>
            <img style={{width:"370px"}} src={bewakoof2} alt="bewakoof2" />
          </div>
          <div>
            <img style={{width:"370px"}} src={bewakoof3} alt="bewakoof3" />
          </div>
          <div>
            <img style={{width:"370px"}} src={bewakoof4} alt="bewakoof4" />
          </div>
        </Carousel>
      </div>
        </>
        ):(
      <div className="largerCarousel">
        <Carousel {...carouselOptions}>
          <div>
            <img className="large-slider-img" src={bewakoof1} alt="bewakoof1" />
          </div>
          <div>
            <img className="large-slider-img" src={bewakoof2} alt="bewakoof2" />
          </div>
          <div>
            <img className="large-slider-img" src={bewakoof3} alt="bewakoof3" />
          </div>
          <div>
            <img className="large-slider-img" src={bewakoof4} alt="bewakoof4" />
          </div>
        </Carousel>
      </div>
      )}
      </>
    );
  }
  
  export default LargerCarousel;
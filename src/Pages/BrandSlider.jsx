import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  { Component } from "react";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",color:"white" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",color:"white"  }}
        onClick={onClick}
      />
    );
  }
  
  export default class CustomArrows extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div  style={{width:"80%", marginLeft:"150px",backgroundColor:"black",marginTop:"10px"}}>
          
    
          <Slider {...settings}>
            <div style={{textAlign:"center"}}>
                <img src="https://apollo-singapore.akamaized.net/v1/files/ixwu3rw9j70x1-IN/image;s=780x0;q=60" style={{height:"500px",marginLeft:"280px",marginTop:"10px"}} alt="bpo"/>
            </div>

            <div >
            <img src="https://apollo-singapore.akamaized.net/v1/files/cqf8nhjtl0ov3-IN/image;s=780x0;q=60" style={{height:"500px",marginLeft:"280px",marginTop:"10px"}} alt="bpo"/>
            </div>

            <div >
            <img src="https://apollo-singapore.akamaized.net/v1/files/7u8we5ar0pvj1-IN/image;s=780x0;q=60" style={{height:"500px",marginLeft:"280px",marginTop:"10px"}} alt="bpo"/>
            </div>

            <div >
            <img src="https://apollo-singapore.akamaized.net/v1/files/ys3cmrt0l60u3-IN/image;s=780x0;q=60" style={{height:"500px",marginLeft:"280px",marginTop:"10px"}} alt="bpo"/>
            </div>

            <div >
            <img src="https://apollo-singapore.akamaized.net/v1/files/0nmbo52ktc9a1-IN/image;s=780x0;q=60" style={{height:"500px",marginLeft:"280px",marginTop:"10px"}} alt="bpo"/>
            </div>

            <div >
            <img src="https://apollo-singapore.akamaized.net/v1/files/sy3uukh7aelz1-IN/image;s=780x0;q=60" style={{height:"500px",marginLeft:"280px",marginTop:"10px"}} alt="bpo"/>
            </div>
            
          </Slider>
        </div>
      );
    }
  }

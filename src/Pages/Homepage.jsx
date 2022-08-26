import React, { useEffect, useState } from 'react'
// import './Footer.css';
import axios from "axios";

import './HomePage.css';
// import './Banner.css';
// import "./Products.css";

import {Swiper,SwiperSlide} from "swiper/react"
import {FreeMode} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css"


import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getProductRequest,
    getProductSuccess,
    getProductFailure,
  } from "../Redux/action";
  
const HomePage = () => {

    {

        const naviagte = useNavigate();
         const dispatch = useDispatch();
      
      
         const products = useSelector((state) => state.products);
        
        const getProducts = () => {
      
      
           dispatch(getProductRequest());
           axios
             .get("http://localhost:8080/cars")
             .then((res) => dispatch(getProductSuccess(res.data)))
             .catch((err) => dispatch(getProductFailure(err)));
         };
      
      
        useEffect(() => {
          getProducts();
        }, []);
        console.log(products);

  return (
    <div>
      


    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            {/* <Arrow></Arrow>  */}
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale:Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercials & Other Vehicles </span>
            <span>Houses</span>
          </div>
        </div>
        <div className="banner"> 
          <img
            src="https://statics.olx.in/olxin/banners/hero_bg_in_v2@1x.png"
            alt=""
          />
        </div>
      </div>
      
    </div>




    <div style={{backgroundColor:"#ebeeef"}}>

      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>
        <h1 style={{color:"#002f34",font:"24px Roboto", marginLeft:"20px"}}>More on motorcycles</h1>  </div>
        <div>View More</div>
           
            </div>
            <div  className="container py-4 px-4 justify-content-center">
        
           
        <Swiper 
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={150}
        >
           

            <SwiperSlide >
            <img style={{height:"250px",width:"200px"}}src="https://apollo-singapore.akamaized.net/v1/files/l3w9rdbkx9dv2-IN/image;s=300x600;q=60"/>
            <div>15000</div>
            <div>Pulsar 220</div>
            </SwiperSlide>

            <SwiperSlide>
            <img style={{height:"250px",width:"200px"}}src="https://apollo-singapore.akamaized.net/v1/files/ygjzx6iy8ab13-IN/image;s=300x600;q=60"/>
            <div>15000</div>
            </SwiperSlide>

            <SwiperSlide>
            <img style={{height:"250px",width:"200px"}}src="https://apollo-singapore.akamaized.net/v1/files/uhs1vyzblmla3-IN/image;s=300x600;q=60"/>
            <div>15000</div>
            </SwiperSlide>

            <SwiperSlide>
            <img style={{height:"250px",width:"200px"}}src="https://apollo-singapore.akamaized.net/v1/files/2rdzl2k5gicj2-IN/image;s=300x600;q=60"/>
            <div>15000</div>
            </SwiperSlide>


            <SwiperSlide>
            <img style={{height:"250px",width:"200px"}}src="https://apollo-singapore.akamaized.net/v1/files/2rdzl2k5gicj2-IN/image;s=300x600;q=60"/>
            <div>15000</div>
            </SwiperSlide>


            <SwiperSlide>
            <img style={{height:"250px",width:"200px"}} src="https://apollo-singapore.akamaized.net/v1/files/q1huspr7cots3-IN/image;s=780x0;q=60,https://apollo-singapore.akamaized.net/v1/files/flnuw0a02f881-IN/image;s=780x0;q=60,https://apollo-singapore.akamaized.net/v1/files/wqw37dxorx9f-IN/image;s=780x0;q=60,https://apollo-singapore.akamaized.net/v1/files/0ep7h055cvc3-IN/image;s=780x0;q=60,https://apollo-singapore.akamaized.net/v1/files/ejr46kpmgm6b3-IN/image;s=780x0;q=60,https://apollo-singapore.akamaized.net/v1/files/z9kx89kj78vp3-IN/image;s=780x0;q=60"/>
            <div>15000</div>
            </SwiperSlide>


            <SwiperSlide>
            <img style={{height:"250px",width:"200px"}} src="https://apollo-singapore.akamaized.net/v1/files/uhs1vyzblmla3-IN/image;s=300x600;q=60"/>
            <div>15000</div>
            </SwiperSlide>


            <SwiperSlide>
            <img  style={{height:"250px",width:"200px"}} src="https://apollo-singapore.akamaized.net/v1/files/q1huspr7cots3-IN/image;s=780x0;q=60,https://apollo-singapore.akamaized.net/v1/files/flnuw0a02f881-IN/image;s=780x0;q=60,https://apollo-singapore.akamaized.net/v1/files/wqw37dxorx9f-IN/image;s=780x0;q=60,https://apollo-singapore.akamaized.net/v1/files/0ep7h055cvc3-IN/image;s=780x0;q=60,https://apollo-singapore.akamaized.net/v1/files/ejr46kpmgm6b3-IN/image;s=780x0;q=60,https://apollo-singapore.akamaized.net/v1/files/z9kx89kj78vp3-IN/image;s=780x0;q=60"/>
            <div>15000</div>
            </SwiperSlide>


         
        </Swiper>
    </div>
    </div>







<div>
         <p>Fresh Recommendations</p>
          <div className="all-product">
   
   {products.map((e) => {
     const { year, price, brand, category, img, id, model} = e;
     function convert(a, b) {
       const x = +a;
       const y = +b;
       return ((x - y) / x) * 100;
     }
     return (
        
        
  
       <div  className="prt-div" key={id}>

         <img   style={{height:"150px",width:"150px"}} src={img}></img>
         <div className="view">
           {/* < VisibilityOutlinedIcon className="view-icon" onClick={ ()=>{ nav(`/product/${id}`)}}/> */}
           {/* < FavoriteBorderOutlinedIcon className="love-icon-1" onClick={ ()=>{ Addtowishlist( id) }}/> */}
         </div>
         <div className="prt-name">{year}</div>
         <div className="prt-type"><h4 style={{color:"black",}}>{price}</h4></div>
        
    
         <div className="prt-finalPrice">{brand}</div>
         <div className="prt-finalPrice">{model}</div>
       </div>
     );
   })}
     </div>
          </div>




         <div className="footerParentDiv">
      <div className="footer__banner">
        <img src="https://statics.olx.in/external/base/img/phone-app.webp" alt="" />
        <div className="footerBanner__content">
          <h3>TRY THE OLX APP</h3>
          <span>
            Buy, sell and find just about anything using the app on your mobile.
          </span>
        </div>
        <div className="footerBanner__links">
          <span>GET YOUR APP TODAY</span>
          <div className="footerBanner__apps">
            <img src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="img" />
            <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="img" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="footer__cards">
          <span className="heading">POPULAR LOCATIONS</span>
          <span>kolkata</span>
          <span>Mumbai</span>
          <span>Chennai</span>
          <span>Pune</span>
        </div>
        <div className="footer__cards" >
          <span className="heading">TRENDING LOCATIONS</span>
          <span>Bhubaneshwar</span>
          <span>Hyderabad</span>
          <span>Chandigarh</span>
          <span>Nashik</span>
        </div>
        <div className="footer__cards">
          <span className="heading">ABOUT US</span>
          <span>About OLX Group</span>
          <span>Careers</span>
          <span>Contact Us</span>
          <span>OLXPeople</span>
          <span>Waah Jobs</span>
        </div>
        <div className="footer__cards">
          <span className="heading">OLX</span>
          <span>Help</span>
          <span>Sitemap</span>
          <span>Legal & Privacy information</span>
        </div>
        <div className="footer__cards footer__social">
          <div>
            <span className="heading">FOLLOW US</span>
            <div className="footerSocial__icons">
              <div><img style={{height:"20px",width:"20px"}} src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png"/></div>
              <div><img style={{height:"20px",width:"20px"}} src="https://cdn-icons-png.flaticon.com/128/733/733614.png"/></div>
              <div><img style={{height:"20px",width:"20px"}} src="https://cdn-icons-png.flaticon.com/128/4494/4494467.png"/></div>
              <div><img style={{height:"20px",width:"20px"}} src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"/></div>
            </div>
          </div>
          <div className="footer__apps">
            <img src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="img" />
            <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="img" />
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </div>
    </div>
    </div>
  )
}
}

export default HomePage
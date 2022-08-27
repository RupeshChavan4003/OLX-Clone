import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
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
              <div><img style={{height:"20px",width:"20px"}} src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png" alt=""/></div>
              <div><img style={{height:"20px",width:"20px"}} src="https://cdn-icons-png.flaticon.com/128/733/733614.png" alt=""/></div>
              <div><img style={{height:"20px",width:"20px"}} src="https://cdn-icons-png.flaticon.com/128/4494/4494467.png" alt=""/></div>
              <div><img style={{height:"20px",width:"20px"}} src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt=""/></div>
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

export default Footer
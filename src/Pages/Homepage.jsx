import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import Slider from "react-slick";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductRequest,
  getProductSuccess,
  getProductFailure,
} from "../Redux/AppReducer/action";
import { getSingleProducts } from "../Redux/SingleReducer/action";

const HomePage = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.AppReducer.products);

  const getProducts = () => {
    dispatch(getProductRequest());
    axios
      .get("https://aberranttexturemasai.herokuapp.com/cars")
      .then((res) => dispatch(getProductSuccess(res.data)))
      .catch((err) => dispatch(getProductFailure(err)));
  };

  useEffect(() => {
    getProducts();
    
  }, []);

  // console.log(products);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    autoplaySpeed: 3000,
    slidesToScroll: 4,
    cssEase: "linear"
  };

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
              <Link to={`/products/cars`}>
                <span style={{ color: "#002f34" }}>Cars</span>
              </Link>
              <Link to={`/products/motorcyles`}>
                <span style={{ color: "#002f34" }}>Motorcycles</span>
              </Link>
              <Link to={`/products/scooter`}>
                <span style={{ color: "#002f34" }}>Scooters</span>
              </Link>
              <Link to={`/products/mobile`}>
                <span style={{ color: "#002f34" }}>Mobile Phones</span>
              </Link>
              <Link to={`/products/salesHouse`}>
                <span style={{ color: "#002f34" }}>
                  For Sale:Houses & Apartments
                </span>
              </Link>
              <span style={{ color: "#002f34" }}>
                For Rent:Houses & Apartments
              </span>
              <span style={{ color: "#002f34" }}>
                Commercials & Other Vehicles
              </span>
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

      <div
        style={{
          backgroundColor: "#ebeeef",
          width: "95%",
          margin: "auto",
          marginTop: "7%",
          marginBottom: "5%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h1
              style={{
                color: "#002f34",
                font: "26px Roboto",
                marginLeft: "20px",
              }}
            >
              More on motorcycles
            </h1>{" "}
          </div>
          <Link to={`/products/motorcyles`}>
            <div style={{ color: "#002f34", font: "20px Roboto" }}>
              View More
            </div>
          </Link>
        </div>
        <div style={{ width: "87%", margin: "auto" }}>
          <Slider {...settings}>
            <div style={{ color: "#002f34", backgroundColor: "white" }}>
              <div>
                <img
                  style={{ height: "250px", width: "220px" }}
                  src="https://apollo-singapore.akamaized.net/v1/files/l3w9rdbkx9dv2-IN/image;s=300x600;q=60"
                  alt=""
                />
                <h3>1,50,000</h3>
                <h3>Pulsar</h3>
              </div>
            </div>
            <div>
              <div>
                <img
                  style={{ height: "250px", width: "220px" }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <h1 style={{ color: "#002f34", size: "180px" }}> 100000</h1>
                <h3>Duke</h3>
              </div>
            </div>
            <div>
              <div>
                <img
                  style={{ height: "250px", width: "220px" }}
                  src="https://apollo-singapore.akamaized.net/v1/files/9b3bdcyhiy2h-IN/image;s=300x600;q=60"
                  alt=""
                />
                <h1 style={{ color: "#002f34", size: "180px" }}> 100000</h1>
                <h3>Duke 390</h3>
              </div>
            </div>
            <div>
              <div>
                <img
                  style={{ height: "250px", width: "220px" }}
                  src="https://apollo-singapore.akamaized.net/v1/files/2rdzl2k5gicj2-IN/image;s=300x600;q=60"
                  alt=""
                />
                <h1 style={{ color: "#002f34", size: "180px" }}> 100000</h1>
                <h3>Duke 180</h3>
              </div>
            </div>
            <div>
              <div>
                <img
                  style={{ height: "250px", width: "220px" }}
                  src="https://apollo-singapore.akamaized.net/v1/files/nfhajwbon3g51-IN/image;s=300x600;q=60"
                  alt=""
                />
                <h1 style={{ color: "#002f34", size: "180px" }}> 100000</h1>
                <h3>Pulsar</h3>
              </div>
            </div>
            <div>
              <div>
                <img
                  style={{ height: "250px", width: "220px" }}
                  src="https://apollo-singapore.akamaized.net/v1/files/l3w9rdbkx9dv2-IN/image;s=300x600;q=60"
                  alt=""
                />
                <h1 style={{ color: "#002f34", size: "180px" }}> 100000</h1>
                <h3>Pulsar</h3>
                
              </div>
            </div>
            <div>
              <div>
                <img
                  style={{ height: "250px", width: "220px" }}
                  src="https://apollo-singapore.akamaized.net/v1/files/l3w9rdbkx9dv2-IN/image;s=300x600;q=60"
                  alt=""
                />
                <h1 style={{ color: "#002f34", size: "180px" }}> 100000</h1>
                <h3>Pulsar</h3>
              </div>
            </div>
            <div>
              <div>
                <img
                  style={{ height: "250px", width: "220px" }}
                  src="https://apollo-singapore.akamaized.net/v1/files/l3w9rdbkx9dv2-IN/image;s=300x600;q=60"
                  alt=""
                />
                <h1 style={{ color: "#002f34", size: "180px" }}> 100000</h1>
                <h3>Gixer</h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div>
        <p
          style={{
            color: "#002f34",
            font: "28px Roboto",
            textAlign: "left",
            marginLeft: "30px",
          }}
        >
          Fresh Recommendations
        </p>
      </div>

      <div className="all-product">
        {products.map((e) => {
          const { year, price, brand, category, img, id, model } = e;

          return (
            <div className="prt-div" key={id}>
            <Link to={`/products/${category}/${id}`}> <img
                style={{ height: "220px", width: "220px" }}
                src={img}
                alt=""
              />
              <div className="view">
             <div
                  className="view-icon"
                  onClick={() => {
                    // nav(`/products/${category}/${id}`);
                    dispatch(getSingleProducts(category,id))
                  }}
                ></div>
                {/* < FavoriteBorderOutlinedIcon className="love-icon-1" onClick={ ()=>{ Addtowishlist( id) }}/> */}
              </div>

              <div className="prt-name">
                <h4 style={{ color: "black" }}>{price}</h4>
              </div>

              <div className="prt-type">{year}</div>
              <div className="prt-finalPrice">{brand}</div>
              <div className="prt-finalPrice">{category}</div>
              <div className="prt-finalPrice">{model}</div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* footer */}
    </div>
  );
};

export default HomePage;

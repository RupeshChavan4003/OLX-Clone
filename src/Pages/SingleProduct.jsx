import React, { useEffect, useState } from "react";
import styles from "./SingleProduct.module.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProducts } from "../Redux/SingleReducer/action";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { category } = useParams();
  const data = useSelector((state) => state.SingleReducer.singledata);

   

  useEffect(() => {
    dispatch(getSingleProducts(category, id));
  }, [dispatch, data.length, category, id]);
  console.log(data.img);

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Slider all */}
      <div
        style={{
          width: "80%",
          marginLeft: "150px",
          backgroundColor: "black",
          marginTop: "10px",
        }}
      >
        <Slider {...settings}>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/ixwu3rw9j70x1-IN/image;s=780x0;q=60"
              style={{
                height: "500px",
                marginLeft: "280px",
                marginTop: "10px",
              }}
              alt="bpo"
            />
          </div>

          <div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/cqf8nhjtl0ov3-IN/image;s=780x0;q=60"
              style={{
                height: "500px",
                marginLeft: "280px",
                marginTop: "10px",
              }}
              alt="bpo"
            />
          </div>

          <div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/7u8we5ar0pvj1-IN/image;s=780x0;q=60"
              style={{
                height: "500px",
                marginLeft: "280px",
                marginTop: "10px",
              }}
              alt="bpo"
            />
          </div>

          <div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/ys3cmrt0l60u3-IN/image;s=780x0;q=60"
              style={{
                height: "500px",
                marginLeft: "280px",
                marginTop: "10px",
              }}
              alt="bpo"
            />
          </div>

          <div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/0nmbo52ktc9a1-IN/image;s=780x0;q=60"
              style={{
                height: "500px",
                marginLeft: "280px",
                marginTop: "10px",
              }}
              alt="bpo"
            />
          </div>

          <div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/sy3uukh7aelz1-IN/image;s=780x0;q=60"
              style={{
                height: "500px",
                marginLeft: "280px",
                marginTop: "10px",
              }}
              alt="bpo"
            />
          </div>
        </Slider>
      </div>
      <div className={styles.carmain}>
        <div className={styles.carleft}>
          <div>
            <button className={styles.carfeatured}>Featured</button>
            <h1 className={styles.carbrandsize}>{data.brand}</h1>
            <h2 className={styles.carflu}>{data.model}</h2>
          </div>
          <div className={styles.diselcar}>
            <div className={styles.diselcar1}>
              <div>
                <img
                  src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/petrol_1x.svg"
                  style={{ height: "40px", width: "13px" }}
                  alt=""
                />
              </div>
              <div>
                <p>{data.fuel}</p>
              </div>
            </div>
            <div className={styles.diselcar1}>
              <div>
                <img
                  src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/mileage_1x.svg"
                  style={{ height: "40px", width: "13px" }}
                  alt=""
                />
              </div>
              <div>
                <p>{data.distance} KM</p>
              </div>
            </div>
            <div>
              <div className={styles.diselcar1}>
                <div>
                  <img
                    src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/transmission_1x.svg"
                    style={{ height: "40px", width: "13px" }}
                    alt=""
                  />
                </div>
                <div>
                  <p>{data.transmission}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.carpricetag}>
            <div>
              <h1 className={styles.carpriceboldness}>₹ {data.price}</h1>
            </div>
            <div>
              <button className={styles.carmakeoffer} onClick={()=>alert(" Congrats Your offer has been made")}>Make Offer</button>
            </div>
          </div>
          <div className={styles.carsoldby}>
            <div>
              <p style={{ marginLeft: "5px", fontSize: "20px" }}>Sold By</p>
            </div>
            <div>
              <h1 className={styles.carpriceboldness}>{data.sellerName}</h1>
            </div>
            <div className={styles.carpostdate}>
              <div>Post date :</div>
              <div>{data.postDate}</div>
            </div>
            <div>
              <button className={styles.carchat} onClick={()=>alert(" Thankyou for enquiry")}>Chat with seller</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.caroverview}>
        <div>
          <h1 className={styles.caroverviewsize}>Overview</h1>
        </div>
        <div className={styles.caroverviewinner}>
          <div className={styles.carowner}>
            <div>
              <img
                src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/first_owner_1x.svg"
                style={{ height: "50px", width: "40px" }}
                alt=""
              />
            </div>
            <div>
              <p>Owner</p>
              <h1 className={styles.carownersize}>{data.totalOwners}</h1>
            </div>
          </div>
          <div className={styles.carowner}>
            <div>
              <img
                src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/location_1x.svg"
                style={{ height: "50px", width: "40px" }}
                alt=""
              />
            </div>
            <div>
              <p>Location</p>
              <h1 className={styles.carownersize}>{data.address}</h1>
            </div>
          </div>
          <div className={styles.carowner}>
            <div>
              <img
                src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/inspectionDate_1x.svg"
                style={{ height: "50px", width: "40px" }}
                alt=""
              />
            </div>
            <div>
              <p>Posting Date</p>
              <h1 className={styles.carownersize}>{data.postDate}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardescdiv}>
        <div>
          <h1 className={styles.caroverviewsize}>Description</h1>
        </div>
        <div className={styles.cardescrip}>
          <p>{data.product_desc}</p>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

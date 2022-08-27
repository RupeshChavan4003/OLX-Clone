import React, { useEffect, useState } from 'react'
import styles from "./SingleProduct.module.css"
import SwipeToSlide from './BrandSlider'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllProducts } from '../Redux/ProductsReducer/action'

const SingleProduct = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const data = useSelector((state) => state.ProductsReducer.data);
    const [currentCarData,setCurrentCarData] = useState({});

    useEffect(() => {
        if(data.length === 0){
            dispatch(getAllProducts());
        }
    },[dispatch,data.length])

    useEffect(() => {
        if(id){
            const currentCar = data.find((item) => data.id === id);
            currentCarData && setCurrentCarData(currentCar);
        }
    },[id,data])
  return (
    <>
        <SwipeToSlide/>
        <div className={styles.carmain}>
            <div className={styles.carleft}>
                <div>
                    <button className={styles.carfeatured}>Featured</button>
                    <h1 className={styles.carbrandsize}>{currentCarData.brand}</h1>
                    <h2 className={styles.carflu}>{currentCarData.model}</h2>
                </div>
                <div className={styles.diselcar}>
                    <div className={styles.diselcar1}>
                        <div><img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/petrol_1x.svg" style={{height:"40px",width:"13px"}} alt="" /></div>
                        <div><p>{currentCarData.fuel}</p></div>
                    </div>
                    <div className={styles.diselcar1}>
                        <div><img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/mileage_1x.svg" style={{height:"40px",width:"13px"}} alt="" /></div>
                        <div><p>{currentCarData.distance} KM</p></div>
                    </div>
                    <div>
                    <div className={styles.diselcar1}>
                        <div><img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/transmission_1x.svg" style={{height:"40px",width:"13px"}} alt="" /></div>
                        <div><p>{currentCarData.transmission}</p></div>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <div className={styles.carpricetag}>
                    <div><h1 className={styles.carpriceboldness}>₹ {currentCarData.price}</h1></div>
                    <div><button className={styles.carmakeoffer}>Make Offer</button></div>
                  
                </div>
              <div className={styles.carsoldby}>
                <div><p style={{marginLeft:"5px",fontSize:"20px"}}>Sold By</p></div>
                <div><h1 className={styles.carpriceboldness}>{currentCarData.sellerName}</h1></div>
                <div className={styles.carpostdate}>
                    <div>Post date :</div>
                    <div>{currentCarData.postDate}</div>
                </div>
                <div><button className={styles.carchat}>Chat with seller</button></div>
               
              </div>
            </div>
        </div>
        <div className={styles.caroverview}>
            <div><h1 className={styles.caroverviewsize}>Overview</h1></div>
            <div className={styles.caroverviewinner}>
                <div className={styles.carowner}>
                    <div><img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/first_owner_1x.svg" style={{height:"50px",width:"40px"}} alt="" /></div>
                    <div>
                        <p>Owner</p>
                        <h1 className={styles.carownersize}>{currentCarData.totalOwners}</h1>
                    </div>
                </div>
                <div className={styles.carowner}>
                    <div><img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/location_1x.svg" style={{height:"50px",width:"40px"}} alt="" /></div>
                    <div>
                        <p>Location</p>
                        <h1 className={styles.carownersize}>{currentCarData.address}</h1>
                    </div>
                </div>
                <div className={styles.carowner}>
                    <div><img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/inspectionDate_1x.svg" style={{height:"50px",width:"40px"}} alt="" /></div>
                    <div>
                        <p>Posting Date</p>
                        <h1 className={styles.carownersize}>{currentCarData.postDate}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.cardescdiv}>
            <div><h1 className={styles.caroverviewsize}>Description</h1></div>
            <div className={styles.cardescrip}>
                <p>{currentCarData.product_desc}</p>
                
            </div>
        </div>

        
        <div>footer</div>
     </>
  )
}

export default SingleProduct
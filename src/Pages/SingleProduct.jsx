import React from 'react'
import styles from "./SingleProduct.module.css"
const SingleProduct = () => {
  return (
    <>
        <div><img src="https://apollo-singapore.akamaized.net/v1/files/6dh88e765dti-IN/image;s=780x0;q=60" alt="" /></div>
        <div className={styles.carmain}>
            <div className={styles.carleft}>
                <div>
                    <button className={styles.carfeatured}>Featured</button>
                    <h1 className={styles.carbrandsize}>Hyundai Verna (2015)</h1>
                    <h2 className={styles.carflu}>Fluidic 1.6 CRDi SX Opt</h2>
                </div>
                <div className={styles.diselcar}>
                    <div className={styles.diselcar1}>
                        <div><img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/petrol_1x.svg" style={{height:"40px",width:"13px"}} alt="" /></div>
                        <div><p>Disel</p></div>
                    </div>
                    <div className={styles.diselcar1}>
                        <div><img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/mileage_1x.svg" style={{height:"40px",width:"13px"}} alt="" /></div>
                        <div><p>46000.0 KM</p></div>
                    </div>
                    <div>
                    <div className={styles.diselcar1}>
                        <div><img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/transmission_1x.svg" style={{height:"40px",width:"13px"}} alt="" /></div>
                        <div><p>Manual</p></div>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <div className={styles.carpricetag}>
                    <div><h1 className={styles.carpriceboldness}>₹ 6,50,000</h1></div>
                    <div><button className={styles.carmakeoffer}>Make Offer</button></div>
                  
                </div>
              <div className={styles.carsoldby}>
                <div><p style={{marginLeft:"5px",fontSize:"20px"}}>Sold By</p></div>
                <div><h1 className={styles.carpriceboldness}>Jolly Motors</h1></div>
                <div className={styles.carpostdate}>
                    <div>Post date :</div>
                    <div>08/12/2022</div>
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
                        <h1 className={styles.carownersize}>1st</h1>
                    </div>
                </div>
                <div className={styles.carowner}>
                    <div><img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/location_1x.svg" style={{height:"50px",width:"40px"}} alt="" /></div>
                    <div>
                        <p>Location</p>
                        <h1 className={styles.carownersize}>Makarba Village</h1>
                    </div>
                </div>
                <div className={styles.carowner}>
                    <div><img src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/inspectionDate_1x.svg" style={{height:"50px",width:"40px"}} alt="" /></div>
                    <div>
                        <p>Posting Date</p>
                        <h1 className={styles.carownersize}>25-AUG-22</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.cardescdiv}>
            <div><h1 className={styles.caroverviewsize}>Description</h1></div>
            <div className={styles.cardescrip}>
                <p>2 key available</p>
                <p>2 key available</p>
            </div>
        </div>

        
        <div>footer</div>
     </>
  )
}

export default SingleProduct
import { Link } from "react-router-dom";
import React from 'react'
import { useState } from 'react'
import "./ModuleData.css"
import axios from "axios"


const  Bikes = () => {
    const [brand,setBrand]=useState("")
    const [year,setYear]=useState("")
    const [description,setDescription]=useState("")
    const [price,setPrice]=useState("")
    const [img,setImage]=useState("")
    const [state,setState]=useState("")

    const bike={
        "brand":brand,
        "year":year,
        "description":description,
        "price":price,
        "img":img,
        "state":state
    }
    // useEffect(()=>{
 
    // },[])

    const funSubmit=()=>{
        axios.post("http://localhost:8080/cars",bike)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
         
        alert("your advertisement is published")
    }
    
  return (
    <div>
        <form >
      <h1 className='mobile_div1_title'>Post Your Ad</h1>
      <div className='mobile_div1'>
          <p className='mobile_div1_innerTitle'>SELECTED 
          CATEGORY</p>
          <div style={{display:"flex",padding:"2%"}}>
          <p className='mobile_div1_innerTitle2'> Mobile /     Mobile phones</p>
          <Link className="mobile_div1_link1" to={"/adddata"}>Change</Link>
          </div>
          <hr />
       
          <p className='mobile_div_body_title'>INCLUDE SOME DETAILS</p>
          <p className='mobile_div_body_label'>Brand *</p>
          <br />
          <select  className='mobile_div_select_tag' onChange={(e)=>setBrand(e.target.value)}>
            <option value=""></option>
            <option value="Suzuki">Suzuki</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Hero">Hero</option>
            <option value="Honda">Honda</option>
            <option value="Royal Enfield">Royal Enfield</option>
            <option value="KTM">KTM</option>
            <option value="TVS">TVS</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Bajaj">Bajaj</option>
          </select>
         
         <br />
         <br />
           
          <p className='mobile_div_body_ad_Title'>Year *</p>
          <input type="number" value={year} onChange={(e)=>{setYear(e.target.value)}} maxLength={"70"} required className='mobile_div_input_tag'  />
          <br />
   
          <br/>

          <p className='mobile_div_body_description'>Description *</p>
          <br />
          <textarea value={description} onChange={(e)=>{(setDescription(e.target.value))}} maxLength="2000" className='mobile_div_input_tag_description' rows="4" cols="50" >

          </textarea>
          <br />
          <br />
          <hr />
          <p className='mobile_div1_innerTitle_set_A_price'>SET A PRICE</p>
          <p className='mobile_div_body_price'>price *</p>
          <input onChange={(e)=>{(setPrice(e.target.value))}} value={price} type="number" placeholder="" className='mobile_div_input_price' />
     
          <br />
          <br />
          <hr />

          <p className='mobile_div1_innerTitle_set_A_price'>UPLOAD UP TO 12 PHOTOS</p>
          <div>
          <input className='mobile_div_image_pistioning' type="file" accept="image/*" multiple />
          
            <img  src="https://user-images.githubusercontent.com/91020498/187058716-84b3cdd7-423a-4c4f-ab19-9687afcb421a.png" alt=""></img>
          </div>
          <br />
     
          <hr />

          <p className='mobile_div1_innerTitle_set_A_price'>CONFIRM YOUR LOCATION</p>

       
          <div style={{display:"flex"}}>
          <button className='mobile_div_button'>List</button>
          <button className='mobile_div_button2'>Current Location</button>
          </div>
          <br />
          <br />

   


          <p className='mobile_div_body_price'>State *</p>
          <select name="state" onChange={(e)=>{setState(e.target.value)}} className='mobile_div_select_tag'>
            <option value=""></option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
          </select>

          <br />
          <br />
          <hr />
         
          <p className='mobile_div1_innerTitle_set_A_price'>REVIEW YOUR DETAILS</p>
          {/* <input  className=''>POST NOW</input> */}
        <Link to={"/"}><button  className='mobile_div_button_post'  >Post Now</button></Link>
          <br />
          <br />
          
      </div>
      </form>
    </div>
  )
}

export default Bikes

import { Link } from '@chakra-ui/react'
import React from 'react'
import "./ModuleData.css"


const  Bikes = () => {
  return (
    <div>
      <h1 className='mobile_div1_title'>Post Your Ad</h1>
      <div className='mobile_div1'>
          <p className='mobile_div1_innerTitle'>SELECTED 
          CATEGORY</p>
          <div style={{display:"flex",padding:"2%"}}>
          <p className='mobile_div1_innerTitle2'> Mobile /     Mobile phones</p>
          <Link className="mobile_div1_link1">Change</Link>
          </div>
          <hr />
       
          <p className='mobile_div_body_title'>INCLUDE SOME DETAILS</p>
          <p className='mobile_div_body_label'>Brand *</p>
          <br />
          <select className='mobile_div_select_tag' >
            <option value=""></option>
            <option value="">Suzuki</option>
            <option value="">Hyundai</option>
            <option value="">Hero</option>
            <option value="">Honda</option>
 

            <option value="">Kia</option>
            <option value="">Toyoto</option>
            <option value="">Mahindra</option>
            <option value="">Nexa</option>
            <option value="">Royal Enfield</option>
            <option value="">KTM</option>
            <option value="">TVS</option>
            <option value="">Yamaha</option>
            <option value="">Bajaj</option>
          </select>
         
         <br />
         <br />
           
          <p className='mobile_div_body_ad_Title'>Year *</p>
          <input type="text" maxLength={"70"} required className='mobile_div_input_tag' />
          <br />
   
          <br/>

          <p className='mobile_div_body_description'>Description *</p>
          <br />
          {/* <input type="area" required maxLength="4000" className='mobile_div_input_tag_description' /> */}
          <textarea maxLength="2000" className='mobile_div_input_tag_description' rows="4" cols="50">

          </textarea>
          <br />
          <br />
          <hr />
          <p className='mobile_div1_innerTitle_set_A_price'>SET A PRICE</p>
          <p className='mobile_div_body_price'>price *</p>
          <input type="number" placeholder="" className='mobile_div_input_price' />
     
          <br />
          <br />
          <hr />

          <p className='mobile_div1_innerTitle_set_A_price'>UPLOAD UP TO 12 PHOTOS</p>
          <div>
            <p>click <input type="file" accept="image/*" multiple autoComplete='off' style={{opacity:"0.3"}}/></p>
            <h1>some works have to do here</h1>
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
          <select name="state"  className='mobile_div_select_tag'>
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
          <button  className='mobile_div_button_post'>POST NOW</button>
       
          
      </div>
    </div>
  )
}

export default Bikes

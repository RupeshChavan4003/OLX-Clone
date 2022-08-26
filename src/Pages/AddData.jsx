import React from 'react'

import "./ModuleData.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

const AddData = () => {
  return (
  <div> 
    <h1 className='adddata_title'>Post Your Ad</h1>
    <div className="post_your_add">
 
        
            <div className="post_your_add_div1">
                <h1 className='head_data'>CHOOSE A CATEGORY</h1>
                {/* chalra accordian */}
<Accordion>
 

  <AccordionItem >
    <Box style={{display:"flex",justifyContent:"space-between"}}>
    <Box sx={{width:"50%"}}>
    <h4>
      <AccordionButton >
        <Box flex='4' textAlign='right' sx={{textAlign:"left",height:"100%"}}>
         <p className='adddata_textfont'>Olx Auto cars</p> 
        </Box>
         <b style={{fontweight:"5000"}}>{">"}</b>
     
      </AccordionButton>
    </h4>
    </Box>

    <Box sx={{width:"50%"}}>
    <AccordionPanel pb={0} sx={{textAlign:"start",paddingRight:"50px"}}>
   <p  className='p_hovering'>Cars</p>
  
    </AccordionPanel>
    </Box>
    </Box>
    

  </AccordionItem>

  <AccordionItem >
    <Box style={{display:"flex",justifyContent:"space-between"}}>
    <Box sx={{width:"50%"}}>
    <p>
      <AccordionButton >
        <Box flex='4' textAlign='right' sx={{textAlign:"left",height:"100%"}}>
        <p className='adddata_textfont'>Properties</p> 
        </Box>
         <b style={{fontweight:"5000"}}>{">"}</b>
     
      </AccordionButton>
    </p>
    </Box>

    <Box sx={{width:"50%"}}>
    <AccordionPanel pb={0} sx={{textAlign:"start",paddingRight:"50px"}}>
   <p  className='p_hovering'>For Sale: Houses & Apartments</p>
   <p className='p_hovering'>For Rent: Houses & Apartments</p>
   <p className='p_hovering'>Lands & Plots</p>
   <p className='p_hovering'>For Rent: Shops & Offices</p>
   <p className='p_hovering'>For Sale: Shops & Offices</p>

  
    </AccordionPanel>
    </Box>
    </Box>
    

  </AccordionItem>

  <AccordionItem >
    <Box style={{display:"flex",justifyContent:"space-between"}}>
    <Box sx={{width:"50%"}}>
    <p>
      <AccordionButton >
        <Box flex='4' textAlign='right' sx={{textAlign:"left",height:"100%"}}>
        <p className='adddata_textfont'>Mobiles</p> 
        </Box>
         <b style={{fontweight:"5000"}}>{">"}</b>
     
      </AccordionButton>
    </p>
    </Box>

    <Box sx={{width:"50%"}}>
    <AccordionPanel pb={0} sx={{textAlign:"start",paddingRight:"50px"}}>
   <p  className='p_hovering'>Mobiles</p>
   <p className='p_hovering'>Accessories</p>
   <p className='p_hovering'>Tablets</p>
  
  
    </AccordionPanel>
    </Box>
    </Box>
    

  </AccordionItem>

  <AccordionItem >
    <Box style={{display:"flex",justifyContent:"space-between"}}>
    <Box sx={{width:"50%"}}>
    <p>
      <AccordionButton >
        <Box flex='4' textAlign='right' sx={{textAlign:"left",height:"100%"}}>
        <p className='adddata_textfont'>Jobs</p> 
        </Box>
         <b style={{fontweight:"5000"}}>{">"}</b>
     
      </AccordionButton>
    </p>
    </Box>

    <Box sx={{width:"50%"}}>
    <AccordionPanel pb={0} sx={{textAlign:"start",paddingRight:"50px"}}>
   <p  className='p_hovering'>Sales Marketing</p>
   <p className='p_hovering'>BPO & Telecaller</p>
   <p className='p_hovering'>Lands & Plots</p>
   <p className='p_hovering'>Driver</p>
   <p className='p_hovering'>office Assistant</p>

  
    </AccordionPanel>
    </Box>
    </Box>
    

  </AccordionItem>


  <AccordionItem >
    <Box style={{display:"flex",justifyContent:"space-between"}}>
    <Box sx={{width:"50%"}}>
    <p>
      <AccordionButton >
        <Box flex='4' textAlign='right' sx={{textAlign:"left",height:"100%"}}>
        <p className='adddata_textfont'>Bikes</p> 
        </Box>
         <b style={{fontweight:"5000"}}>{">"}</b>
     
      </AccordionButton>
    </p>
    </Box>

    <Box sx={{width:"50%"}}>
    <AccordionPanel pb={0} sx={{textAlign:"start",paddingRight:"50px"}}>
   <p  className='p_hovering'>MotarCycles</p>
   <p className='p_hovering'>Scooters</p>
   <p className='p_hovering'>Spare Parts</p>
   <p className='p_hovering'>Bicylcles</p>
 

  
    </AccordionPanel>
    </Box>
    </Box>
    

  </AccordionItem>


  <AccordionItem >
    <Box style={{display:"flex",justifyContent:"space-between"}}>
    <Box sx={{width:"50%"}}>
    <p>
      <AccordionButton >
        <Box flex='4' textAlign='right' sx={{textAlign:"left",height:"100%"}}>
        <p className='adddata_textfont'>Electronics and Application</p> 
        </Box>
         <b style={{fontweight:"5000"}}>{">"}</b>
     
      </AccordionButton>
    </p>
    </Box>

    <Box sx={{width:"50%"}}>
    <AccordionPanel pb={0} sx={{textAlign:"start",paddingRight:"50px"}}>
   <p  className='p_hovering'>Kitchen & Other Application </p>
   <p className='p_hovering'>Computers & Laptops</p>
   <p className='p_hovering'>Cameras & Laptops</p>
   <p className='p_hovering'>Cameras & lense</p>
   <p className='p_hovering'>Games & Entertainment</p>

  
    </AccordionPanel>
    </Box>
    </Box>
    

  </AccordionItem>


  <AccordionItem >
    <Box style={{display:"flex",justifyContent:"space-between"}}>
    <Box sx={{width:"50%"}}>
    <p>
      <AccordionButton >
        <Box flex='4' textAlign='right' sx={{textAlign:"left",height:"100%"}}>
        <p className='adddata_textfont'>Commericial Vehicles and Spares</p> 
        </Box>
         <b style={{fontweight:"5000"}}>{">"}</b>
     
      </AccordionButton>
    </p>
    </Box>

    <Box sx={{width:"50%"}}>
    <AccordionPanel pb={0} sx={{textAlign:"start",paddingRight:"50px"}}>
   <p  className='p_hovering'>Commercial Vehicles And Spares</p>
   <p className='p_hovering'>Spare Parts</p>
   

  
    </AccordionPanel>
    </Box>
    </Box>
    

  </AccordionItem>

  <AccordionItem >
    <Box style={{display:"flex",justifyContent:"space-between"}}>
    <Box sx={{width:"50%"}}>
    <p>
      <AccordionButton >
        <Box flex='2' sx={{textAlign:"left",height:"100%"}}>
        <p className='adddata_textfont'>Furniture</p> 
        </Box>
         <b>{">"}</b>
     
      </AccordionButton>
    </p>
    </Box>

    <Box sx={{width:"50%"}}>
    <AccordionPanel pb={0} sx={{textAlign:"start",paddingRight:"50px"}}>
   <p  className='p_hovering'>Soft and Dining</p>
   <p className='p_hovering'>Beds & WardDrobes</p>
   <p className='p_hovering'>Kids Furniture</p>
   <p className='p_hovering'>Home Decor and </p>
   
  
    </AccordionPanel>
    </Box>
    </Box>
    

  </AccordionItem>
 

 
  <AccordionItem >
    <Box style={{display:"flex",justifyContent:"space-between"}}>
    <Box sx={{width:"50%"}}>
    <p>
      <AccordionButton >
        <Box flex='4' textAlign='right' sx={{textAlign:"left",height:"100%"}}>
        <p className='adddata_textfont'>Fashion</p> 
        </Box>
         <b style={{fontweight:"5000"}}>{">"}</b>
     
      </AccordionButton>
    </p>
    </Box>

    <Box sx={{width:"50%"}}>
    <AccordionPanel pb={0} sx={{textAlign:"start",paddingRight:"50px"}}>
   <p  className='p_hovering'>Soft and Dining</p>
   <p className='p_hovering'>Beds & WardDrobes</p>
   <p className='p_hovering'>Kids Furniture</p>
   <p className='p_hovering'>Home Decor and </p>
   
  
    </AccordionPanel>
    </Box>
    </Box>
    

  </AccordionItem>


  <AccordionItem >
    <Box style={{display:"flex",justifyContent:"space-between"}}>
    <Box sx={{width:"50%"}}>
    <p>
      <AccordionButton >
        <Box flex='4' textAlign='right' sx={{textAlign:"left",height:"100%"}}>
        <p className='adddata_textfont'>Books and Items</p> 
        </Box>
         <b style={{fontweight:"5000"}}>{">"}</b>
     
      </AccordionButton>
    </p>
    </Box>

    <Box sx={{width:"50%"}}>
    <AccordionPanel pb={0} sx={{textAlign:"start",paddingRight:"50px"}}>
   <p  className='p_hovering'>Soft and Dining</p>
   <p className='p_hovering'>Beds & WardDrobes</p>
   <p className='p_hovering'>Kids Furniture</p>
   <p className='p_hovering'>Home Decor and </p>
   
  
    </AccordionPanel>
    </Box>
    </Box>
    

  </AccordionItem>

  
  <AccordionItem >
    <Box style={{display:"flex",justifyContent:"space-between"}}>
    <Box sx={{width:"50%"}}>
    <p>
      <AccordionButton >
        <Box flex='4' textAlign='right' sx={{textAlign:"left",height:"100%"}}>
        <p className='adddata_textfont'>Pets</p> 
        </Box >
         <b style={{fontweight:"5000"}}>{">"}</b>
     
      </AccordionButton>
    </p>
    </Box>

    <Box sx={{width:"50%"}}>
    <AccordionPanel pb={0} sx={{textAlign:"start",paddingRight:"50px"}}>
   <p  className='p_hovering'>Soft and Dining</p>
   <p className='p_hovering'>Beds & WardDrobes</p>
   <p className='p_hovering'>Kids Furniture</p>
   <p className='p_hovering'>Home Decor and </p>
   
  
    </AccordionPanel>
    </Box>
    </Box>
    

  </AccordionItem>

  
  <AccordionItem >
    <Box style={{display:"flex",justifyContent:"space-between"}}>
    <Box sx={{width:"50%"}}>
    <p>
      <AccordionButton >
        <Box flex='4' textAlign='right' sx={{textAlign:"left",height:"100%"}}>
        <p className='adddata_textfont'>Services</p> 
        </Box>
         <b style={{fontweight:"5000"}}>{">"}</b>
     
      </AccordionButton>
    </p>
    </Box>

    <Box sx={{width:"50%"}}>
    <AccordionPanel pb={0} sx={{textAlign:"start",paddingRight:"50px"}}>
   <p  className='p_hovering'>Soft and Dining</p>
   <p className='p_hovering'>Beds & WardDrobes</p>
   <p className='p_hovering'>Kids Furniture</p>
   <p className='p_hovering'>Home Decor and </p>
   
  
    </AccordionPanel>
    </Box>
    </Box>
    

  </AccordionItem>




</Accordion>
            </div>
            {/* <div className="post_your_add_div2">2nd div</div> */}
       
    </div>

    </div>    
  )
}

export default AddData

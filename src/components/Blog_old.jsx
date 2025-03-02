import React, { Component, useRef, useState, useEffect } from "react";
import { Link } from '@reach/router';




const V1 = () => (

<div className='Primary'> 
      <div className='Wrap'>
      <Link to =  "/V1" className="nounderline" onClick={() => window.location.href = '/V1'}>
    <div className='Block'>
      <h1>How to set up SmartViewMD Application [IOS Devices]</h1>
     
  
      <img className='image' src='/img/To_Homescreen.jpg' style={{'width': '100%'}}></img>

      <br/>
      <br/>
      <p>Setting up BelleIT’s brand new SmartViewMD web application on your IOS Device, Making a new account, and viewing your readings within the application. Thank you for choosing SmartViewMD!</p>      
    </div>
    </Link>
    </div>  
      </div>   
   

)

const V2 = () => (

<div className='Primary'> 
      <div className='Wrap'>
      <Link to =  "/V2" className="nounderline" onClick={() => window.location.href = '/V2'}>
        
    <div className='Block'>
    <h1>SmartViewMD Notifications </h1>
    <img src='/img/Notification.jpg' style={{'width': '100%'}}></img>

      <br/>
      <br/>
      <p>This video is a follow up to my previous video on how to install the SmartViewMD app on your smartphone.  In this brief video, I  will show you how SmartViewMD will remind patients to enter daily readings from their medical devices. - Belle IT CMO, @Dorizabelle</p>
    </div>
    </Link>
    </div>  
      </div>   
    
)

const V3 = () => (
<div className='Primary'> 
      <div className='Wrap'>
      <Link to =  "/V3" className="nounderline" onClick={() => window.location.href = '/V3'}>
  <div className='Block'>
    <h1>EHR Integration Setup</h1>
    <img src='/img/EHR_Notification2.jpg' style={{'width': '100%'}}></img>

      <br/>
      <br/>
      <p>How a medical provider will attach patient readings transmitted from SmartViewMD into a patient's medical record.</p>
            
      </div>
    </Link>
    </div>  
      </div>  

)

const V4 = () => (
<div className='Primary'> 
      <div className='Wrap'>
      <Link to =  "/V4" className="nounderline" onClick={() => window.location.href = '/V4'}>
  <div className='Block'>
    <h1>Instructions to [Pair] & [Read] Bluetooth Blood Pressure Monitor with SmartViewMD [iOS/Apple]</h1>
    <img src='/img/pair.jpg' style={{'width': '100%'}}></img>

      <br/>
      <br/>
      <p>With the SmartViewMD app, in combination with your blood pressure monitor, it's easy to record your blood pressure results and share them with your doctor from the comfort of your home.
</p>
            
      </div>
    </Link>
    </div>  
      </div>  

)
const V5 = () => (
<div className='Primary'> 
      <div className='Wrap'>
      <Link to =  "/V5" className="nounderline" onClick={() => window.location.href = '/V5'}>
  <div className='Block'>
    <h1>Instructions to [Pair] & [Read] Bluetooth Blood Pressure Monitor with SmartViewMD [Android]</h1>
    <img src='/img/iO.jpg' style={{'width': '100%'}}></img>

      <br/>
      <br/>
      <p>With the SmartViewMD app, in combination with your blood pressure monitor, it's easy to record your blood pressure results and share them with your doctor from the comfort of your home.
</p>
            
      </div>
    </Link>
    </div>  
      </div>  

)

export default class Blog extends Component {
  render() {
    return (
<>
      <V5/> 
      <V4/> 
      <V3/> 
      <V2/>  
      <V1/>             
        
      </>
)
}
}
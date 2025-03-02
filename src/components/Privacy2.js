import React, { Component, useRef, useState, useEffect } from "react";
import { Link } from '@reach/router';




const Privacy = () => (

<div className='Primary'> 
      <div className='Wrap'>
      <Link to =  "/V1" className="nounderline" onClick={() => window.location.href = '/V1'}>
    <div className='Block'>
      <h1>How to set up SmartViewMD Application [IOS Devices]</h1>
     
  
      <img src='/img/To_Homescreen.jpg' style={{'width': '100%'}}></img>

      <br/>
      <br/>
      <p>Welcome to Belle IT's SmartViewMD.com application. If you continue to browse and use this SmartViewMD app (application), you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Belle IT ’s relationship with you in relation to this SmartViewMD app. If you disagree with any part of these terms and conditions, please do not use our SmartViewMD app.

The term ‘Belle IT’ or ‘us’ or ‘we’ refers to the owner of the SmartViewMD app whose registered office is in Florida. Our company's website is BelleIT.net. The term ‘you’ refers to the user or viewer of our SmartViewMD app.

The content of the pages of this SmartViewMD app is for your general information and use only. It is subject to change without notice.

This SmartViewMD app uses cookies to monitor browsing preferences, push notifications and SMS texting . If you do allow cookies, notifications or SMS notifications to be used, the following personal information may be stored by us for use by business associates of BelleIT.

BelleIT is a third-party HIPAA “covered entity” under the BAA (Business Associate Agreement) with JTCHS (Jessie Trice Community Health System). As such, only the patient information identified in SmartViewMD, by you, is designated as protected “PHI” (Protected Health Information) as defined by the HIPPA Privacy Rule located at 45 CFR Part 160 and Subparts A and E of Part 164. SmartViewMD app:

(1) Creates, receives, maintains, or transmits “protected health information”, as the term is defined below, on behalf of JTCHS and you (the JTCHS patient) to carry out HIPAA covered health functions or activities regarding JTCHS and you (JTCHS patient).

(2) Provides certain services to JTCHS that involve Protected Health Information (PHI).

The HIPAA Privacy Rule provides federal protections for “personal health information” held by covered entities and gives patients an array of rights with respect to that information. At the same time, the Privacy Rule is balanced so that it permits the disclosure of personal health information needed for patient care and other important purposes.

You, the JTCHS patient, using the SmartView application understands the role of BelleIT as a 3rd party vendor for JTCHS. Also the user/patient acknowledges the use, function and purpose of SmartViewMD with respect to their health information.

Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this SmartViewMD app for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.

Your use of any information or materials on this SmartViewMD app is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this SmartViewMD app meet your specific requirements.

This SmartViewMD app contains material which is owned by us or licensed to JTCHS. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.

All trademarks reproduced in this SmartViewMD app, which are not the property of, or licensed to the operator, are acknowledged on the SmartViewMD app is considered a claim for damages and/or be a criminal offense.

From time to time, this SmartViewMD app may also include links to other SmartViewMD apps. These links are provided for your convenience to provide further information. They do not signify that we endorse any of the associated links in the SmartViewMD app(s). We have no responsibility for the content of the linked SmartViewMD app(s).

Your use of this SmartViewMD app and any dispute arising out of such use of the SmartViewMD app is subject to the laws of Broward County, Florida.</p>
      <ul>
<li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
<li>We will collect and use personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</li>
<li>We will only retain personal information as long as necessary for the fulfillment of those purposes.</li>
<li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
<li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li>
<li>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
<li>We will make readily available to customers information about our policies and practices relating to the management of personal information.</li>
</ul>  
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


export default class Privacy extends Component {
  render() {
    return (
<>
      
       
      <Privacy/>             
        
      </>
)
}
}
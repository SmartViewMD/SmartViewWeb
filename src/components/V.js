import React, { Component} from "react";
import { Link } from '@reach/router';

import { useParams } from "react-router-dom";

const vlogInfo = {
  1: {
    title: "How to set up SmartViewMD Application [IOS Devices]",
    sd:
      "Hello, my name is Dorizabelle, CMO of Belle IT, and I'm excited to be here with you for the first time setting up our brand new mobile web application, SmartViewMD, this application will be offered for both Android and iOS devices. Today, I will be showing you the setup process for the iOS platform." 
      + "\n"
      +
      "I'll be guiding you in the step by step process in how to install the app shortcut to your home screen and how to set up a new account."
      + "\n"
      +
      "First, you will want to go to SmartViewMD.com. Next, you will see an icon at the top right corner of your screen with three lines. You'll click that, and select sign up."+ "\n"
      +
      "From there, we'll start off with how to add this application to your home screen."
      + "\n"
      +
      "You'll click the middle icon at the bottom of your screen and scroll down to see add to home screen. You'll will click that. You can name the application, whatever you would like. But today I'm going to stick with SmartViewMD.com and I'm going to click add at the top right corner and it was simply added to my home screen for Easy Access. Next, I'll be showing you how to sign up with a new account. You may have this newly added application on the home screen and I will be clicking sign up at the bottom right from there will type in our first name or last name and our email address. Next, you'll be prompted to enter a strong password with more than seven characters that consist of a combination of uppercase and lowercase letters, numbers and special symbols such as punctuation. And once you've entered in each field, you click sign up. After setting up your account, you are then prompted to select which medical device you're using. The current choices are the continuous glucose monitor, the blood glucose meter, the peak flow meter, the blood pressure monitor and the fingertip pulse oximeter. After selecting at least one medical device, you may then scroll down to enter your date of birth, gender, weight, height, address, city, state, zip code, phone number. And you may then select your primary health care provider from the drop down menu. At the bottom of your screen, you have the option to upload a personal photo of yourself, if you would like, and then submit your profile. Whenever you have new readings on whichever device or devices you chose, you may then enter them into the next screen. After submitting your readings, you will then be directed to a page with a documented list of the readings you have submitted."
      + "\n"
      +
      "I hope this tutorial was useful to you and thank you for using SmartViewMD."
      + "\n"
      +
      "In my next video, I will show you how a medical provider will receive and review patient readings for that week from our SmartViewMD app and seamlessly attach those reading into the patient’s medical report (aka Electronic Health Record, or more commonly referred to as the medical office’s EHR system).  Thank you and take care.",
    v1: "https://www.youtube.com/embed/A4cGgfXqKfM?rel=0",
    v2: "",
  },
  2: {
    title: "SmartViewMD Notifications",
    sd:
      "Hi, my name is Dorizabelle, the Chief Marketing Officer of Belle IT."
      + "\n"
      +
      "This video is a follow up to my previous video on how to install the SmartViewMD app on your smartphone.  In this brief video, I  will show you how SmartViewMD will remind patients to enter daily readings from their medical devices."
      + "\n"
      +
      "When SmartViewMD notices that a patient has not entered a medical device reading in the last 24hrs, it will send a reminder notification to their phone.  The reminder notification will include a message like this   “Hi, Please remember to enter your medical device readings daily in my.SmartViewMD.com app.  Thank you.”"  
      + "\n"
      +
      "When the patient clicks on the link in that message,  they will be redirected to the SmartViewMD app where they can log in and then enter their readings (as shown in my previous video.)"
      + "\n"
      +
      "In my next video, I will show you how a medical provider will receive and review patient readings for that week from our SmartViewMD app and seamlessly attach those reading into the patient’s medical report (aka Electronic Health Record, or more commonly referred to as the medical office’s EHR system).   Thank you and take care. - Belle IT CMO, @Dorizabelle",
    v1: "https://www.youtube.com/embed/R2HugJC2WT8",
  },
  
  3: {
    title: "EHR Integration Setup",
    sd:
      "Welcome back! My name is Dorizabelle, the Chief Marketing Officer of Belle IT."
      + "\n"
      +
      "This 3rd video is a follow up to my previous video on how SmartViewMD will remind patients to enter daily readings from their medical devices into their smartphone or computer."
      + "\n"
      +
      "In this video, I  will show you how a medical provider will attach patient readings transmitted from SmartViewMD into a patient's medical record."
      + "\n"
      +
      "Here are the steps:"
      + "\n"
      +
      "From the provider’s task list within the EMR Intergy, direct messaging is chosen."
      + "\n"
      + 
      "From this list SmartView MD messages, unique to the patient, are reviewed. From there, the provider opens and reviews the data. This information may then be saved directly into the patient’s chart by associating it. This info is now available to all providers who access the patient’s chart simply by going to the images section of the patient’s chart and viewing. That's it. Hopefully, you enjoyed that quick tour of how SmartViewMD can feed data reviewed by a medical provider directly into a medical provider's EHR system."
      + "\n"
      +
      "In my next video, I will introduce you to my colleague Leo Jusme.  Leo will provide some additional insight on entering readings from several medical devices into the SmartViewMD app. In addition,  Leo and I will show you how patients can use the SmartViewMD app from their computer."  
      + "\n"
      +
      "Thank you and I look forward to seeing you in our next video.",
    v1: "https://www.youtube.com/embed/seK15PV98KQ",
    v2: "",

  },

  4: {
    title: "Instructions to [Pair] & [Read] Bluetooth Blood Pressure Monitor with SmartViewMD [iOS/Apple]",
    sd:
      "With the SmartViewMD app, in combination with your blood pressure monitor, it's easy to record your blood pressure results and share them with your doctor from the comfort of your home."
      + "\n"
      +
      "For your blood pressure monitor, please ensure that you have installed the batteries if you haven't done so already."
      + "\n"
      +
      "If you haven't already done so, (from the SmartViewMD.com website) download (for iPhone using TestFlight) or login (for Android Chrome browser) through your smart phone."
      + "\n"
      +
      "To begin, open settings on your smartphone and make sure Bluetooth is turned on."
      + "\n"
      +
      "On your SmartPhone, please adjust Audio volume for audible instructions that will guile you through the process."
      + "\n"
      + 
      "To make the most of this solution, you'll 1st need to pair your smartphone with your  blood pressure monitor device."
      + "\n"
      +
      "Now, similar to how you may have paired other Bluetooth devices, you'll pair your smart device with your  blood pressure monitor."  
      + "\n"
      +
      "Note: You only need to Pair once (for each Blood Pressure monitor)"  
      + "\n"
      +
      "Next, open the SmartViewMD app and login."  
      + "\n"
      +
      "If this is your first time using the app, you'll be prompted to provide select medical devices. For this first time configuration, you need to ensure that you have selected  the checkbox for “Blood Pressure Monitor”, and submit changes if needed. "  
      + "\n"
      +
      "Then, select menu icon (3 bars) in the top right and then select [Reading] from the menu"  
      + "\n"
      +
      "On the [Reading screen], look for and prepare to push the green “Pair” button, but do not push the button yet."  
      + "\n"
      +
      "Now turn your attention, press the Power button and hold for two seconds to get into the (initial one time) “Pair” mode. Next, from your SmartPhone push the green “Pair” button mentioned earlier. The Bluetooth icon flashes on the display as your smartPhone pairs with the Blood Pressure monitor."  
      + "\n"
      +
      "Back on your smartphone, you'll see (and hear) a message that you are connecting to Bluetooth."  
      + "\n"
      +
      "That's it. Your “Pair” setup process is complete."  
      + "\n"
      +
      "Now, that your phone is paired with the Blood Pressure monitor, you can take blood pressure readings from the “Reading” page"  
      + "\n"
      +
      "After the devices ared paired and you have received a confirmation on your smartPhone, be prepared to tap the “Read” button (which has replaced the Pair button) on your smartPhone and prepare Blood pressure monitor device to take an actuall Reading."  
      + "\n"
      +
      "Recommended (to avoid potential technical issue after 1st Pairing Process):"  
      + "\n"
      +
      "Use the top right menu to go back and review your Profile to ensure that your information is correct.On the [Reading screen], look for and prepare to push the green “Pair” button, but do not push the button yet."  
      + "\n"
      +
      "Also use the Menu to look at Listing or Reports."  
      + "\n"
      +
      "Then use the Menu to get back to the Reading screen."  
      + "\n"
      +
      "Attach the Blood pressure as instructured from their documentation or video, and push the button on the Blood pressure monitor."  
      + "\n"
      +
      "Immediately after taking a Blood pressure reading, click on the button on the blood pressure montor.  For a reading, there is no need to hold it for 2 seconds like you did earlier for the (one time initial) pairing process."  
      + "\n"
      +
      "Once you have done so, you can click the Read button on your smartPhone.  As prompted with the audio alert, you will need to select the BP100 device window that appears and Click “Done” on your smartPhone. Finally, all your readings should be listed on your current screen of your smartPhone."  
      + "\n"
      +
      "Congratulations !! …  your first reading is complete. You can now complete this Reading process when ever needed."  
      + "\n"
      +
      "To ensure optimal accuracy refer to our How to take a reading video. Videos and other helpful information can be found at SmartViewMD.com"  
      + "\n"
      +
      "Thank you",
   
    v1: "https://www.youtube.com/embed/fFsBMZOyJ40",
    v2: "https://www.youtube.com/embed/wjxuCDwPFvw",
  },

  5: {
    title: "Instructions to [Pair] & [Read] Bluetooth Blood Pressure Monitor with SmartViewMD [Android]",
    sd:
      "With the SmartViewMD app, in combination with your blood pressure monitor, it's easy to record your blood pressure results and share them with your doctor from the comfort of your home."
      + "\r\n"
      +
      "For your blood pressure monitor, please ensure that you have installed the batteries if you haven't done so already."
      + "\n"
      +
      "If you haven't already done so, (from the SmartViewMD.com website) download (for iPhone using TestFlight) or login (for Android Chrome browser) through your smart phone."
      + "\n"
      +
      "To begin, open settings on your smartphone and make sure Bluetooth is turned on."
      + "\n"
      +
      "On your SmartPhone, please adjust Audio volume for audible instructions that will guile you through the process."
      + "\n"
      + 
      "To make the most of this solution, you'll 1st need to pair your smartphone with your  blood pressure monitor device."
      + "\n"
      +
      "Now, similar to how you may have paired other Bluetooth devices, you'll pair your smart device with your  blood pressure monitor."  
      + "\n"
      +
      "Note: You only need to Pair once (for each Blood Pressure monitor)"  
      + "\n"
      +
      "Next, open the SmartViewMD app and login."  
      + "\n"
      +
      "If this is your first time using the app, you'll be prompted to provide select medical devices. For this first time configuration, you need to ensure that you have selected  the checkbox for “Blood Pressure Monitor”, and submit changes if needed. "  
      + "\n"
      +
      "Then, select menu icon (3 bars) in the top right and then select [Reading] from the menu"  
      + "\n"
      +
      "On the [Reading screen], look for and prepare to push the green “Pair” button, but do not push the button yet."  
      + "\n"
      +
      "Now turn your attention, press the Power button and hold for two seconds to get into the (initial one time) “Pair” mode. Next, from your SmartPhone push the green “Pair” button mentioned earlier. The Bluetooth icon flashes on the display as your smartPhone pairs with the Blood Pressure monitor."  
      + "\n"
      +
      "Back on your smartphone, you'll see (and hear) a message that you are connecting to Bluetooth."  
      + "\n"
      +
      "That's it. Your “Pair” setup process is complete."  
      + "\n"
      +
      "Now, that your phone is paired with the Blood Pressure monitor, you can take blood pressure readings from the “Reading” page"  
      + "\n"
      +
      "After the devices ared paired and you have received a confirmation on your smartPhone, be prepared to tap the “Read” button (which has replaced the Pair button) on your smartPhone and prepare Blood pressure monitor device to take an actuall Reading."  
      + "\n"
      +
      "Recommended (to avoid potential technical issue after 1st Pairing Process):"  
      + "\n"
      +
      "Use the top right menu to go back and review your Profile to ensure that your information is correct.On the [Reading screen], look for and prepare to push the green “Pair” button, but do not push the button yet."  
      + "\n"
      +
      "Also use the Menu to look at Listing or Reports."  
      + "\n"
      +
      "Then use the Menu to get back to the Reading screen."  
      + "\n"
      +
      "Attach the Blood pressure as instructured from their documentation or video, and push the button on the Blood pressure monitor."  
      + "\n"
      +
      "Immediately after taking a Blood pressure reading, click on the button on the blood pressure montor.  For a reading, there is no need to hold it for 2 seconds like you did earlier for the (one time initial) pairing process."  
      + "\n"
      +
      "Once you have done so, you can click the Read button on your smartPhone.  As prompted with the audio alert, you will need to select the BP100 device window that appears and Click “Done” on your smartPhone. Finally, all your readings should be listed on your current screen of your smartPhone."  
      + "\n"
      +
      "Congratulations !! …  your first reading is complete. You can now complete this Reading process when ever needed."  
      + "\n"
      +
      "To ensure optimal accuracy refer to our How to take a reading video. Videos and other helpful information can be found at SmartViewMD.com"  
      + "\n"
      +
      "Thank you",
    v1: "https://www.youtube.com/embed/hz7hS8uQDvc",
    v2: "https://www.youtube.com/embed/g7koYRd2vdA",
  },
  
};


const BGstyle = {
  display: "center",
  margin: "auto",
  width: "40%",
  backgroundSize: "cover",
  margin: "0 1em",
  padding: "0.25em 1em",
  minWidth: "90%",
};


const V = () => {
  const params = useParams();
  return (
  
    <>
    
        <div className='Primary'>
          <div className='Wrap'>
            <div className='Block'>
              <h1>{vlogInfo[params.num]["title"]}</h1>
              <br/>
              
              <iframe width="100%" height="314 100%" src={vlogInfo[params.num]["v1"]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
              <iframe width="100%" height="314 100%" src={vlogInfo[params.num]["v2"]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
          

              <br />
              <br />
              {vlogInfo[params.num]["sd"]}
            </div>
          </div>
        </div>

    </>
  );
};

export default V;
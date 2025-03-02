import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../Footer.js";
import "../footer.css";

import ContactForm from "../contactForm";

import "./css/styles.css";

function Home() {
    return (
        
<>
<div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content />
        <meta name="author" content />
        <title>SmartView MD</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* Font Awesome icons (free version)*/}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" rel="stylesheet" />
        {/* Google fonts*/}
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet" />
        {/* Plugin CSS*/}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/html5-device-mockups/3.2.1/dist/device-mockups.min.css" rel="stylesheet" />
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href="css/styles.css" rel="stylesheet" />
        {/* Navigation*/}
        
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-7 my-auto">
                <div className="header-content mx-auto">
                  <h2 className="text-white mb-5"> <strong>Introducing SmartViewMD V1.0 available for
                                  smart phone, tablet or computer{" "}</strong></h2>

                                  <h5 className="text-white mb-5">(running Chrome or FireFox)</h5>
                                <p text-white mb-5>SmartView MD
                                is a consolidated web based portal for medical
                                providers to review (monitor and receive
                                automated alerts of) patient vitals shared (via
                                patient smartphones) from disparate selected 3rd
                                party medical devices (e.g. blood pressure
                                monitor, glucose monitoring, fingertip pulse
                                oximeter, self monitoring blood glucose meter,
                                and peak flow meter to monitor respiratory
                                conditions such as asthma.)</p>
                  <a className="btn btn-outline-light py-3 px-4 rounded-pill js-scroll-trigger" href="#download">Start Now for Free!</a>
                </div>
              </div>
              <div className="col-lg-5 my-auto">
                <div className="device-wrapper">
                  <div className="device" data-device="iPhone6" data-orientation="portrait" data-color="black">
                    <div className="screen">
                      {/* PUT CONTENTS HERE*/}
                      <img className="img-fluid" src="img/dummy/demo-screen-1.jpg" alt="..." />
                    </div>
                    <a className="badge-link" href="https://apps.apple.com/us/app/smartview-md/id1556981108">
                    <div className="button" >{/* You can hook the "home button" to some JavaScript events or just remove it*/}</div></a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="download  text-center" id="download">
          <div className="container">
            <div className="row h-100">
              <div className="col-md-7 mx-auto"> 
              <img class="img-fluid" src="img/dummy/Gravity-Devices.png" alt="..."></img>
              </div>
              <div class="col-lg-5 my-auto">
              <div class=" mx-auto">
                <h3 className="text-black-50 mb-5">Discover SmartView MD</h3>
                <h5 className="text-black-50 mb-5">(running Chrome for Android)</h5>
                <p>SmartView MD is availible for web, iOS, and android</p>
                <br/>
                <div className="badges">
                  
                  <a className="badge-link" href="https://apps.apple.com/us/app/smartview-md/id1556981108"><img src="./assets/img/app-store-badge.svg" alt="..." /></a>
                  &emsp; &emsp;
                  <a class="btn btn-outline-dark py-3 px-4 rounded-pill js-scroll-trigger" href="https://my.smartviewmd.com/signup"><small>Start Now for Free</small> <br/>using Android!</a>

                </div>
                </div>                  

                </div>
            </div>
          </div>
        </section>
        <section
              id="service"
              className="home-section paddingbot-60"
            >
              <div className="container">
              <h1 className="h-bold">Current Integrated Devices</h1>
                        <br></br>
                        <br></br>
                        <br></br>
                <div className="row d-flex align-items-stretch">
                  <div className="col-sm-3 col-md-3">
                    <div className="card h-100  Card" style={{ border: 'none'}}>
                      <img
                        src="img/dummy/img-0.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                      <h5 className="h-bold">
                          Blood Pressure Monitor
                        </h5>
                        <p class="card-text">
                          An affordable, professional device that you can trust to accurately measure your patients’ blood pressures despite many common underlying circumstances with a one-button operation for fast and
                          comfortable readings from the comfort of home. The
                          free smartphone app lets patients store and track
                          their readings, so they can monitor their progress.
                          The app seamlessly connects to the blood pressure
                          monitor using Bluetooth®4.0 technology. It is no
                          wonder 95% of physicians surveyed would recommend a
                          Welch Allyn blood pressure device over comparably
                          priced options.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3 col-md-3 ">
                    <div className="card h-100 Card" style={{ border: 'none' }}>
                      <img
                        src="img/dummy/img-1.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                      <h5 className="h-bold">Glucose Monitor</h5>
                      <br></br>
                        <p class="card-text">
                          A continuous glucose monitoring system, that checks
                          your readings day and night, and is accurate for
                          insulin dosing.* The small sensor is about the size of
                          two stacked quarters and can be scanned discretely,
                          even through clothing. You can even scan the sensor
                          with your compatible smartphone. This device is
                          painless to apply and easy to wear. It's also water
                          resistant so you can swim, shower, and exercise with
                          it on.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-3">
                    <div className="card h-100 Card" style={{ border: 'none' }}>
                      <img
                        src="img/dummy/img-2.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                      <h5 className="h-bold">Blood Glucose Monitor</h5>
                        <p class="card-text">
                          The glucose meter features integrated wireless
                          capability, TRIPLE SENSE TECHNOLOGY and enhanced event
                          tags to empower the user to make the connection
                          between their personal lifestyle and results. TRIPLE
                          SENSE TECHNOLOGY automatically detects, analyzes and
                          corrects variables in each blood sample to ensure
                          proven accuracy and confidence in testing results.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-3">
                    <div className="card h-100 Card" style={{ border: 'none' }}>
                      <img
                        src="img/dummy/img-3.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                      <h5 className="h-bold">Peak Flow Meter</h5>
                      <br></br>
                        <p class="card-text">
                          A peak flow meter is a portable, inexpensive,
                          hand-held device used to measure how air flows from
                          your lungs in one "fast blast." In other words, the
                          meter measures your ability to push air out of your
                          lungs.Peak flow meters come in two ranges to measure
                          the air pushed out of your lungs. A low-range peak
                          flow meter is for small children, and a standard-range
                          peak flow meter is for older children, teenagers and
                          adults. An adult has much larger airways than a child
                          and needs the larger range.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
       
        <section className="cta">
          <div className="cta-content">
            <div className="container">
              <h2>
                Stop waiting.
                <br />
                The future 
                <br />is<strong> now.</strong> 
              </h2>
              <a className="btn btn-outline-light py-3 px-4 rounded-pill js-scroll-trigger" href="#contact">Let's Get Started!</a>
            </div>
          </div>
          <div className="overlay" />
        </section>
        <section className="contact" id="contact">
          <div className="container">
            <h2 className="text-black">
              We 
              <span class="tab">  </span> 
              <i className="text-danger fas fa-heart" aria-hidden="true">
                
              </i>
              <span class="tab">  </span>
                  new friends! 
            </h2>
            <ContactForm/>
          </div>
        </section>
        
        
        {/* Bootstrap core JS*/}
        {/* Third party plugin JS*/}
        {/* Custom scripts for this template*/}
      </div>
      
  
</>
 );
}

export default Home;



//<section className="features" id="features">
//<div className="container">
//  <div className="section-heading text-center">
//    <h2>Unlimited Possibilities, Unlimited Fun</h2>
//    <p className="text-muted">Check out what you can do with this app!</p>
//    <hr />
//  </div>
//  <div className="row">
//    <div className="col-lg-4 my-auto">
//      <div className="device-wrapper">
//        <div className="device" data-device="iPhone6" data-orientation="portrait" data-color="white">
//          <div className="screen">
//            {/* PUT CONTENTS HERE*/}
//            <img className="img-fluid" src="assets/img/demo-screen-1.jpg" alt="..." />
//          </div>
//          <div className="button">{/* You can hook the "home button" to some JavaScript events or just remove it*/}</div>
//        </div>
//      </div>
//    </div>
//    <div className="col-lg-8 my-auto">
//      <div className="container-fluid">
//        <div className="row">
//          <div className="col-lg-6">
//            <div className="feature-item">
//              <i className="icon-screen-smartphone" />
//              <h3>Device Mockups</h3>
//              <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
//            </div>
//          </div>
//          <div className="col-lg-6">
//            <div className="feature-item">
//              <i className="icon-screen-smartphone" />
//              <h3>Flexible Use</h3>
//              <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
//            </div>
//          </div>
//        </div>
//        <div className="row">
//          <div className="col-lg-6">
//            <div className="feature-item">
//              <i className="icon-screen-smartphone" />
//              <h3>Free to Use</h3>
//              <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
//            </div>
//          </div>
//          <div className="col-lg-6">
//            <div className="feature-item">
//              <i className="icon-screen-smartphone" />
//              <h3>Open Source</h3>
//              <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>
//</div>
//</section>
import React, { Component } from "react";
import Footer from "./Footer.js";
import ContactForm from "./contactForm";
import Spinner from "react-bootstrap/Spinner";
import App from "../App";
import iOS from './ios';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    'img/dummy/step1.png',
    'img/dummy/img-1.png',
    'img/dummy/img-2.png',
    'img/dummy/img-3.png',
  ];

  const link = [
   "https://testflight.apple.com/join/fQDostRx",
   
  ];

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 4000));
}

export default class Home extends Component {
  constructor(props) {
      super(props);
   
      this.state = {
        photoIndex: 0,
        isOpen: false,
      };
    }
   

  state = {
    loading: true,
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
     const { photoIndex, isOpen } = this.state;
      return (
        <>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content />
          <meta name="author" content />
          <title>SmartView MD</title>
          {/* css */}

          <link
            href="font-awesome/css/font-awesome.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="plugins/cubeportfolio/css/cubeportfolio.min.css"
          />
          <link href="css/nivo-lightbox.css" rel="stylesheet" />
          <link href="css/owl.carousel.css" rel="stylesheet" media="screen" />
          <link href="css/owl.theme.css" rel="stylesheet" media="screen" />
          <link href="css/style.css" rel="stylesheet" />

          {/* boxed bg */}
          <link
            id="bodybg"
            href="bodybg/bg1.css"
            rel="stylesheet"
            type="text/css"
          />
          {/* template skin */}
          <link id="t-colors" href="color/default.css" rel="stylesheet" />
          <link
            rel="shortcut icon"
            href="img/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="img/favicon.ico" type="image/x-icon" />
          <div id="wrapper">
            {/* Section: intro */}
            <section id="intro" className="intro shadow-lg">
              <div className="intro-content">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div>
                        <h3 className="h-ultra">SmartViewMD</h3>
                      </div>
                      <div>
                        <h4 className="h-light">
                          Premier <span className="color">Consolidated</span>{" "}
                          Portal
                        </h4>
                      </div>
                      <div className="well well-trans">
                        <div className="wow fadeInRight" data-wow-delay="0.1s">
                          <ul className="lead-list">
                            <li>
                              <span className="list">
                                <h2>
                                  Introducing SmartViewMD V1.0 available for
                                  smart phone, tablet or computer{" "}
                                </h2>
                                <h5>(running Chrome or FireFox)</h5>SmartView MD
                                is a consolidated web based portal for medical
                                providers to review (monitor and receive
                                automated alerts of) patient vitals shared (via
                                patient smartphones) from disparate selected 3rd
                                party medical devices (e.g. blood pressure
                                monitor, glucose monitoring, fingertip pulse
                                oximeter, self monitoring blood glucose meter,
                                and peak flow meter to monitor respiratory
                                conditions such as asthma.)
                              </span>
                            </li>
                            {/* <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>Reliable computer consulting</strong><br />Easy scalability solutions</span></li>
                            <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>100% compliance with HIPAA norms</strong><br />Free trial facility, and more</span></li>
                            <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>Continuous customer support service</strong><br />Highly trained computer consulting experts</span></li>*/}
                          </ul>
                          <p className="text-right">
                            <a
                              href="https://testflight.apple.com/join/fQDostRx"
                              className="btn btn-skin btn-lg shadow-lg"
                              //onClick={() => this.setState({ isOpen: true })}
                            >
                              iPhone
                              <i className="fa fa-angle-right" />
                            </a>

                            {isOpen && (
            <Lightbox
              mainSrc= { images[photoIndex] }
             imageCaption = {link[photoIndex]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              
              
            /> 
          )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div>
                        {/*<img src="img/coral-group-md/sevices-medical-billing-coral-group.jpg" className="img-responsive" alt="" />*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Section: intro */}
            {/* Section: boxes */}

            {/*
            <section id="boxes" className="home-section paddingtop-80">
              <div className="container">
                <div className="row">
                  <div className="col-sm-3 col-md-3 ">
                    <div>
                      <div className="box text-center">
                        <i className="fas fa-check fa-3x circled" />
                        <h4 className="h-bold">
                          Reduce the chances of claim denials and rejections{" "}
                        </h4>
                        <p>Enhance revenue and cash flow of your practice</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-3">
                    <div>
                      <div className="box text-center">
                        <i className="fas fa-list-alt fa-3x circled bg-skin" />
                        <h4 className="h-bold">
                          Avoid bulk paperwork in your medical facility
                        </h4>
                        <p>
                          <br />
                          Minimize your managerial workload
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-3">
                    <div>
                      <div className="box text-center">
                        <i className="fas fa-user-md fa-3x circled bg-skin" />
                        <h4 className="h-bold">Focus on core activities</h4>
                        <p>
                          <br />
                          Save capital investment that is needed to maintain the
                          infrastructure and additional staff to carry out
                          in-house computer consulting
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-3">
                    <div>
                      <div className="box text-center">
                        <i className="fas fa-check fa-3x circled bg-skin" />
                        <h4 className="h-bold">
                          Reduce the chances of claim denials and rejections{" "}
                        </h4>
                        <p>Enhance revenue and cash flow of your practice</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            */}

            

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

            {/* /Section: boxes */}
            {/*

            <div className="divider-short" />

            <section id="callaction" className="home-section paddingtop-40">	
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="callaction bg-gray">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="wow fadeInUp" data-wow-delay="0.1s">
                            <div className="col-md-4">
                            <div className="wow lightSpeedIn" data-wow-delay="0.1s">
                              <h3>Want more info?</h3>
                              <p>Belle IT </p> </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="wow lightSpeedIn" data-wow-delay="0.1s">
                            <div className="cta-btn">
                              <a href="#contact" className="btn btn-skin btn-lg">Contact us</a>	
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>	*/}
            {/* Section: services */}
            <section id="service" className="home-section paddingbot-60">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div>
                      <div className="section-heading text-center">
                        <h2 className="h-bold">
                          Our Infrastructure Support Services
                        </h2>
                        <br />
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    {/*div class="wow fadeInUp" data-wow-delay="0"*/}
                    <img
                      src="img/dummy/img-1.jpg"
                      className="img-responsive"
                      alt=""
                    />
                    {/*/div*/}
                  </div>

                  <div className="col-sm-3 col-md-3">
                    <div>
                      <div className="service-box">
                        <div style={{ padding: 11 }} className="service-icon">
                          <span className="fas fa-stethoscope fa-2x" />
                        </div>
                        <div className="service-desc">
                          <h5>Patient Enrollment</h5>
                          <p>Setup and inform</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="service-box">
                        <div style={{ padding: 11 }} className="service-icon">
                          <span className="fas fa-briefcase fa-2x" />
                        </div>
                        <div className="service-desc">
                          <h5>Payment Posting</h5>
                          <p>Billing and setup</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="service-box">
                        <div style={{ padding: 11 }} className="service-icon">
                          <span className="fas fa-plus-square fa-2x" />
                        </div>
                        <div className="service-desc">
                          <h5>Notify Patients</h5>
                          <p>Insurance Authorizations</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="service-box">
                        <div style={{ padding: 11 }} className="service-icon">
                          <span className="fas fa-h-square fa-2x" />
                        </div>
                        <div className="service-desc">
                          <h5>Computer Consulting</h5>
                          <p>Insurance Verification</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-3">
                    <div>
                      <div className="service-box">
                        <div style={{ padding: 11 }} className="service-icon">
                          <span className="fas fa-user-md fa-2x" />
                        </div>
                        <div className="service-desc">
                          <h5>AR Management</h5>
                          <p>Belle IT</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="service-box">
                        <div style={{ padding: 11 }} className="service-icon">
                          <span className="fas fa-filter fa-2x" />
                        </div>
                        <div className="service-desc">
                          <h5>Coding and Audits</h5>
                          <p>Belle IT</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="service-box">
                        <div style={{ padding: 11 }} className="service-icon">
                          <span className="fas fa-book fa-2x" />
                        </div>
                        <div className="service-desc">
                          <h5>EOB Analysis</h5>
                          <p>Account Management and Reports</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="service-box">
                        <div style={{ padding: 11 }} className="service-icon">
                          <span className="fas fa-wheelchair fa-2x" />
                        </div>
                        <div className="service-desc">
                          <h5>Insurance Enrollment</h5>
                          <p>Physicians and clinics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Section: services */}

            {/* /Section: location */}
            {/* Section: contact-us */}
            <section
              id="contact"
              className="home-section bg-gray paddingbot-90"
            >
              <ContactForm env={this.props.env} />
            </section>
            {/* /Section: contact-us */}
          </div>

          {/* Core JavaScript Files */}
          <Footer />
        </>
      );
    
  }
}

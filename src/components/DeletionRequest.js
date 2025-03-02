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
            <section id="doctor" className="home-section bg-gray paddingbot-60">
          <div className="container marginbot-50">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div>
                  <div className="section-heading">
                    <h5 className="h-bold">Request Data Deletion for SmartView MD 2</h5>
                    <p>
                    We take your privacy seriously at SmartView MD 2. If you wish to delete your account and all associated data, please follow the steps outlined below.
                      <br />
                      <br />
                      <strong>How to Request Data Deletion:</strong>
                      <br />
                      <ol>
                        <li>Go to SmartViewMD.com</li>
                        <li>Click on Deletion Request in footer.</li>
                        <li>Fill out contact form</li>
                        <li>Fill in "Delete" as subject</li>
                        <li>Tap on Submit for Deletion of account and corresponding data.</li>
                    </ol>
                      <br />
                      <p>Once your request is processed, all data associated with your account will be deleted.</p>
                      <br></br>
                      <strong>What Data is Deleted?</strong>
                      <br />
                      When you request the deletion of your account, all data collected in connection with your use of SmartView MD 2 will be permanently removed. This includes, but is not limited to:
                    
                    <br></br>
                    <ol>
                        <li>User profile information</li>
                        <li>Usage data</li>
                        <li>Preferences and settings</li>
                        <li>Any stored data linked to your account</li>
                    </ol>
                    <br></br>
                    <strong>Data Retention Period:</strong>
                      <br />
                      
                      Please note that once your data is deleted, it cannot be recovered. The deletion process typically takes up to 7 days, depending on system processing times.

If you have any further questions about data deletion or privacy concerns, feel free to contact us at <b>info@belleit.net</b>
                    </p>
                  </div>
                </div>
                <div className="divider-short" />
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
        </>
      );
    
  }
}

import React, { Component } from 'react'

export default class Home extends Component {
    render() {
      return (
        
        <div>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content />
          <meta name="author" content />
          <title>SmartView MD</title>
          {/* css */}
          <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" type="text/css" href="plugins/cubeportfolio/css/cubeportfolio.min.css" />
          <link href="css/nivo-lightbox.css" rel="stylesheet" />
          <link href="css/nivo-lightbox-theme/default/default.css" rel="stylesheet" type="text/css" />
          <link href="css/owl.carousel.css" rel="stylesheet" media="screen" />
          <link href="css/owl.theme.css" rel="stylesheet" media="screen" />
          <link href="css/animate.css" rel="stylesheet" />
          <link href="css/style.css" rel="stylesheet" />
          {/* boxed bg */}
          <link id="bodybg" href="bodybg/bg1.css" rel="stylesheet" type="text/css" />
          {/* template skin */}
          <link id="t-colors" href="color/default.css" rel="stylesheet" />
          <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="img/favicon.ico" type="image/x-icon" />
          <div id="wrapper">
            {/* Section: intro */}
            <section id="intro" className="intro">
              <div className="intro-content">
                <div className="container" >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="wow fadeInDown" data-wow-offset={0} data-wow-delay="0.1s">
                        <h2 className="h-ultra">SmartView MD</h2>
                      </div>
                      <div className="wow fadeInUp" data-wow-offset={0} data-wow-delay="0.1s">
                        <h4 className="h-light">Premier <span className="color">Consolidated</span> Portal</h4>
                      </div>
                      <div className="well well-trans">
                        <div className="wow fadeInRight" data-wow-delay="0.1s">
                          <ul className="lead-list">
                            <li><span className="list"><h2>Introducing SmartView MD V1.0
for iPhone, iPad, Desktop</h2><br />SmartView MD is a consolidated web based portal for medical providers to review (monitor and receive automated alerts of) patient vitals shared (via patient smartphones) from disparate selected 3rd party medical devices  (e.g. glucose monitoring, fingertip pulse oximeter, self monitoring blood glucose meter, and peak flow meter to monitor respiratory conditions such as asthma.)</span></li>
                            {/* <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>Reliable computer consulting</strong><br />Easy scalability solutions</span></li>
                            <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>100% compliance with HIPAA norms</strong><br />Free trial facility, and more</span></li>
                            <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>Continuous customer support service</strong><br />Highly trained computer consulting experts</span></li>*/}
                          </ul>
                          <p className="text-right wow bounceIn" data-wow-delay="0.4s">
                            <a href="#contact" className="btn btn-skin btn-lg">Learn more <i className="fa fa-angle-right" /></a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        {/*<img src="img/coral-group-md/sevices-medical-billing-coral-group.jpg" className="img-responsive" alt="" />*/}
                      </div>
                    </div>					
                  </div>		
                </div>
              </div>		
            </section>
            {/* /Section: intro */}
            {/* Section: boxes */}
            <section id="boxes" className="home-section paddingtop-80">
              <div className="container">
                
                <div className="row">
                  <div className="col-sm-3 col-md-3">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                      <div className="box text-center">
                        <i className="fa fa-check fa-3x circled bg-skin" />
                        <h4 className="h-bold">Reduce the chances of claim denials and rejections </h4>
                        <p>
                          Enhance revenue and cash flow of your practice
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-3">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                      <div className="box text-center">
                        <i className="fa fa-list-alt fa-3x circled bg-skin" />
                        <h4 className="h-bold">Avoid bulk paperwork in your medical facility</h4>
                        <p>
                          Minimize your managerial workload
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-3">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                      <div className="box text-center">
                        <i className="fa fa-user-md fa-3x circled bg-skin" />
                        <h4 className="h-bold">Focus on core activities</h4>
                        <p>
                          Save capital investment that is needed to maintain the infrastructure and additional staff to carry out in-house computer consulting
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-3">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                      <div className="box text-center">
                        <i className="fa fa-check fa-3x circled bg-skin" />
                        <h4 className="h-bold">Reduce the chances of claim denials and rejections </h4>
                        <p>
                          Enhance revenue and cash flow of your practice
                        </p>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </section>


            <section id="doctor" className="home-section bg-gray paddingbot-60">
              <div className="container marginbot-50">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="wow fadeInDown" data-wow-delay="0.1s">
                      <div className="section-heading text-center">
                      <h1 className="h-bold">Current Integrated Devices</h1>
                      <br></br>
                          <br></br>
                          <br></br>
                        <h2 className="h-bold">Glucose Monitor</h2><img src="img/dummy/img-1.png" height="200px" alt="computer consulting" />
                        <p>A continuous glucose monitoring system, that checks your readings day and night, and is accurate for insulin dosing.* The small sensor is about the size of two stacked quarters and can be scanned discreetly, even through clothing.  You can even scan the sensor with your compatible smartphone. This device is painless to apply and easy to wear. It's also water resistant so you can swim, shower, and exercise with it on.</p>
                          <br></br>
                          <br></br>
                          <br></br>

                          <h2 className="h-bold">Blood Glucose Meter</h2><img src="img/dummy/img-2.png" height="200px" alt="computer consulting" /><p>The glucose meter features integrated wireless capability, TRIPLE SENSE TECHNOLOGY and enhanced event tags to empower the user to make the connection between their personal lifestyle and results. TRIPLE SENSE TECHNOLOGY automatically detects, analyses and corrects variables in each blood sample to ensure proven accuracy and confidence in testing results.</p>
                          <br></br>
                          <br></br>
                          <br></br>
                          
                          <h2 className="h-bold">Peak Flow Meter</h2><img src="img/dummy/img-3.png" height="200px" alt="Belle IT" /><p>A peak flow meter is a portable, inexpensive, hand-held device used to measure how air flows from your lungs in one "fast blast." In other words, the meter measures your ability to push air out of your lungs.Peak flow meters come in two ranges to measure the air pushed out of your lungs. A low-range peak flow meter is for small children, and a standard-range peak flow meter is for older children, teenagers and adults. An adult has much larger airways than a child and needs the larger range.</p>
                          <br></br>
                          <br></br>
                          <br></br>
                      
                      </div>
                    </div>
                    <div className="divider-short" />
                  </div>
                </div>
              </div>
            </section>



            {/* /Section: boxes */}
             {/*
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
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                      <div className="section-heading text-center">
                        <h2 className="h-bold">Our DevOps Infrastructure Support Services</h2>
                        <br />
                      </div>		
                    </div>	
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    {/*div class="wow fadeInUp" data-wow-delay="0.1s"*/}
                    <img src="img/dummy/img-1.jpg" className="img-responsive" alt="" />
                    {/*/div*/}
                  </div>
                  <div className="col-sm-3 col-md-3">
                    <div className="wow fadeInRight" data-wow-delay="0.1s">
                      <div className="service-box">
                        <div className="service-icon">
                          <span className="fa fa-stethoscope fa-3x" /> 
                        </div>
                        <div className="service-desc">
                          <h5 className="h-light">Patient enrolment</h5>
                          <p>Demographics and charges</p>
                        </div>
                      </div>
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.2s">
                      <div className="service-box">
                        <div className="service-icon">
                          <span className="fa fa-wheelchair fa-3x" /> 
                        </div>
                        <div className="service-desc">
                          <h5 className="h-light">Insurance enrolment</h5>
                          <p>For Physicians and offices</p>
                        </div>
                      </div>
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.3s">
                      <div className="service-box">
                        <div className="service-icon">
                          <span className="fa fa-plus-square fa-3x" /> 
                        </div>
                        <div className="service-desc">
                          <h5 className="h-light">Patient scheduling and reminders</h5>
                          <p>Insurance authorizations</p>
                        </div>
                      </div>
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <div className="service-box">
                        <div className="service-icon">
                          <span className="fa fa-h-square fa-3x" /> 
                        </div>
                        <div className="service-desc">
                          <h5 className="h-light">Computer Consulting</h5>
                          <p>Insurance verification</p>
                        </div>
                      </div>
                    </div>	
                              
                  </div>
                  <div className="col-sm-3 col-md-3">
                    <div className="wow fadeInRight" data-wow-delay="0.1s">
                      <div className="service-box">
                        <div className="service-icon">
                          <span className="fa fa-user-md fa-3x" /> 
                        </div>
                        <div className="service-desc">
                          <h5 className="h-light">AR management</h5>
                          <p>Belle IT</p>
                        </div>
                      </div>
                    </div>
                    <div className="wow fadeInRight" data-wow-delay="0.2s">
                      <div className="service-box">
                        <div className="service-icon">
                          <span className="fa fa-filter fa-3x" /> 
                        </div>
                        <div className="service-desc">
                          <h5 className="h-light">Insurance enrolment</h5>
                          <p>Belle IT</p>
                        </div>
                      </div>
                    </div>
                   
                    <div className="wow fadeInRight" data-wow-delay="0.4s">
                      <div className="service-box">
                      <div className="service-icon">
                          <span className="fa fa-plus-square fa-3x" /> 
                        </div>
                        <div className="service-desc">
                          <h5 className="h-light">Financial Reports </h5>
                          <p>Reduce the odds of medical claim denials</p>
                        </div>
                      </div>
                    </div>

                    <div className="wow fadeInRight" data-wow-delay="0.5s">
                      <div className="service-box">
                        <div className="service-icon">
                          <span className="fa fa-briefcase fa-3x" /> 
                        </div>
                        <div className="service-desc">
                          <h5 className="h-light">Payment Posting</h5>
                          <p>Billing and reconciling of accounts</p>
                        </div>
                      </div>
                    </div> 


                  </div>			 
                </div>		
              </div>
            </section>
            {/* /Section: services */}
            
            
            {/* Section: team */}

            {/* 
            <section id="doctor" className="home-section bg-gray paddingbot-60">
              <div className="container marginbot-50">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="wow fadeInDown" data-wow-delay="0.1s">
                      <div className="section-heading text-center">
                        <h2 className="h-bold">Belle IT</h2>
                        <p>Through quality services we will help to reorganize the computer consulting and claim processing procedures of your medical practice in a systematic manner. 
                          We take extreme care to process and submit all medical bills and insurance claims within the prescribed time limit, strictly following the latest computer consulting and claim processing rules and regulations set by the federal government and the insurance companies.</p>
                        <img src="img/dummy/img-1.png" height="200px" alt="computer consulting" /><p>Our computer consulting outsourcing company provides client-focused computer consulting solutions in minimum turnaround time are staffed with skilled computer consulting experts, AAPC certified coders and quality controllers.</p> 
                        <img src="img/dummy/img-3.png" height="200px" alt="Belle IT" /><p>Belle IT professionals are well-informed about the latest changes in billing, coding and claim processing norms and offer customized computer consulting services. Utilizing state-of-the-art technology, the latest computer consulting software and coding tools we manage the entire billing cycle, ranging from demographic entry to AR collections with exceptional efficiency. Perfectly planned computer consulting solutions provided by an experienced computer consulting company.</p>
                      </div>
                    </div>
                    <div className="divider-short" />
                  </div>
                </div>
              </div>
            </section> */}

            {/* /Section: team */}
            {/* Section: location */}

            {/*
            <section id="location" className="home-section paddingbot-60">
              <div className="container marginbot-50">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="wow fadeInDown" data-wow-delay="0.1s">
                      <div className="section-heading text-center">
                        <h2 className="h-bold">Our locations</h2>
                        <p>Belle IT is conveniently located in Coral Springs, FL</p>
                      </div>
                    </div>
                    <div className="divider-short" />
                  </div>
                </div>
              </div>
            </section> 
            
            */}
            {/* /Section: location */}
            {/* Section: events */}

             {/*
            <section id="events" className="home-section paddingbot-60">
              <div className="container marginbot-50">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="wow fadeInDown" data-wow-delay="0.1s">
                      <div className="section-heading text-center">
                        <h2 className="h-bold">Upcomming Event</h2>
                        <p>Belle IT will share upcomming events of interest to customers</p>
                      </div>
                    </div>
                    <div className="divider-short" />
                  </div>
                </div>
              </div>
            </section>

            */}



            {/* /Section: location */}
            {/* Section: contact-us */}
            <section id="contact" className="home-section bg-gray paddingbot-60">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="form-wrapper">
                      <div className="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="panel panel-skin">
                          <div className="panel-heading">
                            <h3 className="panel-title"><span className="fa fa-pencil-square-o" /> Contact us <small>(Belle IT)</small></h3>
                          </div>
                          <div className="panel-body">
                            <form id="contact-form" role="form" className="lead">
                              <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                  <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" name="first_name" id="first_name" className="form-control input-md" />
                                  </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                  <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" name="last_name" id="last_name" className="form-control input-md" />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                  <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" name="title" id="title" className="form-control input-md" />
                                  </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                  <div className="form-group">
                                    <label>Company</label>
                                    <input type="text" name="company" id="company" className="form-control input-md" />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                  <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" id="email" className="form-control input-md" />
                                  </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                  <div className="form-group">
                                    <label>Phone number</label>
                                    <input type="text" name="phone" id="phone" className="form-control input-md" />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                  <div className="form-group">
                                    <label>Message</label>
                                    <input type="text" name="message" id="message" className="form-control input-md" />
                                  </div>
                                </div>
                              </div>
                              <input id="browser" type="hidden" defaultValue="browser" name="browser" />
                              <button type="submit" id="submit-form" className="btn btn-skin btn-block btn-lg">Submit</button>
                              {/* 
                                      <input type="submit" id="submit-form" value="Submit" class="btn btn-skin btn-block btn-lg">
                                      */}
                              <p className="lead-footer">* We'll contact you by phone &amp; email later</p>
                            </form>
                          </div>
                        </div>				
                      </div>
                    </div>
                  </div>				
                </div>	
              </div>		
            </section>
            {/* /Section: contact-us */}
          </div>
          <a href="#" className="scrollup"><i className="fa fa-angle-up active" /></a>
          {/* Core JavaScript Files */}
        </div>
      )
    }
  }
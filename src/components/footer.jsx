import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
      return (
  
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="wow fadeInDown" data-wow-delay="0.1s">
                  <div className="widget">
                    <h5>Belle IT</h5>
                    <p>
                      Computer Consulting Services
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="wow fadeInDown" data-wow-delay="0.1s">
                  <div className="widget">
                    <h5>Belle IT center</h5>
                    <p>
                      Belle IT
                    </p>
                    <ul>
                      <li>
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x" />
                          <i className="fa fa-calendar-o fa-stack-1x fa-inverse" />
                        </span> Monday - Saturday, 8am to 10pm
                      </li>
                      <li>
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x" />
                          <i className="fa fa-phone fa-stack-1x fa-inverse" />
                        </span> (754) 300-9470
                      </li>
                      <li>
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x" />
                          <i className="fa fa-envelope-o fa-stack-1x fa-inverse" />
                        </span> hello@BelleIT.net
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="wow fadeInDown" data-wow-delay="0.1s">
                  <div className="widget">
                    <h5>Our location</h5>
                    <p>Belle IT, Coral Springs, FL 33076</p>		
                  </div>
                </div>
                <div className="wow fadeInDown" data-wow-delay="0.1s">
                  <div className="widget">
                    <h5>Follow us</h5>
                    <ul className="company-social">
                      <li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li className="social-google"><a href="#"><i className="fa fa-google-plus" /></a></li>
                      <li className="social-vimeo"><a href="#"><i className="fa fa-vimeo-square" /></a></li>
                      <li className="social-dribble"><a href="#"><i className="fa fa-dribbble" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>	
          </div>
          <div className="sub-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="wow fadeInLeft" data-wow-delay="0.1s">
                    <div className="text-left">
                    <a href="Privacy.html">Privacy</a>
                      <p>©Copyright 2019 - BelleIT. All rights reserved.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="wow fadeInRight" data-wow-delay="0.1s">
                    <div className="text-right">
                      <p><a href="http://BelleIT.github.io/">Web site designed</a> by BelleIT</p>
                    </div>
                  </div>
                </div>
              </div>	
            </div>
          </div>
        </footer>
      )
    }
  }
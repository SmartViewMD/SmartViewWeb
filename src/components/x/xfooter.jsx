import React, { Component } from 'react'
import { Link } from '@reach/router'

export default class Footer extends Component {
    render() {
      return (
  
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="wow fadeInDown" data-wow-delay="0.1s">
                  <div className="widget">
                  <a href="https://belleit.net/">
                    <h4>Belle IT<hr></hr></h4>
                    </a>
                    <p>
                      Computer Consulting Services
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="wow fadeInDown" data-wow-delay="0.1s">
                  <div className="widget">
                  <h4>Contact</h4>
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
                        </span> info@BelleIT.net
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                
                <div className="wow fadeInDown" data-wow-delay="0.1s">
                  <div className="widget">
                    <h4>Follow us</h4>
                    <ul className="company-social">
                      {/*<li className="social-facebook"><a href="#"><i className="fa fa-facebook" /></a></li>*/}
                      {/*<li className="social-twitter"><a href="#"><i className="fa fa-twitter" /></a></li>*/}
                      {/*<li className="social-google"><a href="#"><i className="fa fa-google-plus" /></a></li>*/}
                      {/*<li className="social-vimeo"><a href="#"><i className="fa fa-vimeo-square" /></a></li>*/}
                      <li className="social-github"><a href="https://github.com/belleit"><i className="fa fa-github" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>	
          </div>
          
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="wow fadeInLeft" data-wow-delay="0.1s">
                    <div className="text-left">
                    <Link to ="/privacy">Privacy</Link>
                      <p>©Copyright 2019 - Belle IT. All rights reserved.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="wow fadeInRight" data-wow-delay="0.1s">
                    <br></br>
                    <div className="text-right">
                      <p><a href="http://BelleIT.net/">Web site designed</a> by Belle IT</p>
                    </div>
                  </div>
                </div>
              </div>	
            </div>
          
        </footer>
      )
    }
  }
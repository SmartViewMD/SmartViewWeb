import React, { Component } from 'react'
import { Link } from '@reach/router'

export default class Nav extends Component {
    render() {
      return (
  
        <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
          <div className="top-area">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-6">
                  <p className="bold text-left"> </p>
                </div>
                <div className="col-sm-6 col-md-6">				
                  <p className="bold text-right">Call us now (754) 300-9470</p>
                  {/*<p className="bold text-right"><a href="#intro">Home</a> | Call us now (954) 510-5544</p>*/}
                </div>
              </div>
            </div>
          </div>
          <div className="container navigation">
            <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="/">
                <img src="img/BELLEIT_Logo.png" alt="" width={125} height={50} /></a>
                {/*<h5 alt="" height={20} >SmartView MD</h5></a>*/} 
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
              <ul className="nav navbar-nav">
                {/* <li><Link to ="/covidstatement">Covid-19</Link></li>*/}
                {/* <li><Link to ="/privacy">Privacy</Link></li>*/}
                <li><a href="/#service">Services</a></li>
                {/* <li><a href="/#location">Locations</a></li>*/}
                {/* <li><a href="/#events">Events</a></li>*/}
                <li><a href="/#contact">Contact us</a></li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.container */}
        </nav>
      )
    }
  }
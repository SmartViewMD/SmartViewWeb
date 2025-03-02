import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (

    
    <div>
      
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />

<header class="header">
  
        <Navbar expand="lg" fixed="top" >
            <Nav >
            <Navbar.Brand
              to="/portfolio"
              className="nav-brand"
            >
              <Link to="/portfolio" className="nav-link text-uppercase font-weight-bold">
              Dominique
              </Link>
            </Navbar.Brand>
            </Nav>
           

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ml-auto">
            <Nav.Link class="nav-item nav-link">
                  <NavDropdown
                    title="Portfolio"
                    class="nav-link text-uppercase"
                  >
                    <NavDropdown.Item as="li" >
                      {" "}
                      <Link to="/P1" className="nav-item nav-link">
                        Card and Stationery
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="li">
                      {" "}
                      <Link to="/P2" className="nav-link">
                        Brand Manual
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="li"> 
                      {" "}
                      <Link to="/P3" className="nav-link">
                        Messaging Portal
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="li">
                      {" "}
                      <Link to="/P4" className="nav-link">
                        Misinformation Poster
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="li">
                      {" "}
                      <Link to="/P5" className="nav-link">
                        Book Cover
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="li">
                      {" "}
                      <Link to="/P6" className="nav-link">
                        Magazine Redesign
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="li">
                      {" "}
                      <Link to="/P7" className="nav-link">
                        Exhibition Website
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="li">
                      {" "}
                      <Link to="/P8" className="nav-link">
                        Billboard
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item as="li">
                      {" "}
                      <Link to="/P9" className="nav-link">
                        Brochure
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
              
                <Nav.Link class="nav-item">
                  <Link to="/" className="nav-link text-uppercase font-weight-bold">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </Nav.Link>

                <Nav.Link class="nav-item">
                  <Link
                    to="/about"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    About
                  </Link>
                </Nav.Link>
                {/*<li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Gallery</a></li>*/}
                
                
                {/*<li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Contact</a></li>*/}
             
              </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        </header>
        
    </div>
    
  );
}

export default NavBar;

import React, { Component } from "react";
import { Link } from "@reach/router"; // Import Link from @reach/router
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

export default class NavBar extends Component {
  // Function to scroll to top
  scrollToTop = () => {
    window.scrollTo(0, 0);  // This scrolls to the top of the page
  };

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />

        <Navbar expand="lg" fixed="top" className="navbar-fixed-top">
          <div className="container navigation" role="navigation">
            <div>
              {/* Logo: Scroll to top when clicked */}
              <Nav.Item className="nav-item" onClick={() => window.location.reload()}>
              <Link to="/" onClick={this.scrollToTop}
              >
                <img src="./img/svmd_logo.png" alt="Logo" height={70} />
              </Link>
              </Nav.Item>
            </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav mr-auto">
              <Nav.Item className="nav-item">
                  <a
                    href="https://cam.smartviewmd.com/"
                    className="nav-link text-uppercase font-weight-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cam
                  </a>
                </Nav.Item>


                <Nav.Item className="nav-item">
                  <a
                    href="https://svmddev.github.io/"
                    className="nav-link text-uppercase font-weight-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Test
                  </a>
                </Nav.Item>

                <Nav.Item className="nav-item">
                  <a
                    href="https://demo.smartviewmd.com/signup"
                    className="nav-link text-uppercase font-weight-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </Nav.Item>

                <Nav.Item className="nav-item">
                  <a
                    href="https://my.smartviewmd.com"
                    className="nav-link text-uppercase font-weight-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Login
                  </a>
                </Nav.Item>

                <Nav.Item className="nav-item">
                  <a
                    href="https://my.smartviewmd.com/signup"
                    className="nav-link text-uppercase font-weight-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign-Up
                  </a>
                </Nav.Item>

                <Nav.Item className="nav-item" onClick={() => window.location.reload()} >
                  <Link
                    to="/#video"
                    className="nav-link text-uppercase font-weight-bold"
                     // Scroll to top when clicking "Videos"
                  >
                    Videos
                  </Link>
                </Nav.Item>
{/*
                <Nav.Item className="nav-item">
                  <Link
                    to="/#service"
                    className="nav-link text-uppercase font-weight-bold"
                    onClick={this.scrollToTop}  // Scroll to top when clicking "Services"
                  >
                    Services
                  </Link>
                </Nav.Item>
*/}
                <Nav.Item className="nav-item">
                  <Link
                    to="/#contact"
                    className="nav-link text-uppercase font-weight-bold"
                    onClick={this.scrollToTop}  // Scroll to top when clicking "Contact Us"
                  >
                    Contact Us
                  </Link>
                </Nav.Item>

                {/* Help Dropdown */}
                <Dropdown className="nav-item">
                  <Dropdown.Toggle as={Nav.Link} className="nav-link text-uppercase font-weight-bold">
                    Help
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/#video">Videos</Dropdown.Item>
                    <Dropdown.Item href="/img/instructions/SVMD_instructions.png">
                      iPhones Instructions
                    </Dropdown.Item>
                    <Dropdown.Item href="/img/instructions/SVMD_instructions(android).png">
                      Android Instructions
                    </Dropdown.Item>
                    <Dropdown.Item href="/img/instructions/SVMD_instructions(iPhone)ESPANOL.pdf">
                      (ESPANOL) iPhone
                    </Dropdown.Item>
                    <Dropdown.Item href="/img/instructions/SVMD_instructions(android)ESPANOL.pdf">
                      (ESPANOL) Android
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

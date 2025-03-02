import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import ScrollToTop from "./ScrollToTop2";
import '../App.css';

import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <div className="w-container">
            <div className="container">
                <footer id="footer" className="bg-light text-black text-left text-lg-start foot">
                    {/* Grid container */}
                    <div className="w-container">
                        <div className="container p-4">
                            {/*Grid row*/}
                            <div className="row">
                                {/* About Section */}
                                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                    <h5 className="text-black text-uppercase left">
                                        About <Link className="text-black" to="/#footer"><strong>SmartView MD</strong></Link>
                                    </h5>
                                    <p style={{ color: 'gray' }}>
                                        SmartView MD is a consolidated web-based portal for medical providers to monitor patient vitals shared from third-party medical devices.
                                        <br /><br />
                                        The SmartViewMD software is not intended for diagnosis, cure, treatment, or prevention of disease. It is not a substitute for medical care by a healthcare provider.
                                    </p>
                                    <br />
                                    <i className="fas fa-envelope" style={{ color: 'gray' }} aria-hidden="true"></i> 
                                    <a className="text-black-50 list-unstyled mb-0" href="mailto:info@belleit.net">info@belleit.net</a>
                                </div>

                                {/* Contact Info */}
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-black text-uppercase">Contact Info</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="foot-link">
                                            <a className="text-black-50 list-unstyled mb-0" href="tel:(754)225-5601">(754) 225-5601</a>
                                        </li>
                                        <li className="foot-link">
                                            <a className="text-black-50 list-unstyled mb-0" href="mailto:info@BelleIT.net">info@BelleIT.net</a>
                                        </li>
                                        <li className="foot-link">
                                            <Link to="/#footer" className="text-black-50 list-unstyled mb-0">Monday - Saturday</Link>
                                            <br />
                                            <Link to="/#footer" className="text-black-50 list-unstyled mb-0">8am to 5pm (GMT-5)</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Menu Links */}
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-black text-uppercase">Menu</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li><Link to="/" className="text-black-50 list-unstyled mb-0">Home</Link></li>
                                        <li><Link to="/video" className="text-black-50 list-unstyled mb-0">Blog</Link></li>
                                        <li><Link to="/delete" className="text-black-50 list-unstyled mb-0">Deletion Request</Link></li>
                                        <li><Link to="/privacy" className="text-black-50 list-unstyled mb-0">Privacy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Grid row*/}
                        </div>
                        {/* Scroll to Top Button */}
                        <a href="#" className="scrollup"><i className="fas fa-angle-up"></i></a>
                    </div>
                    {/* Copyright Section */}
                    <div className="text-black-50 text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2021 SmartView MD |  
                        <Link className="text-black" to="/"> All Rights Reserved</Link>

                        {/* Social Media Links */}
                        <a href="https://github.com/SmartViewMD" className="fa fa-github"></a>
                        <Link to="/#footer" className="fa fa-twitter"></Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;

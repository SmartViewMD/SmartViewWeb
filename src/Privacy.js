import React from "react";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet"; // Import react-helmet for managing head tags

const Privacy = () => {
  return (
    <div>
      {/* Managing head using react-helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Privacy policy of SmartView MD" />
        <meta name="robots" content="noindex, nofollow" /> {/* Optional for SEO */}
        <title>SmartView MD - Privacy Policy</title>

        {/* External CSS links */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Helmet>

      <div id="wrapper">
        <section id="doctor" className="home-section bg-gray paddingbot-60">
          <div className="container marginbot-50">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div>
                  <div className="section-heading text-center">
                    <h5 className="h-bold">Website Privacy Policy</h5>
                    <p>
                      SmartView MD is sensitive to protecting the privacy of our website
                      visitors. The purpose of this Privacy Statement is to let you know how
                      SmartView MD handles information received from you through this website.
                      <br />
                      <br />
                      <strong>Health and Medical Information</strong>
                      <br />
                      Certain health and medical information about you is protected under HIPAA.
                      SmartView MD protects covered health and medical information as required.
                      <br />
                      <br />
                      <strong>Security/Confidentiality</strong>
                      <br />
                      No transmission of data over the Internet or any wireless network can be
                      guaranteed to be 100 percent secure. SmartView MD will use physical,
                      electronic, and procedural methods to protect information.
                    </p>
                  </div>
                </div>
                <div className="divider-short" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Component - if required on Privacy page as well */}
      
    </div>
  );
};

export default Privacy;

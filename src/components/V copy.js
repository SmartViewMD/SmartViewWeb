import React, { Component} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import styled from "styled-components";

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
`;

const Primary = styled.div`
  padding-top: 120px;
  max-width: 650px;
  margin: 0 auto;
  font-family: "Sen", sans-serif;
`;

const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px #fdfdfd;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-bottom: 6vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out;
  &:hover {
    //background-color: darkgray;
    //color: white;
  }

  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
`;

const vlogInfo = {
  1: {
    title: "How to set up SmartViewMD Application | IOS Devices",
    sd:
      "Setting up BelleIT’s brand new SmartViewMD web application on your IOS Device, Making a new account, and viewing your readings within the application. Thank you for choosing SmartViewMD!",
    v1: "https://drive.google.com/uc?export=view&id=1_AAQxJdNbHpwB8apL9uxzueKsyBnvE78&alt=mp4",
  },
  2: {
    title: "REAL TIME study with, Belle IT CMO, @Dorizabelle | 1 hour *MATLAB*",
    sd:
      "Today we're getting a 1-hour study session in! I hope this helps with motivation over the wintertime while school is in session. Happy Holidays! - Belle IT CMO, @Dorizabelle",
    v1: "https://drive.google.com/uc?export=view&id=1NmAxD990zjuAE5I2rug6CuI3OvvBiNzy&alt=mp4",
  },
  3: {
    title: "Belle IT Website & Mobile App",
    sd:
      "The Belle IT platform is a tool for clinics and physicians to message patients regarding their Covid-19 test status, and view global analytics regarding their real time Covid-19 condition. This platform was created using React Native libraries and is ideal for medical clinics. This efficient web presence allows clinics to stay connected to patients.",
    v1: "images/P3.jpg",
  },
};

const BGstyle = {
  display: "center",
  margin: "auto",
  width: "40%",
  backgroundSize: "cover",
  margin: "0 1em",
  padding: "0.25em 1em",
  minWidth: "90%",
};

const V = (props) => {
  const params = useParams();
  return (
    <>
    
      <div>
        <Primary>
          <Wrap>
            <Block>
              <h1>{vlogInfo[params.num]["title"]}</h1>
              <br />
              <video controls name="media" style={BGstyle}>
                <source src={vlogInfo[params.num]["v1"]} type="video/mp4" />
                <source src={vlogInfo[params.num]["v1"]} />
              </video>

              <br />
              <br />
              <br />
              {vlogInfo[params.num]["sd"]}
            </Block>
          </Wrap>
        </Primary>
      </div>
    </>
   )
  }
  
  export default V
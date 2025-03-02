import React, { Component, useRef, useState, useEffect } from "react";
import styled from 'styled-components';

import { Link } from "react-router-dom";


const Wrap=styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em;
`
 
const Primary=styled.div` 

padding-top: 120px;
    max-width: 650px;
    margin: 0 auto;
    font-family: 'Sen', sans-serif;
`

const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px #FDFDFD;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-bottom: 6vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: darkgray;
    color: white;
  }
text-decoration: none;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);

`;

const V1 = () => (
<a href='https://drive.google.com/uc?export=view&id=1_AAQxJdNbHpwB8apL9uxzueKsyBnvE78&alt=mp4' className="nounderline">
    <Block>
      <h1>How to set up SmartViewMD Application | IOS Devices</h1>
      <br/>
      <p>Setting up BelleIT’s brand new SmartViewMD web application on your IOS Device, Making a new account, and viewing your readings within the application. Thank you for choosing SmartViewMD!</p>      
    </Block>
    </a>

)

const V2 = () => (
<a href="https://drive.google.com/uc?export=view&id=1NmAxD990zjuAE5I2rug6CuI3OvvBiNzy&alt=mp4" className="nounderline">
    <Block>
    <h1>REAL TIME study with, Belle IT CMO, @Dorizabelle | 1 hour *MATLAB*</h1>
    <br/>
      <p>"Today we're getting a 1-hour study session in! I hope this helps with motivation over the wintertime while school is in session. Happy Holidays!" - Belle IT CMO, @Dorizabelle</p>
    </Block>
    </a>
)

const V3 = () => (
<Link to =  "/V2" className="nounderline">
    <Block>
    <h1>V3</h1>
    <br/>
      <p>This is FaceBook. It was started by Mark Zuckerberg at Harvard.</p>
      <p>FaceBook is the creator of the framework used to build this website, React.</p>      
    </Block>
</Link>

)


const Vlog = (props) => {
  return (
<>

      <Wrap>
      <Primary>        
        <V1/>             
        
      </Primary>
      </Wrap>      

      </>
   )
  }
  export default Vlog
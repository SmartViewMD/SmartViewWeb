import React, { Component, useRef, useState, useEffect } from "react";
import { Link } from "@reach/router";

const V1 = () => (
  <div className="Primary">
    <div className="Wrap">
      <Link
        to="/V1"
        className="nounderline"
        onClick={() => (window.location.href = "/V1")}
      >
        <div className="Block">
          <h1>How to set up SmartViewMD Application [IOS Devices]</h1>

          <img
            className="image"
            src="/img/To_Homescreen.jpg"
            style={{ width: "100%" }}
          ></img>

          <br />
          <br />
          <p>
            Setting up BelleIT’s brand new SmartViewMD web application on your
            IOS Device, Making a new account, and viewing your readings within
            the application. Thank you for choosing SmartViewMD!
          </p>
        </div>
      </Link>
    </div>
  </div>
);

const V2 = () => (
  <div className="Primary">
    <div className="Wrap">
      <Link
        to="/V2"
        className="nounderline"
        onClick={() => (window.location.href = "/V2")}
      >
        <div className="Block">
          <h1>SmartViewMD Notifications </h1>
          <img src="/img/Notification.jpg" style={{ width: "100%" }}></img>

          <br />
          <br />
          <p>
            This video is a follow up to my previous video on how to install the
            SmartViewMD app on your smartphone. In this brief video, I will show
            you how SmartViewMD will remind patients to enter daily readings
            from their medical devices. - Belle IT CMO, @Dorizabelle
          </p>
        </div>
      </Link>
    </div>
  </div>
);

const V3 = () => (
  <div className="Primary">
    <div className="Wrap">
      <Link
        to="/V3"
        className="nounderline"
        onClick={() => (window.location.href = "/V3")}
      >
        <div className="Block">
          <h1>EHR Integration Setup</h1>
          <img src="/img/EHR_Notification2.jpg" style={{ width: "100%" }}></img>

          <br />
          <br />
          <p>
            How a medical provider will attach patient readings transmitted from
            SmartViewMD into a patient's medical record.
          </p>
        </div>
      </Link>
    </div>
  </div>
);

const V4 = () => (
  <div className="Primary">
    <div className="Wrap">
      <Link
        to="/V4"
        className="nounderline"
        onClick={() => (window.location.href = "/V4")}
      >
        <div className="Block">
          <h1>
            Instructions to [Pair] & [Read] Bluetooth Blood Pressure Monitor
            with SmartViewMD [iOS/Apple]
          </h1>
          <img src="/img/pair.jpg" style={{ width: "100%" }}></img>

          <br />
          <br />
          <p>
            With the SmartViewMD app, in combination with your blood pressure
            monitor, it's easy to record your blood pressure results and share
            them with your doctor from the comfort of your home.
          </p>
        </div>
      </Link>
    </div>
  </div>
);
const V5 = () => (
  <div className="Primary">
    <div className="Wrap">
      <Link
        to="/V5"
        className="nounderline"
        onClick={() => (window.location.href = "/V5")}
      >
        <div className="Block">
          <h1>
            Instructions to [Pair] & [Read] Bluetooth Blood Pressure Monitor
            with SmartViewMD [Android]
          </h1>
          <img src="/img/iO.jpg" style={{ width: "100%" }}></img>

          <br />
          <br />
          <p>
            With the SmartViewMD app, in combination with your blood pressure
            monitor, it's easy to record your blood pressure results and share
            them with your doctor from the comfort of your home.
          </p>
        </div>
      </Link>
    </div>
  </div>
);

export default class Blog extends Component {
  render() {
    return (
      <>
        <div className="container marginbot-50">
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content />
          <meta
            name="author"
            content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
          />
          <meta name="generator" content="Hugo 0.82.0" />

          <title>Blog Template · Bootstrap v5.0</title>
          <link
            rel="canonical"
            href="https://getbootstrap.com/docs/5.0/examples/blog/"
          />

          {/* Bootstrap core CSS */}
          <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />

          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    ",
            }}
          />
          {/* Custom styles for this template */}
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900&display=swap"
            rel="stylesheet"
          />
          {/* Custom styles for this template */}
          <link href="blog.css" rel="stylesheet" />

          <div className="home-section "></div>

          <main className="container marginbot-5">
            <div className="row mb-2">
              <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                      How to set up SmartViewMD Application [iOS]
                    </strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-muted">December 14, 2013</div>
                    <p className="card-text mb-auto">
                      Setting up BelleIT’s brand new SmartViewMD web application on your
            IOS Device...
                    </p>
                    <a href="#IOSDevices" className="stretched-link">
                      More
                    </a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-8">
              <section id="BP">
                <article className="blog-post">
                  <h2 className="blog-post-title">
                    SmartViewMD.com Bluetooth Blood Pressure Monitor
                  </h2>
                  <p className="blog-post-meta">
                    January 1, 2014 by <a href="#">Belle IT</a>
                  </p>
                  {/* vimeo vid*/}
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://player.vimeo.com/video/541602253"
                      className="embed-responsive-item"
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <br />
                  <br />

                  {/* vimeo vid*/}
                  <p>
                    With the SmartView MD app, in combination with your blood
                    pressure monitor, it's easy to record your blood pressure
                    results and share them with your doctor from the comfort of
                    your home.
                  </p>
                  <hr />
                  <p>
                    For your blood pressure monitor, please ensure that you have
                    installed the batteries if you haven't done so already.
                  </p>
                  <blockquote>
                    <p>
                      If you haven't already done so, from the SmartViewMD.com
                      website or directly from the Apple app store, download
                      SmartViewMD. For android users, select log in located in
                      the navigation bar which can be found at{" "}
                      <strong>SmartViewMD.com</strong>.
                    </p>
                  </blockquote>

                  <p>
                    To begin, open Settings on your smartphone and make sure
                    Bluetooth is turned on. On your SmartPhone, please adjust
                    the Audio volume for audible instructions that will guide
                    you through the process. Now, that your phone is paired with
                    the Blood Pressure Monitor, you can take blood pressure
                    readings from the “Reading” page.
                  </p>

                  <p>
                    After the devices are paired and you have received a
                    confirmation on your smartphone, be prepared to tap the
                    “Read” button, which has replaced the Pair button, on your
                    smartphone and prepare your Blood Pressure Monitor device to
                    take an actual Reading.
                  </p>

                  <p>
                    Use the top-right menu to go back and review your Profile to
                    ensure that your information is correct. Also, use the menu
                    to look at Listing or Reports. Then use the menu to get back
                    to the Reading screen. Attach the Blood pressure as
                    instructed from their documentation or video, and push the
                    button on the Blood pressure monitor. Immediately after
                    taking a Blood pressure reading, click on the button on the
                    blood pressure monitor.
                  </p>

                  <p>
                    For readings, at this point, there is no need to hold the
                    button for 2 seconds as you did earlier for the one-time
                    initial, pairing process. Once you have done so, you can
                    click the "Read" button on your smartphone. As prompted with
                    the audio alert, you will need to select the BP100 device
                    window that appears and click “Done” on your smartPhone.
                    Finally, all your readings should be listed on the current
                    screen of your smartphone.
                  </p>

                  <p>
                    Congratulations !! … your first reading is complete. You can
                    now complete this Reading process whenever needed. To ensure
                    optimal accuracy refer to our How to take a reading video.
                  </p>

                  <p>
                    Videos and other helpful information can be found at{" "}
                    <strong>SmartViewMD.com</strong>
                  </p>

                  <p>Thank you</p>
                  <hr />
                </article>
</section>
<section id="ANDROID">
                <article className="blog-post">
                  <h2 className="blog-post-title">
                    Instructions to [Pair] & [Read] Bluetooth Blood Pressure
                    Monitor with SmartViewMD [ANDROID]
                  </h2>
                  <p className="blog-post-meta">
                    January 1, 2014 by <a href="#">Belle IT</a>
                  </p>

                  {/* vimeo vid*/}
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/hz7hS8uQDvc"
                      className="embed-responsive-item"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <br />
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/g7koYRd2vdA"
                      className="embed-responsive-item"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <br />
                  <br />

                  {/* vimeo vid*/}
                  <p>
                    With the SmartViewMD app, in combination with your blood
                    pressure monitor, it's easy to record your blood pressure
                    results and share them with your doctor from the comfort of
                    your home.
                  </p>
                  <hr />
                  <p>
                    For your blood pressure monitor, please ensure that you have
                    installed the batteries if you haven't done so already.
                  </p>
                  <blockquote>
                    <p>
                      If you haven't already done so, from the SmartViewMD.com
                      website or directly from the Apple app store, download
                      SmartViewMD. For android users, select log in located in
                      the navigation bar which can be found at{" "}
                      <strong>SmartViewMD.com</strong>.
                    </p>
                  </blockquote>

                  <p>
                    To begin, open settings on your smartphone and make sure
                    Bluetooth is turned on. On your SmartPhone, please adjust
                    Audio volume for audible instructions that will guide you
                    through the process. To make the most of this solution,
                    you'll 1st need to pair your smartphone with your blood
                    pressure monitor device. Now, similar to how you may have
                    paired other Bluetooth devices, you'll pair your smart
                    device with your blood pressure monitor. Note: You only need
                    to Pair once (for each Blood Pressure monitor) Next, open
                    the SmartViewMD app and login.
                  </p>

                  <p>
                    If this is your first time using the app, you'll be prompted
                    to provide select medical devices. For this first time
                    configuration, you need to ensure that you have selected the
                    checkbox for “Blood Pressure Monitor'', and submit changes
                    if needed. Then, select menu icon (3 bars) in the top right
                    and then select [Reading] from the menu On the [Reading
                    screen], look for and prepare to push the green “Pair”
                    button, but do not push the button yet. Now turn your
                    attention, press the Power button and hold for two seconds
                    to get into the (initial one time) “Pair” mode.
                  </p>

                  <p>
                    Next, from your SmartPhone push the green “Pair” button
                    mentioned earlier. The Bluetooth icon flashes on the display
                    as your smartPhone pairs with the Blood Pressure monitor.
                    Back on your smartphone, you'll see (and hear) a message
                    that you are connecting to Bluetooth. That's it. Your “Pair”
                    setup process is complete. Now, that your phone is paired
                    with the Blood Pressure monitor, you can take blood pressure
                    readings from the “Reading” page After the devices are
                    paired and you have received a confirmation on your
                    smartPhone, be prepared to tap the “Read” button (which has
                    replaced the Pair button) on your smartPhone and prepare
                    Blood pressure monitor device to take an actual Reading.
                  </p>

                  <p>
                    Recommended (to avoid potential technical issue after 1st
                    Pairing Process): Use the top right menu to go back and
                    review your Profile to ensure that your information is
                    correct.On the [Reading screen], look for and prepare to
                    push the green “Pair” button, but do not push the button
                    yet. Also use the Menu to look at Listing or Reports. Then
                    use the Menu to get back to the Reading screen. Attach the
                    Blood pressure as instructed from their documentation or
                    video, and push the button on the Blood pressure monitor.
                    Immediately after taking a Blood pressure reading, click on
                    the button on the blood pressure monitor. For a reading,
                    there is no need to hold it for 2 seconds like you did
                    earlier for the (one time initial) pairing process. Once you
                    have done so, you can click the Read button on your
                    smartPhone. As prompted with the audio alert, you will need
                    to select the BP100 device window that appears and Click
                    “Done” on your smartPhone. Finally, all your readings should
                    be listed on your current screen of your smartPhone.
                  </p>

                  <p>
                    Congratulations !! … your first reading is complete. You can
                    now complete this Reading process whenever needed. To ensure
                    optimal accuracy refer to our How to take a reading video.
                  </p>

                  <p>
                    Videos and other helpful information can be found at{" "}
                    <strong>SmartViewMD.com</strong>
                  </p>

                  <p>Thank you</p>
                  <hr />
                </article>
</section>

<section id="iOS">
                <article className="blog-post">
                  <h2 className="blog-post-title">
                    Instructions to [Pair] & [Read] Bluetooth Blood Pressure
                    Monitor with SmartViewMD [iOS]
                  </h2>
                  <p className="blog-post-meta">
                    January 1, 2014 by <a href="#">Belle IT</a>
                  </p>
                  {/* vimeo vid*/}
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/fFsBMZOyJ40"
                      className="embed-responsive-item"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <br />
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/wjxuCDwPFvw"
                      className="embed-responsive-item"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <br />
                  <br />

                  {/* vimeo vid*/}

                  <p>
                    With the SmartViewMD app, in combination with your blood
                    pressure monitor, it's easy to record your blood pressure
                    results and share them with your doctor from the comfort of
                    your home.
                  </p>
                  <hr />
                  <p>
                    For your blood pressure monitor, please ensure that you have
                    installed the batteries if you haven't done so already.
                  </p>
                  <blockquote>
                    <p>
                      If you haven't already done so, from the SmartViewMD.com
                      website or directly from the Apple app store, download
                      SmartViewMD. For android users, select log in located in
                      the navigation bar which can be found at{" "}
                      <strong>SmartViewMD.com</strong>.
                    </p>
                  </blockquote>

                  <p>
                    To begin, open settings on your smartphone and make sure
                    Bluetooth is turned on. On your SmartPhone, please adjust
                    Audio volume for audible instructions that will guide you
                    through the process. To make the most of this solution,
                    you'll 1st need to pair your smartphone with your blood
                    pressure monitor device. Now, similar to how you may have
                    paired other Bluetooth devices, you'll pair your smart
                    device with your blood pressure monitor. Note: You only need
                    to Pair once (for each Blood Pressure monitor) Next, open
                    the SmartViewMD app and login.
                  </p>

                  <p>
                    If this is your first time using the app, you'll be prompted
                    to provide select medical devices. For this first time
                    configuration, you need to ensure that you have selected the
                    checkbox for “Blood Pressure Monitor'', and submit changes
                    if needed. Then, select menu icon (3 bars) in the top right
                    and then select [Reading] from the menu On the [Reading
                    screen], look for and prepare to push the green “Pair”
                    button, but do not push the button yet. Now turn your
                    attention, press the Power button and hold for two seconds
                    to get into the (initial one time) “Pair” mode.
                  </p>

                  <p>
                    Next, from your SmartPhone push the green “Pair” button
                    mentioned earlier. The Bluetooth icon flashes on the display
                    as your smartPhone pairs with the Blood Pressure monitor.
                    Back on your smartphone, you'll see (and hear) a message
                    that you are connecting to Bluetooth. That's it. Your “Pair”
                    setup process is complete. Now, that your phone is paired
                    with the Blood Pressure monitor, you can take blood pressure
                    readings from the “Reading” page After the devices are
                    paired and you have received a confirmation on your
                    smartPhone, be prepared to tap the “Read” button (which has
                    replaced the Pair button) on your smartPhone and prepare
                    Blood pressure monitor device to take an actual Reading.
                  </p>

                  <p>
                    Recommended (to avoid potential technical issue after 1st
                    Pairing Process): Use the top right menu to go back and
                    review your Profile to ensure that your information is
                    correct.On the [Reading screen], look for and prepare to
                    push the green “Pair” button, but do not push the button
                    yet. Also use the Menu to look at Listing or Reports. Then
                    use the Menu to get back to the Reading screen. Attach the
                    Blood pressure as instructed from their documentation or
                    video, and push the button on the Blood pressure monitor.
                    Immediately after taking a Blood pressure reading, click on
                    the button on the blood pressure monitor. For a reading,
                    there is no need to hold it for 2 seconds like you did
                    earlier for the (one time initial) pairing process. Once you
                    have done so, you can click the Read button on your
                    smartPhone. As prompted with the audio alert, you will need
                    to select the BP100 device window that appears and Click
                    “Done” on your smartPhone. Finally, all your readings should
                    be listed on your current screen of your smartPhone.
                  </p>

                  <p>
                    Congratulations !! … your first reading is complete. You can
                    now complete this Reading process whenever needed. To ensure
                    optimal accuracy refer to our How to take a reading video.
                  </p>

                  <p>
                    Videos and other helpful information can be found at{" "}
                    <strong>SmartViewMD.com</strong>
                  </p>

                  <p>Thank you</p>
                  <hr />
                </article>
</section>
                {/* /.blog-post */}
                <section id="EHR">
                <article className="blog-post">
                  <h2 className="blog-post-title">EHR Integration Setup</h2>
                  <p className="blog-post-meta">
                    December 23, 2013 by <a href="#">Belle IT CMO, @Dorizabelle</a>
                  </p>

                   {/* vimeo vid*/}
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe 
                      className="embed-responsive-item"src="https://www.youtube.com/embed/seK15PV98KQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>

                  

                  <br />
                  <br />

                  {/* vimeo vid*/}

                  <p>
                    Welcome back! My name is Dorizabelle, the Chief Marketing
                    Officer of Belle IT.
                  </p>
                  <blockquote>
                    <p>
                      This 3rd video is a follow up to my previous video on how
                      SmartViewMD will <em>remind</em>patients to enter daily
                      readings from their medical devices into their smartphone
                      or computer.
                    </p>
                  </blockquote>
                  <p>
                    In this video, I will show you how a medical provider will
                    attach patient readings transmitted from SmartViewMD into a
                    patient's medical record.
                  </p>
                  <p>Here are the steps:</p>

                  <ul>
                    <li>
                      From the provider’s task list within the EMR Intergy,
                      direct messaging is chosen.{" "}
                    </li>
                    <li>
                      From this list SmartView MD messages, unique to the
                      patient, are reviewed.
                    </li>
                    <li>
                      From there, the provider opens and reviews the data.{" "}
                    </li>
                    <li>
                      This information may then be saved directly into the
                      patient’s chart by associating it. This info is now
                      available to all providers who access the patient’s chart
                      simply by going to the images section of the patient’s
                      chart and viewing.{" "}
                    </li>
                  </ul>

                  <p>
                    That's it. Hopefully, you enjoyed that quick tour of how
                    SmartViewMD can feed data reviewed by a medical provider
                    directly into a medical provider's EHR system. In my next
                    video, I will introduce you to my colleague Leo Jusme. Leo
                    will provide some additional insight on entering readings
                    from several medical devices into the SmartViewMD app. In
                    addition, Leo and I will show you how patients can use the
                    SmartViewMD app from their computer.
                  </p>

                  <p>
                    Thank you and I look forward to seeing you in our next
                    video.
                  </p>
                  <hr />
                </article>
</section>
                {/* /.blog-post */}
                <section id="Notifications">
                <article className="blog-post">
                  <h2 className="blog-post-title">SmartViewMD Notifications</h2>
                  <p className="blog-post-meta">
                    December 14, 2013 by{" "}
                    <a href="#">Belle IT CMO, @Dorizabelle</a>
                  </p>

                  {/* vimeo vid*/}
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/R2HugJC2WT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>

                  

                  <br />
                  <br />

                  {/* vimeo vid*/}
                  <p>
                    Hi, my name is Dorizabelle, the Chief Marketing Officer of
                    Belle IT.
                  </p>

                  <p>
                    This video is a follow up to my previous video on how to
                    install the SmartViewMD app on your smartphone.
                  </p>

                  <p>
                    In this brief video, I will show you how SmartViewMD will
                    remind patients to enter daily readings from their medical
                    devices. When SmartViewMD notices that a patient has not
                    entered a medical device reading in the last 24hrs, it will
                    send a reminder notification to their phone.
                  </p>

                  <p>
                    The reminder notification will include a message like this
                    “Hi, Please remember to enter your medical device readings
                    daily in my.SmartViewMD.com app. Thank you.” When the
                    patient clicks on the link in that message, they will be
                    redirected to the SmartViewMD app where they can log in and
                    then enter their readings (as shown in my previous video.)
                  </p>
                  <p>
                    In my next video, I will show you how a medical provider
                    will receive and review patient readings for that week from
                    our SmartViewMD app and seamlessly attach those reading into
                    the patient’s medical report (aka Electronic Health Record,
                    or more commonly referred to as the medical office’s EHR
                    system). Thank you and take care. - Belle IT CMO,
                    @Dorizabelle
                  </p>
                  <hr />
                </article>
                </section>

                {/* /.blog-post */}
<section id="IOSDevices">
                <article className="blog-post">
                  <h2 className="blog-post-title">How to set up SmartViewMD Application [IOS Devices]</h2>
                  <p className="blog-post-meta">
                    December 14, 2013 by{" "}
                    <a href="#">Belle IT CMO, @Dorizabelle</a>
                  </p>

                  {/* vimeo vid*/}
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"  src="https://www.youtube.com/embed/A4cGgfXqKfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>

                  

                  <br />
                  <br />

                  {/* vimeo vid*/}
                  <p>
                    Hello, my name is Dorizabelle, CMO of Belle IT, and I'm
                    excited to be here with you for the first time setting up
                    our brand new mobile web application, SmartViewMD, this
                    application will be offered for both Android and iOS
                    devices.
                  </p>

                  <p>
                    Today, I will be showing you the setup process for the iOS
                    platform. I'll be guiding you in the step by step process in
                    how to install the app shortcut to your home screen and how
                    to set up a new account. First, you will want to go to
                    SmartViewMD.com. Next, you will see an icon at the top right
                    corner of your screen with three lines. You'll click that,
                    and select sign up. From there, we'll start off with how to
                    add this application to your home screen. You'll click the
                    middle icon at the bottom of your screen and scroll down to
                    see the add to home screen. You'll click that. You can name
                    the application, whatever you would like. But today I'm
                    going to stick with SmartViewMD.com and I'm going to click
                    add at the top right corner and it was simply added to my
                    home screen for Easy Access.
                  </p>

                  <p>
                    Next, I'll be showing you how to sign up with a new account.
                    You may have this newly added application on the home screen
                    and I will be clicking sign up at the bottom right from
                    there will type in our first name or last name and our email
                    address. Next, you'll be prompted to enter a strong password
                    with more than seven characters that consist of a
                    combination of uppercase and lowercase letters, numbers and
                    special symbols such as punctuation. And once you've entered
                    each field, you click sign up.
                  </p>

                  <p>
                    After setting up your account, you are then prompted to
                    select which medical device you're using. The current
                    choices are the continuous glucose monitor, the blood
                    glucose meter, the peak flow meter, the blood pressure
                    monitor and the fingertip pulse oximeter. After selecting at
                    least one medical device, you may then scroll down to enter
                    your date of birth, gender, weight, height, address, city,
                    state, zip code, phone number. And you may then select your
                    primary health care provider from the drop down menu. At the
                    bottom of your screen, you have the option to upload a
                    personal photo of yourself, if you would like, and then
                    submit your profile. Whenever you have new readings on
                    whichever device or devices you chose, you may then enter
                    them into the next screen. After submitting your readings,
                    you will then be directed to a page with a documented list
                    of the readings you have submitted. I hope this tutorial was
                    useful to you and thank you for using SmartViewMD.
                  </p>
                  <p>
                    In my next video, I will show you how a medical provider
                    will receive and review patient readings for that week from
                    our SmartViewMD app and seamlessly attach those reading into
                    the patient’s medical report (aka Electronic Health Record,
                    or more commonly referred to as the medical office’s EHR
                    system).
                  </p>

                  <p>Thank you and take care.</p>
                </article>
</section>
                
              </div>


              <div className="col-md-4 " >
              
              <div className="sticky-top sticky-offset" style = {{top:100}}>

{/*
                <div className="p-4 mb-3 bg-light rounded ">
                  <h4 className="fst-italic ">About</h4>
                  <p className="mb-0">
                    Saw you downtown singing the Blues. Watch you circle the
                    drain. Why don't you let me stop by? Heavy is the head that{" "}
                    <em>wears the crown</em>. Yes, we make angels cry, raining
                    down on earth from up above.
                  </p>
                </div>
*/}


                <div className="p-4 ">
                  <h4 className="fst-italic">Archives</h4>
                  <ol className="list-unstyled mb-0">
                    <li>
                      <a href="#BP">Blood Pressure Monitor</a>
                    </li>
                    <li>
                      <a href="#ANDROID">[Pair] & [Read][ANDROID]</a>
                    </li>
                    <li>
                      <a href="#iOS">[Pair] & [Read][iOS]</a>
                    </li>
                    <li>
                      <a href="#EHR">EHR Integration Setup</a>
                    </li>
                    <li>
                      <a href="#Notifications">SmartViewMD Notifications</a>
                    </li>
                    <li>
                      <a href="#IOSDevices">SmartViewMD Application [IOS Devices]</a>
                    </li>
                    
                  </ol>
                </div>

                <div className="p-4">
                  <h4 className="fst-italic">Elsewhere</h4>
                  <ol className="list-unstyled">
                    <li>
                      <a href="https://github.com/SmartViewMD">GitHub</a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UC-0gPjCU7BEtAUkQwoYlx6w">Youtube</a>
                    </li>
                    <li>
                      <a href="https://vimeo.com/user138761855">Vimeo</a>
                    </li>
                  </ol>
                </div>


                </div>
              </div>

            </div>
            {/* /.row */}
          </main>
          {/* /.container */}
        </div>
      </>
    );
  }
}

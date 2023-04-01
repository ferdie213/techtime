import React from "react";

import "./header.styles.css";

const HeaderSection = (props) => (
  <div className="top-container">

    {/*First Header Section starts here  */}
    <div className="first-header-section">
      <div className="py-2 bgImg width-size">
        <div className="pt-3">
          <h2 className="">Grow your skills to advance your career path </h2>
          <p>
            build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </p>
        </div>

        <div className="row row-cols-auto m-4">
          <div className="col p-2">
            <button className="btn btn-outline-light header-button-style-white">Get Started Now</button>
          </div>
          <div className="col p-2 ">
            <button className="btn btn-primary header-button-style ">Enroll Now</button>
          </div>
        </div>
      </div>
      <div className="width-size">
        <img className="header-img-style" src="/image.png" alt="girl" />
      </div>
    </div>

    {/* Second header section starts here */}
    <div className="second-header-section">
      <div className="second-header-section-mobo-width">
        <img src="/zoom.png" className="zoom-img" alt="Zoom" />
      </div>
      <div className="second-header-section-mobo-width">
        <img src="/stripe.png" className="stripe-img" alt="Stripe" />
      </div>
      <div className="second-header-section-mobo-width">
        <img src="/monday.png" className="drop-img" alt="Monday" />
      </div>
      <div className="second-header-section-mobo-width">
        <img src="/slack.png" className="zoom-img" alt="Slack" />
      </div>
      <div className="second-header-section-mobo-width">
        <img src="/dropbox.png" className="drop-img" alt="Dropbox" />
      </div>
    </div>
  </div>
);

export default HeaderSection;

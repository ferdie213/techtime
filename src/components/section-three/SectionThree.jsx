import React from "react";

import "./sectionThree.styles.css";

export const SectionThree = (props) => (
  <div className="section-three-container py-2">
    <div className="d-flex justify-content-center pt-4">
      <div className="header-small py-2">join our community</div>
    </div>
    <div className="d-flex justify-content-center py-2">
      <div className="header-main">
        are you ready to connect with the future talent of the tech world
      </div>
    </div>
    <div className="d-flex justify-content-center py-2">
      <div className="sub-title">
        meet up with other techstars and grow together
      </div>
    </div>
    <div className="d-flex justify-content-center">
      <img src="/sectionThree/connect.png" alt="community" className="community-img" />
    </div>
    <div className="btn-container d-flex justify-content-center py-3">
      <button className="btn btn-light button-style ">Join Our Community</button>
    </div>
  </div>
);

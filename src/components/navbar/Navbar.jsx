import React from "react";

import "./navbar.style.css";

export const Navbar = (props) => (
  <nav className="navbar navbar-expand-md navbar-dark navbar-color">
    <div className="container-fluid">
      <a className="navbar-brand nav-logo" href="gotosomewhere">
        techTime
      </a>
      <div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    

        <div className="d-flex">
          <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active nav-link-txt"
                aria-current="page"
                href="gotosomewhere"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-txt" href="gotosomewhere">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-txt" href="gotosomewhere">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-txt" href="gotosomewhere">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-txt" href="gotosomewhere">
                Community
              </a>
            </li>
          </ul>
          <button className="btn btn-outline-primary nav-button-style" >
            Enroll Now
          </button>
        </div>
      </div>
      </div>
    </div>
  </nav>
);

// export default HeaderSection

import React from "react";

import "./footer.style.css";

export const Footer = (props) => (
  <div className="footer-container py-2">
    <div class="row py-5 m-2">
      <div class="col-sm-4 p-2">
        <div className="footer-logo">techtime</div>
        <div className="footer-logo-txt pt-3">
          reach out to us on any of our social media networks
        </div>
        <div>
          <div className="list-inline py-3">
            <div className="list-inline-item">
              <img src="/socials/fb.png" alt="facebook" />
            </div>
            <div className="list-inline-item">
              <img src="/socials/twitter.png" alt="twitter" />
            </div>
            <div className="list-inline-item">
              <img src="/socials/youTube.png" alt="youTube" />
            </div>
            <div className="list-inline-item">
              <img src="/socials/insta.png" alt="instagram" />
            </div>
            <div className="list-inline-item">
              <img src="/socials/vector1.png" alt="twitter" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-2 p-2">
        <div className="footer-sub-header">useful links</div>
        <div className="footer-link pt-3">home</div>
        <div className="footer-link py-2">about us</div>
        <div className="footer-link py-2">our courses</div>
        <div className="footer-link py-2">testimonials</div>
        <div className="footer-link py-2">our community</div>
      </div>

      <div class="col-sm-2 p-2">
        <div className="footer-sub-header">community</div>
        <div className="footer-link pt-3">help centers</div>
        <div className="footer-link py-2">partners</div>
        <div className="footer-link py-2">suggestion</div>
        <div className="footer-link py-2">blog</div>
        <div className="footer-link py-2">news letter</div>
      </div>

      <div class="col-sm-4 p-2">
        <div className="footer-sub-header">subscribe us</div>
        <div className="d-flex py-3">
          <input placeholder="nft123@gmail.com" />
          <button className="input-button">Send Message</button>
        </div>
      </div>
    </div>
  </div>
);

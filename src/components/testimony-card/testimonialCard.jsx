import React from "react";

import "./testimonialCard.style.css";

export const TestimonialCard = (props) => (
  <div className="testimonial-card-container">
    <div className="container">
      <div className="testimonial-txt">{props.testimony.message}</div>
      <div className="py-3">
        <div className="d-flex justify-content-start ">
          <div>
            <img src={props.testimony.clientAvatar} alt="user" className="client-img" />
          </div>
          <div className="px-2 py-2">
            <div className="client-name">{props.testimony.clientName}</div>
            <div className="designation">{props.testimony.designation}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

import React from "react";

import { Card } from "../card/card.jsx";
import { TestimonialCard } from "../testimony-card/testimonialCard.jsx";

import "./card-list.styles.css";

export const CardList = (props) => (
  <div className="card-list-container">
    <div className="container">
      <div className="card-list-header">browse our popular courses</div>
      <div className="card-list-sub-header py-2">
        high-definition video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </div>

      <div className="link-list-container d-flex justify-content-center py-3">
        <a href="gotosomewhere" className="col-3 active link-list">
          All Categories
        </a>
        <a href="gotosomewhere" className="col-3 link-list">
          Design
        </a>
        <a href="gotosomewhere" className="col-3 link-list">
          Development
        </a>
        <a href="gotosomewhere" className="col-3 link-list">
          Marketing
        </a>
      </div>

      {/*Card Component Display starts */}
      <div className="card-list">
        {props.courses.map((course) => (
          <Card key={course.courseId} course={course} />
        ))}
      </div>
      {/*Card Component Display ends */}

      <div className="btn-container d-flex justify-content-center py-3">
        <button className="btn btn-card-list ">View Courses</button>
      </div>

      <div className="d-flex justify-content-center py-3">
        <div>
          <div className="card-list-header ">what our clients are saying</div>
          <div className="card-list-sub-header py-2">
            high-definition video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </div>

          {/*TestimonialCard Component Display Starts  */}

          <div className="card-list-testimonial">
            {props.testimonies.map((testimony) => (
              <TestimonialCard
                key={testimony.testimonyId}
                testimony={testimony}
              />
            ))}
          </div>
          {/*TestimonialCard Component Display ends  */}
        </div>
      </div>
    </div>
  </div>
);

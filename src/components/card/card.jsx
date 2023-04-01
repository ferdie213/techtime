import React from "react";

import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    <div className="">
      <img
        src={props.course.courseAvatar}
        alt="course avatar"
        className="img-style"
      />
    </div>
    <div className="row category-container justify-content-between">
      <div className="col-4 category">
        <div className="category-txt">{props.course.category}</div>
      </div>
      <div className="col-4">
        <div className="category-txt-small">
          4.7k
          <img src="/cards/grade.png" alt="star" className="star-style" />
          (32.7k+)
        </div>
      </div>
    </div>
    <div className="card-header">{props.course.courseTitle}</div>
    <div className="d-flex justify-content-between ">
      <div className="">
        <div className="schedule-txt">
          <img src="/cards/schedule.png" alt="duration" className="clock-style" />
          {props.course.duration}
        </div>
      </div>
      <div className="">
        <div className="schedule-txt">
          <img src="/cards/menu_book.png" alt="lectures" className="clock-style" />
          {props.course.lessonNo}
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-between py-4">
      <div className="">
        <div className="username">
          <img src={props.course.tutorAvatar} alt="user" className="username-avatar" />
          {props.course.tutor}
        </div>
      </div>
      <div className="">
        <div className="amount">{props.course.amount}</div>
      </div>
    </div>
  </div>
);

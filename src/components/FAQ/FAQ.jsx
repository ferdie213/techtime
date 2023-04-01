import React from "react";

import "./faq.style.css";

export const FAQ = (props) => (
  <div className="faq-container py-2">
    <div className="d-flex justify-content-center pt-4">
      <div className="faq-header">frequently asked questions</div>
    </div>

    <div className="d-flex justify-content-center py-2">
      <div className="faq-sub-header">
        high-definition video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </div>
    </div>

    <div className="pt-5">
      <div className="d-flex justify-content-center py-2">
        <div
          className="d-flex justify-content-between"
          style={{ width: "70%" }}
        >
          <div className="faq-sub-title">is there a free trial available?</div>
          <div className="faq-sub-title-closed"> - </div>
        </div>
      </div>
      <div className="faq-content py-3">
        high-definition video is video of higher resolution and quality than
        standard definition. high-definition video is video of higher resolution
        and quality than standard definition. build your future with our quality
        education. the best and largest all-in-one online tutoring platform in
        the world definition.
      </div>
    </div>

    <div className="d-flex justify-content-center py-2">
      <div className="d-flex justify-content-between faq-closed">
        <div className="faq-sub-title-closed py-3">
          can i change my plan later?
        </div>
        <div className="faq-sub-title-closed py-3"> + </div>
      </div>
    </div>

    <div className="d-flex justify-content-center py-2">
      <div className="d-flex justify-content-between faq-closed">
        <div className="faq-sub-title-closed py-3">
        are the courses lifetime?
        </div>
        <div className="faq-sub-title-closed py-3"> + </div>
      </div>
    </div>

    <div className="d-flex justify-content-center py-2">
      <div className="d-flex justify-content-between faq-closed">
        <div className="faq-sub-title-closed py-3">
        do i get certified after taking courses?
        </div>
        <div className="faq-sub-title-closed py-3"> + </div>
      </div>
    </div>

    <div className="d-flex justify-content-center py-2">
      <div className="d-flex justify-content-between faq-closed">
        <div className="faq-sub-title-closed py-3">
        how do i reach out to mentors?
        </div>
        <div className="faq-sub-title-closed py-3"> + </div>
      </div>
    </div>

    <div className="d-flex justify-content-center py-2">
      <div className="d-flex justify-content-between faq-closed">
        <div className="faq-sub-title-closed py-3">
        do we get job ready after taking courses?
        </div>
        <div className="faq-sub-title-closed py-3"> + </div>
      </div>
    </div>
  </div>
);

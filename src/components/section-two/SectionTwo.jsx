import React from "react";

import "./sectionTwo.styles.css";

export const SectionTwo = (props) => (
  <div className="section-two-container">
    <div className="container">
      <div className="row">
        {/* first column */}
        <div className="col-sm-6 img-bg">
          <div className="">
            <h2 className="section-two-h2">
              high quality video, audio & live classes
            </h2>
            <p className="section-two-p">
              high-definition video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>
          <div className="m-4">
            <button className="btn btn-section-two">View Courses</button>
          </div>

          <div className=" ">
            <div className="flex-class m-4">
              <div className="d-flex section-two-box">
                <div className="small-box">
                  <img
                    src="/sectionTwo/volume_up.png"
                    alt="Audio"
                    className="tiny-img"
                  />
                </div>
                <div className="">
                  <p className="small-box-txt">audio classes</p>
                </div>
              </div>
              <div className="d-flex section-two-box">
                <div className="small-box">
                  <img
                    src="/sectionTwo/settings_input_antenna.png"
                    alt="Antenna"
                    className="tiny-img"
                  />
                </div>
                <div>
                  <p className="small-box-txt">live classes</p>
                </div>
              </div>
            </div>
            <div className="flex-class m-4">
              <div className="d-flex section-two-box">
                <div className="small-box">
                  <img
                    src="/sectionTwo/autoplay.png"
                    alt="Recordings"
                    className="tiny-img"
                  />
                </div>
                <div className="">
                  <p className="small-box-txt">recorded classes</p>
                </div>
              </div>
              <div className="d-flex section-two-box">
                <div className="small-box">
                  <img
                    src="/sectionTwo/description.png"
                    alt="Notes"
                    className="tiny-img"
                  />
                </div>
                <div className="">
                  <p className="small-box-txt">50+ notes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="col-sm-4 section-two-margin-left py-5">
          <div>
            <div className="position-relative">
              <img
                src="/sectionTwo/unsplash_4-EeTnaC1S4.png"
                alt="Man working"
                className="sec-two-big-img"
              />

              <div className="position-absolute top-100 start-0 translate-middle">
                <img
                  src="/sectionTwo/unsplash_VtKoSy_XzNU.png"
                  alt="Woman working"
                  className="sec-two-small-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row section-two-flex">
      <div className="col-sm-6">
        <div>
          <div className="section-two-h2">
            this is why we are best from others
          </div>
        </div>
        <div>
          <div className="section-two-p">
            high-definition video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </div>
        </div>
        <div className="p-4">
          <img
            src="/sectionTwo/unsplash_6MePtA9EVDA.png"
            alt="girl"
            className="girl-img"
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="flex-class">
          <div className="p-3 section-two-big-box">
            <div
              className="color-box"
              style={{ backgroundColor: "#4C7FBD" }}
            ></div>
            <div className="section-two-h3 py-2">experienced mentors</div>
            <div className="section-two-p-2">
              high-definition video is video of higher resolution and quality
              than standard definition. high-definition video is video of higher
              resolution and quality than standard definition.
            </div>
          </div>
          <div className="p-3 section-two-big-box">
            <div
              className="color-box"
              style={{
                backgroundColor: "#AECD5E",
              }}
            ></div>
            <div className="section-two-h3 py-2">one-on-one meetings</div>
            <div className="section-two-p-2">
              high-definition video is video of higher resolution and quality
              than standard definition. high-definition video is video of higher
              resolution and quality than standard definition.
            </div>
          </div>
        </div>
        <div className="flex-class py-3">
          <div className="p-3 section-two-big-box">
            <div
              className="color-box"
              style={{ backgroundColor: "#ED6BA6" }}
            ></div>
            <div className="section-two-h3 py-2">one-on-one meetings</div>
            <div className="section-two-p-2">
              high-definition video is video of higher resolution and quality
              than standard definition. high-definition video is video of higher
              resolution and quality than standard definition.
            </div>
          </div>
          <div className="p-3 section-two-big-box">
            <div
              className="color-box"
              style={{ backgroundColor: "#EA6B45" }}
            ></div>
            <div className="section-two-h3 py-2">affordable prices</div>
            <div className="section-two-p-2">
              high-definition video is video of higher resolution and quality
              than standard definition. high-definition video is video of higher
              resolution and quality than standard definition.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

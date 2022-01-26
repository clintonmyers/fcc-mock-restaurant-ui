import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Landing.scss";
// Line 3 is necessary for the Carousel to work
const SlideShow = () => (
  <div>
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showIndicators={false}
      swipeable
      showThumbs={false}
      showStatus={false}
    >
      <div className="slide-container">
        <img
          className="slideImg"
          src="https://cdn.pixabay.com/photo/2016/11/18/15/53/breakfast-1835478_960_720.jpg"
          alt="picture of food 1"
        />
      </div>
      <div className="slide-container">
        <img
          className="slideImg"
          src="https://cdn.pixabay.com/photo/2019/10/05/09/57/english-breakfast-4527527_960_720.jpg"
          alt="picture of food 2"
        />
      </div>
      <div className="slide-container">
        <img
          className="slideImg"
          src="https://cdn.pixabay.com/photo/2017/02/10/00/13/english-breakfast-2053889_960_720.jpg"
          alt="picture of food 3"
        />
      </div>
      <div className="slide-container">
        <img
          className="slideImg"
          src="https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg"
          alt="picture of food 4"
        />
      </div>
    </Carousel>
  </div>
);

export default SlideShow;

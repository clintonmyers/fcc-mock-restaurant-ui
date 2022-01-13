import React from "react";
import { Carousel } from "react-responsive-carousel";

const Testimony = () => {
  return (
    <div className="testimony-container">
      <Carousel
        autoPlay
        infiniteLoop
        swipeable
        showThumbs={false}
        interval={7000}
      >
        <div className="myTestimony">
          <p>
            "I stumbled upon this gem in our quest for brunch near our Vrbo"
          </p>
          <p>- Sam I. Am</p>
        </div>
        <div className="myTestimony">
          <p>"Great breakfast, even better service"</p>
          <p>- Horton Hearsawho</p>
        </div>
        <div className="myTestimony">
          <p>"I said a beef hot links... and there's were fantastic!"</p>
          <p>- Mr. Lorax</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimony;

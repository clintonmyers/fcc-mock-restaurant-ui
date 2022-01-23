import React from "react";
import "./Landing.scss";
import Slideshow from "./Slideshow";
import { Link } from "react-router-dom";
import Testimony from "./Testimony";

const Home = () => {
  return (
    <div className="landing-container">
      <div className="container" id="header"></div>
      {/* ^this div space left for the header when the user is scrolled to the top^ */}
      <div className="container" id="image1-container">
        <img
          id="landingBfast-img"
          src="https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=20&m=533645537&s=612x612&w=0&h=KJXCpAo9XQvMI_djcnRMSsz_Y7OGS6z3-8VThxWyR0Q="
          alt="Breakfast Plate"
        />
      </div>
      <div className="container" id="order-container">
        <h2>
          Order Your <b id="breakfast-font">BREAKFAST </b>Online Now
        </h2>
        <img
          id="car-img"
          src="https://images.vexels.com/media/users/3/155413/isolated/preview/02fa4279f1759a65b62bafe7caf5be32-suv-car-front-view-silhouette.png"
          alt="Car Pickup Logo"
        />
        <p>
          <b>
            <em>For delivery or pickup!</em>
          </b>
        </p>
        <Link to="/order">
          <button type="button" id="orderBtn">
            Order
          </button>
        </Link>
      </div>
      <div className="container" id="divider"></div>
      <div className="container" id="slideshow-container">
        <Slideshow />
      </div>
      <div className="container" id="foodStory-container">
        <h1>Our food story</h1>
        <p>
          Starting out as a small local shop in Dallas, our family owned and
          operated restaurant has grown into a statewide favorite. Our chef's
          carefully craft a comfy collection of culinary chow that help melt all
          of your troubles away!
        </p>
      </div>
      <div className="container" id="image2-container">
        <img
          id="landingBfast-img"
          src="https://cdn.pixabay.com/photo/2020/01/29/04/48/food-4801581_960_720.jpg"
          alt="brunch table"
        />
      </div>
      <div className="container" id="testimony-container">
        <Testimony />
      </div>
      <div className="container" id="tuesday-container">
        <p>Ask about our Tuesday Special!</p>
      </div>
    </div>
  );
};

export default Home;

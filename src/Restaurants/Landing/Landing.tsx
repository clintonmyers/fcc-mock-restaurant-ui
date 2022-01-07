import React from "react";
<<<<<<< HEAD:src/Landing Page/Home.js
import { Header } from "../components/Header";
import "./home.css";
import Slideshow from "./Slideshow";
=======
import "./Landing.css";
>>>>>>> development:src/Restaurants/Landing/Landing.tsx

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="breakfastImg-container">
        <img
          id="homeBfast-img"
          src="https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=20&m=533645537&s=612x612&w=0&h=KJXCpAo9XQvMI_djcnRMSsz_Y7OGS6z3-8VThxWyR0Q="
          alt="Breakfast Plate"
        ></img>
<<<<<<< HEAD:src/Landing Page/Home.js
      </div>
      <div className="order-container">
        <h2>
          Order Your <b id="breakfast-font">BREAKFAST </b>Online Now
        </h2>
        <img
          id="car-img"
          src="https://images.vexels.com/media/users/3/155413/isolated/preview/02fa4279f1759a65b62bafe7caf5be32-suv-car-front-view-silhouette.png"
          alt="Car Pickup Logo"
        ></img>
        <p>
          <b>
            <em>for delivery or pickup!</em>
          </b>
        </p>
        <a href="" target="_blank" id="placeOrder">
          <b>Place your order</b>
        </a>
      </div>
      <div className="divider" id="dividerTwo"></div>
      <div className="slideshow-container">
        <Slideshow />
      </div>
      <div className="story-container">
        <h1>Our food story</h1>
        <p>
          Our breakfista's carefully craft a comfy collection of breakfast and
          lunch delectibles that help melt all of your troubles away!
        </p>
=======
        <div className="order-container">
          <h2>
            Order Your <b id="breakfast-font">BREAKFAST </b>Online Now
          </h2>
          <img
            id="car-img"
            src="https://images.vexels.com/media/users/3/155413/isolated/preview/02fa4279f1759a65b62bafe7caf5be32-suv-car-front-view-silhouette.png"
            alt="Car Pickup Logo"
          ></img>
          <p>
            <b>
              <em>For Pickup Only!</em>
            </b>
          </p>
        </div>
>>>>>>> development:src/Restaurants/Landing/Landing.tsx
      </div>
    </div>
  );
};

export default Home;

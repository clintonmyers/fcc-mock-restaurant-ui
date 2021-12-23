import React, { useState } from "react";
import { Header } from "../components/Header";
import Style from "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="breakfastImg-container">
        <img
          id="homeBfast-img"
          src="https://media.istockphoto.com/photos/breakfast-with-bacon-eggs-pancakes-and-toast-picture-id533645537?k=20&m=533645537&s=612x612&w=0&h=KJXCpAo9XQvMI_djcnRMSsz_Y7OGS6z3-8VThxWyR0Q="
          alt="Breakfast Plate"
        ></img>
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
        </div>
      </div>
    </div>
  );
};

export default Home;

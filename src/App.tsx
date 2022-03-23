import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { useApiGet, TApiResponse } from "./hooks/useApiHook";
import Home from "./Restaurants/Landing/Landing";
import Restaurants from "./Restaurants/Restaurants";
import Menus from "./Restaurants/Menus/Menus";
import Order from "./Restaurants/Order/Order";
import Admin from "./Admin/Admin";
import Login from "./Login/Login";

function App() {
  // call to the hook
  // const data: TApiResponse = useApiGet(
  //   "https://fcc-mock-restaurant-backend.herokuapp.com/api/testimonials"
  // );

  // print the output
  // if (!data.loading) console.log(data);

  return (
    <Router basename="/fcc-mock-restaurant-ui">
      <Routes>
        <Route path="/" element={<Restaurants />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/order" element={<Order />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

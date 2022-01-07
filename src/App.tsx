import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useApiGet, TApiResponse } from "./hooks/useApiHook";
import Home from "./Landing Page/Home";
import Restaurants from "./Restaurants/Restaurants";
import Menu from "./Restaurants/Menu/Menu";
import Order from "./Restaurants/Order/Order";

function App() {
  // call to the hook
  const data: TApiResponse = useApiGet(
    "https://fcc-mock-restaurant-backend.herokuapp.com/api/testimonials"
  );

  // print the output
  if (!data.loading) console.log(data);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Restaurants />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
        </Route>
        <Route path="/admin" element="ADMIN" />
      </Routes>
    </Router>
  );
}

export default App;

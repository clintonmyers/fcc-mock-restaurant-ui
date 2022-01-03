//import logo from "./logo.svg"; i dont think we need this?
import React from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { useApiGet, TApiResponse } from "./hooks/useApiHook";
import Home from "./Landing Page/Home";

function App() {
  // call to the hook
  const data: TApiResponse = useApiGet(
    "https://fcc-mock-restaurant-backend.herokuapp.com/api/testimonials"
  );

  // print the output
  if (!data.loading) console.log(data);

  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
}

export default App;

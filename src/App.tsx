//import logo from "./logo.svg"; i dont think we need this?
import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { useApiGet, TApiResponse } from "./hooks/useApiHook";

function App() {
  // call to the hook
  const data: TApiResponse = useApiGet(
    "https://fcc-mock-restaurant-backend.herokuapp.com/api/testimonials"
  );

  // print the output
  if (!data.loading) console.log(data);

  return (
    <div className="App">
      <p>Testing</p>

      <Header />
    </div>
  );
}

export default App;

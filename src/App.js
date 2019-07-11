import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./tabs/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="spacer" />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

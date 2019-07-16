import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./tabs/Home";
import Reviews from "./tabs/Reviews";
import Gallery from "./tabs/Gallery";
import Inventory from "./tabs/Inventory";
import Quotes from "./tabs/Quotes";

function App() {
  const [openTab, setOpenTab] = useState("home");
  useEffect(() => console.log(openTab), [openTab]);
  return (
    <div className="App">
      <NavBar setOpenTab={setOpenTab} />
      <div className="spacer1" />
      {openTab === "home" ? <Home /> : null}
      {openTab === "review" ? <Reviews /> : null}
      {openTab === "gallery" ? <Gallery /> : null}
      {openTab === "inventory" ? <Inventory /> : null}
      {openTab === "quote" ? <Quotes /> : null}
      <Footer />
    </div>
  );
}

export default App;

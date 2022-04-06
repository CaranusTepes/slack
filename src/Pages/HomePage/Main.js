import React from "react";
import "./main.css";
import Home from "./Home";
import Sidebar from "./Sidebar"

function Main() {
  return (
    <div className="mainPage">
      <Sidebar />
      <Home />
    </div>
  );
}

export default Main;

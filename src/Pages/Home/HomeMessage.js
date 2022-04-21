import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./home.css";
import Messages from "./Message/Messages";

const Home = () => {
  return (
    <main className="moveBox">
      <div className="homeSideBar">
        <Sidebar />
      </div>
      <div className="homeMessage">
        <Messages />
      </div>
    </main>
  );
};

export default Home;

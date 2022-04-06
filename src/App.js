import React from "react";
import "./App.css";
import Header from "./Pages/Header/Header";
import Sidebar from "./Pages/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;

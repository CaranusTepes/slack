import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Data from "./Data";
import Login from "./Pages/Login/Login"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Data />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

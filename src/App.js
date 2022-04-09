import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Data from "./Data";
import FullLogin from "./Pages/Login/FullLogin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Data />} />
          <Route path="/login" element={<FullLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

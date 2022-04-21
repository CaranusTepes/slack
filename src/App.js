import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLogin from "./Pages/Login/AppLogin";
import AppRegister from "./Pages/Login/AppRegister";
import Home from "./Pages/Home/Home";
import HomeMessage from "./Pages/Home/HomeMessage";
import Error from "./Error/Error";
import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState("");
  const [userHeaders, setUserHeaders] = useState("");

  // Function to set user & header data to child components
  const handleUserData = (data) => {
    console.log(data);
    setUserData(data);
  };

  const handleUserHeaders = (data) => {
    console.log(data);
    setUserHeaders(data);
  };

  // Updated to include dependency on authenticated, userData, userHeaders
  useEffect(() => {
    let headers = sessionStorage.getItem("userLoggedInDetails");
    headers && JSON.parse(headers)
      ? setAuthenticated(true)
      : setAuthenticated(false);
  }, [authenticated, userData, userHeaders]);

  return (
    <Router>
      <Routes>
        {!authenticated && (
          <>
            <Route
              path="/"
              element={
                <AppLogin
                  authenticate={() => setAuthenticated(true)}
                  handleUserData={handleUserData}
                  handleUserHeaders={handleUserHeaders}
                />
              }
            />
            <Route path="/register" element={<AppRegister />} />
          </>
        )}

        {authenticated && (
          <>
            <Route path="/" element={<Home />}>
              <Route path=":uid/" element={<Home />} />
              <Route path=":uid/new-message/" element={<Home />} />
              <Route path=":uid/new-message/:id" element={<Home />} />
              <Route path=":uid/messages/:id" element={<HomeMessage />} />
              {/* <Route path=":uid/channels/:channelId" element={<Channel />} />
              <Route path=":uid/channels/:id" element={<Channel />} /> */}
            </Route>
          </>
        )}
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

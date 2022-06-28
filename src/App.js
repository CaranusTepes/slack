import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Home from "./Pages/Home/Home";
import Error from "./Error/Error";
import Loading from "./Error/Loading";
import "./App.css";
import NewMessage from "./Pages/Home/Message/NewMessage";
import Messages from "./Pages/Home/Message/Messages";
import Channel from "./Pages/Home/Channel/Channel";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState("");
  const [userHeaders, setUserHeaders] = useState("");

  const handleUserData = (data) => {
    setUserData(data);
  };

  const handleUserHeaders = (data) => {
    setUserHeaders(data);
  };

  useEffect(() => {
    let headers = sessionStorage.getItem("userLoggedInDetails");
    headers && JSON.parse(headers) ? setAuthenticated(true) : setAuthenticated(false);
  }, [authenticated, userData, userHeaders]);

  return (
    <Router>
      <Routes>
        {!authenticated && (
          <>
            <Route
              path="/"
              element={
                <Login
                  authenticate={() => setAuthenticated(true)}
                  handleUserData={handleUserData}
                  handleUserHeaders={handleUserHeaders}
                />
              }
            />
            <Route path="/register" element={<Register />} />
          </>
        )}

        {authenticated && (
          <>
            <Route path="/" element={<Home />}>
              <Route path=":uid/" element={<NewMessage />} />
              <Route path=":uid/new-message" element={<NewMessage />} />
              <Route path=":uid/new-message/:id" element={<NewMessage />} />
              <Route path=":uid/messages/:id" element={<Messages />} />
              <Route path=":uid/channels/:channelId" element={<Channel />} />
              <Route path=":uid/channels/:id" element={<Channel />} />
            </Route>
          </>
        )}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Loading />} />
      </Routes>
    </Router>
  );
}

export default App;

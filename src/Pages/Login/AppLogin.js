import React, { useState } from "react";
import Login from "./Login";
import Particles from "./Particles";
import "./appLogin.css";
import logo from "../../Assets/Images/logo.png";

const AppLogin = ({ authenticate, handleUserData, handleUserHeaders }) => {
  const [authenticated, setAuthenticated] = useState(false);
  
  return (
    <div className="loginLanding">
      <Particles className="particles" />
      <img src={logo} alt="Logo" className="slackLogo" />
      <Login
        className="auth"
        authenticate={() => setAuthenticated(true)}
        handleUserData={handleUserData}
        handleUserHeaders={handleUserHeaders}
      />
    </div>
  );
};

export default AppLogin;

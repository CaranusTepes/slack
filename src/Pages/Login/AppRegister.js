import React from "react";
import Register from "./Register";
import Particles from "./Particles";
import logo from "../../Assets/Images/logo.png";
import "./appLogin.css";

const AppRegister = () => {
  return (
    <div className="loginLanding">
      <Particles className="particles" />
      <img src={logo} alt="Logo" className="slackLogo" />
      <Register className="auth" />
    </div>
  );
};

export default AppRegister;

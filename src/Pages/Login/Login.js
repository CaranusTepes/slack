import React, { useState } from "react";
import { userLogin } from "../../api/api-auth";
import { useNavigate, useParams } from "react-router-dom";
import "./login.css";

const Login = ({ authenticate, handleUserData, handleUserHeaders }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  let navigate = useNavigate();
  let { uid } = useParams();

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const loginUser = (e) => {
    e.preventDefault();
    const userDetails = { email, password };
    
    userLogin(userDetails)
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem(
            "userLoggedInDetails",
            JSON.stringify(response.headers)
          );
          uid = response.data.data.id;
          console.log("login uid", uid);
          setHasError(false);
          reset();
          authenticate();
          navigate(`/${uid}`);
        } else {
          setHasError(true);
        }
      })
      .catch((error) => {
        setHasError(true);
      });
  };

  const handleLoginEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleLoginPwInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClickSubmit = (e) => {
    loginUser(e);
  };

  const register = () =>{ 
    let path = "/register"; 
    navigate(path);
  }

  return (
    <body>
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Welcome Back</h2>
            <h4 className="animation a2">
              Log in to your account using email and password
            </h4>
          </div>
          <form className="form" onSubmit="{handleLoginSubmit}">
            <input
              type="email"
              className="form-field animation a3"
              placeholder="Email Address"
              onChange={handleLoginEmailInput}
              required
            />
            <input
              type="password"
              className="form-field animation a4"
              placeholder="Password"
              onChange={handleLoginPwInput}
              required
            />
            {hasError && (
              <h5 className="warning-red">
                Review the information you have submitted and try again.
              </h5>
            )}
            <button className="buttons animation a5" onClick={handleLoginClickSubmit}>
              LOGIN
            </button>
            <button className="buttons animation a6" onClick={register}>
              REGISTER
            </button>
          </form>
        </div>
        <div className="right"></div>
      </div>
    </body>
  );
};

export default Login;

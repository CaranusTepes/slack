import React from "react";
import "./header.css";
import { BiTime, BiHelpCircle } from "react-icons/bi";
import Ra from "../../Assets/Images/Ra.png";


const Header = () => {
  return (
    <div className="header">
      <BiTime className="icons"/>
      <form action="/" method="get">
        <label htmlFor="search">
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search Slack"
        />
      </form>
      <BiHelpCircle className="icons"/>
      <img className=""src={Ra} alt="Profile" />
    </div>
  );
};

export default Header;
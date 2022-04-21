import React from "react";
import slackBot from "../../../Assets/Images/slackBot.png";
import { FiChevronDown } from "react-icons/fi";
import "./messagesHeader.css";

const MessagesHeader = ({ messageGroupName }) => {
  return (
    <div className="messagesHeader">
      <img src={slackBot} className="profile"/>
      <div className="headerName">
        {messageGroupName}
        <FiChevronDown className="messageButton"/>
      </div>
    </div>
  );
};

export default MessagesHeader;

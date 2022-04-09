import React from "react";
import {
  BiAddToQueue,
  BiChevronDown,
  BiAnalyse,
  BiDotsVerticalRounded,
  BiCaretDown,
  BiPlus,
} from "react-icons/bi";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <header className="topSideBar">
        Slack
        <BiChevronDown className="downIcon" />
        <BiAddToQueue className="headerIcon" />
      </header>
      <div className="connectSlack">
        <div className="slackConnect">
          <BiAnalyse className="connectIcon" />
          Slack Connect
        </div>
        <div className="browseSlack">
          <BiDotsVerticalRounded className="connectIcon" />
          Browse Slack
        </div>
      </div>
      <div className="dropdownSlack">
        <div className="channel">
          <BiCaretDown className="connectIcon" />
          Channels
          <BiPlus className="addChannel"/>
        </div>
        <div className="directMessage">
          <BiCaretDown className="connectIcon" />
          Direct Messages
          <BiPlus className="addMessage"/>
        </div>
      </div>
        
    </div>
  );
};

export default Sidebar;

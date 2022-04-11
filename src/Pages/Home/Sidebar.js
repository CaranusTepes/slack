import React from "react";
import "./sidebar.css";
import Channel from "./Channel/Channel";
import Message from "./Message/Message";
import slackWhite from "../../Assets/Images/slackWhite.png";
import slackbot from "../../Assets/Images/slackbot.png";
import {
  RiNotification2Line,
  RiLogoutCircleLine,
  RiSettings4Line,
} from "react-icons/ri";
import {
  HiOutlineDotsVertical,
  HiSearch,
  HiStatusOnline,
} from "react-icons/hi";
import { MdEvent, MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineNumber } from "react-icons/ai";
import { FaRemoveFormat } from "react-icons/fa";
import { BiSend, BiBold, BiItalic, BiUnderline } from "react-icons/bi";

function Sidebar() {
  const channels = [
    {
      id: 1,
      value: "general",
    },
    {
      id: 2,
      value: "Avion School",
    },
    {
      id: 3,
      value: "Google",
    },
  ];

  const messages = [
    {
      id: 1,
      value: "Jao",
    },
    {
      id: 2,
      value: "John",
    },
    {
      id: 3,
      value: "God",
    },
  ];

  return (
    <div className="sidebar">
      <div className="iconBar">
        <img src={slackWhite} alt="Logo" className="whiteLogo" />
        <div className="groupBarIcons">
          <RiNotification2Line className="barIcons" />
          <RiSettings4Line className="barIcons" />
          <RiLogoutCircleLine className="barIconsLogout" />
        </div>
      </div>
      <div className="menuBar">
        <div className="menuProfile">
          <div className="menuTabOne">
            <img src={slackbot} alt="Logo" className="slackBot" />
            <div className="menuText">
              <div className="menuName"> Janssen Radh Yumang </div>
              <div className="menuPosition"> Student</div>
            </div>
          </div>
          <HiOutlineDotsVertical className="menuTabTwo" />
        </div>
        <div className="menuOptions">
          <div className="menuChoices">
            <MdOutlineAlternateEmail className="optionIcon" /> Mentions
          </div>
          <div className="menuChoices">
            <AiOutlineNumber className="optionIcon" /> Threads
          </div>
          <div className="menuChoices">
            <MdEvent className="optionIcon" /> Events
          </div>
        </div>
        <div className="menuChannels">
          <div className="aChannel">
            <Channel title="Channels" items={channels} multiSelect />
          </div>
        </div>
        <div className="menuMessages">
          <div className="aMessage">
            <Message title="Messages" items={messages} multiSelect />
          </div>
        </div>
      </div>
      <div className="page">
        <div className="pageHeader">
          <div className="menuTabOne">
            <AiOutlineNumber className="pageIcons" />
            <div>
              <div className="pageName"> general </div>
            </div>
          </div>
          <div className="pageFunctions">
            <HiSearch className="pageHeaderIcons" />
            <HiStatusOnline className="pageHeaderIcons" />
            <HiOutlineDotsVertical className="pageHeaderIcons" />
          </div>
        </div>
        <div className="pageBody">Body</div>
        <div className="pageFooter">
          <div className="pageFooterInput">
            <input
              type="text"
              placeholder="Write a message..."
              className="textInput"
              contenteditable
            />
            <div>
              <BiBold className="pageFooterIcons" />
              <BiItalic className="pageFooterIcons" />
              <BiUnderline className="pageFooterIcons" />
              <FaRemoveFormat className="pageFooterIcons" />
            </div>
          </div>
          <BiSend className="pageFooterIcon" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

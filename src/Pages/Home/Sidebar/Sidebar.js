import React, { useEffect, useState } from "react";
import slackWhite from "../../../Assets/Images/slackWhite.png";
import slackBot from "../../../Assets/Images/slackBot.png";
import {
  RiNotification2Line,
  RiLogoutCircleLine,
  RiSettings4Line,
} from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";
import {
  MdEvent,
  MdOutlineAlternateEmail,
  MdOutlineArrowDropUp,
  MdOutlineArrowDropDown,
} from "react-icons/md";
import { AiOutlineNumber, AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams, NavLink, Link } from "react-router-dom";
import "./sidebar.css";
import ChannelList from "../Channel/ChannelList";
import DirectMessage from "../Message/DirectMessage";

function Sidebar({
  handleOpenNewChannel,
  channels,
  headers,
  handleToggleRender,
}) {
  let navigate = useNavigate();
  let { uid } = useParams();
  const signOut = () => {
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const newMessage = () => {
    navigate(`/${uid}/new-message`);
    window.location.reload();
  };

  const [showChannelList, setShowChannelList] = useState(true);
  const [showRecentDmList, setShowRecentDmList] = useState(true);

  useEffect(() => {}, [handleToggleRender]);
  const displayChannels = channels
    ? channels.map((channel, index) => {
        return (
          <NavLink to={`${uid}/channels/${channel.id}`} key={index}>
            <ChannelList index={index} name={channel.name} key={index} />
          </NavLink>
        );
      })
    : null;

  return (
    <div className="sidebar">
      <div className="iconBar">
        <img src={slackWhite} alt="Logo" className="whiteLogo" />
        <div className="groupBarIcons">
          <RiNotification2Line className="barIcons" />
          <RiSettings4Line className="barIcons" />
          <div>
            <RiLogoutCircleLine className="barIconsLogout" onClick={signOut} />
            <Link to="/register"></Link>
          </div>
        </div>
      </div>
      <div className="menuBar">
        <div className="menuProfile">
          <div className="menuTabOne">
            <img src={slackBot} alt="Logo" className="slackBot" />
            <div className="menuText">
              <div className="menuName"> user1@gmail.com </div>
              <div className="menuPosition"> Student</div>
            </div>
          </div>
          <HiOutlineSearch className="menuTabTwo" />
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
          <div className="sidebarMenu">
            <div className="channels-dropdown">
              <div className="channels-dropdown-header">
                {showChannelList ? (
                  <MdOutlineArrowDropDown
                    onClick={() => setShowChannelList(!showChannelList)}
                  />
                ) : (
                  <MdOutlineArrowDropUp
                    onClick={() => setShowChannelList(!showChannelList)}
                  />
                )}
                <span onClick={() => setShowChannelList(!showChannelList)}>
                  Channels
                </span>
                <div className="sidebar-add-icon">
                  <AiOutlinePlus
                    onClick={handleOpenNewChannel}
                    title="channel-add-btn"
                    className="optionIconTwo"
                  />
                </div>
              </div>
              {showChannelList ? (
                <div className="channels">{displayChannels}</div>
              ) : null}
            </div>
            <div className="direct-messages-dropdown">
              <div className="direct-messages-dropdown-header">
                {showRecentDmList ? (
                  <MdOutlineArrowDropDown
                    onClick={() => setShowRecentDmList(!showRecentDmList)}
                  />
                ) : (
                  <MdOutlineArrowDropUp
                    onClick={() => setShowRecentDmList(!showRecentDmList)}
                  />
                )}
                <span onClick={() => setShowRecentDmList(!showRecentDmList)}>
                  Direct Messages
                </span>
                <div className="sidebar-add-icon">
                  <AiOutlinePlus
                    onClick={newMessage}
                    className="optionIconTwo"
                  />
                </div>
              </div>
              {showRecentDmList ? <DirectMessage loginData={headers} /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

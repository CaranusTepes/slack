import React from "react";
import {
  BiBarChart,
  BiChevronDown,
  BiUnite,
  BiPlus,
  BiSend,
  BiBold,
  BiItalic,
  BiUnderline,
} from "react-icons/bi";
import "./home.css";

const Home = () => {
  return (
    <main className="mainPage">
      <div className="subPage">
        <headers className="headerBar">
          <header className="topMainBar">
            <div className="topHolder">
              <BiUnite className="channelIcon" />
              Avion School
              <BiChevronDown className="downIcon" />
            </div>
            <div className="rightHolder">
              <BiBarChart className="peopleIcon" /> 38
            </div>
          </header>
          <subheader className="subMainBar">
            <BiPlus className="connectIcon" />
            Add Bookmark
          </subheader>
        </headers>
        <div>
          <div className="contentBox">Content</div>
        </div>
        <message className="messageBox">
          <div className="inputBox">
            <div className="inputStyles">
              <div>
                <BiBold className="textEditor" />
                <BiItalic className="textEditor" />
                <BiUnderline className="textEditor" />
              </div>
              <BiSend className="sendButton" />
            </div>
            <input type="text" name="name" className="textBox" />
          </div>
        </message>
      </div>
    </main>
  );
};

export default Home;

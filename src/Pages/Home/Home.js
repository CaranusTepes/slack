import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./home.css";
import NewMessage from "./Message/NewMessage";
import { channelsGet } from "../../api/api-channels";

const Home = () => {
  const [handleRender, setHandleRender] = useState(false);
  const [channels, setChannels] = useState("");
  const [channelIds, setChannelIds] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleToggleRender = () => {
    setHandleRender(!handleRender);
  };

  useEffect(() => {
    // Set user headers after login
    let userDetails = JSON.parse(sessionStorage.getItem("userLoggedInDetails"));

    const headers = {
      token: userDetails["access-token"],
      client: userDetails.client,
      expiry: userDetails.expiry,
      uid: userDetails.uid,
    };

    // Get all channels and channel Ids
    channelsGet(headers)
      .then((response) => {
        let channelObj = response.data.data;
        setChannels(channelObj);
        return channelObj;
      })
      .then((channelObj) => {
        let channelIdsArray = channelObj.map((array) => array.id);
        setChannelIds(channelIdsArray);
      })
      .catch((err) => console.log(err));
  }, [handleRender]);

  return (
    <main className="moveBox">
      <div className="homeSideBar">
        <Sidebar channels={channels} handleToggleRender={handleToggleRender} />
      </div>
      <div className="homeNewMessage">
        <NewMessage />
      </div>
    </main>
  );
};

export default Home;

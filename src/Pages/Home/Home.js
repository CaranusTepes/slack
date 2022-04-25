import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import { channelsGet, channelCreate } from "../../api/api-channels";
import "./home.css";
import Modals from "./Channel/Modals";
import NewChannel from "./Channel/NewChannel"

const Home = () => {
  const [isNewChannelModalOpen, setNewChannelModalOpen] = useState(false);
  const [handleRender, setHandleRender] = useState(false);
  const [channels, setChannels] = useState("");
  const [channelIds, setChannelIds] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleOpenNewChannel = () => {
    setNewChannelModalOpen(true);
  };

  const handleCloseNewChannel = () => {
    setNewChannelModalOpen(false);
  };

  const newChannel = (e) => {
    e.preventDefault();

    let userDetails = JSON.parse(sessionStorage.getItem("userLoggedInDetails"));

    let user_ids = [userDetails.uid];

    const newChannelDetails = {
      name,
      user_ids,
    };

    channelCreate(newChannelDetails)
      .then((response) => {
        console.log(response);
        if (response.data.errors != null) {
          console.log(response.config.data);
          return response;
        }
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
    reset();
    window.location.reload();
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionInput = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    newChannel(e);
  };

  const handleClick = (e) => {
    newChannel(e);
  };

  const handleToggleRender = () => {
    setHandleRender(!handleRender);
  };

  const reset = () => {
    setNewChannelModalOpen(false);
    setName("");
    setDescription("");
  };

  useEffect(() => {
    let userDetails = JSON.parse(sessionStorage.getItem("userLoggedInDetails"));

    const headers = {
      token: userDetails["access-token"],
      client: userDetails.client,
      expiry: userDetails.expiry,
      uid: userDetails.uid,
    };

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
    <main className="main-container">
      <Sidebar
        handleOpenNewChannel={handleOpenNewChannel}
        channels={channels}
        handleToggleRender={handleToggleRender}
      />
      <Outlet />

      {isNewChannelModalOpen && (
        <Modals
          title='AddChannelModal'
          modalTitle={'Create a channel'}
          modalSubtitle={`Channels are where your team communicates. They're best when organized around a topic -- #marketing, for example.`}
          handleClose={handleCloseNewChannel}
        >
          <NewChannel
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            handleNameInput={handleNameInput}
            handleDescriptionInput={handleDescriptionInput}
            name={name}
            description={description}
          />
        </Modals>
      )}
    </main>
  );
};

export default Home;

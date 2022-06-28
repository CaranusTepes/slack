import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  channelsGet,
  channelDetailsGet,
  channelAddMember,
} from "../../../api/api-channels";
import { getAllUsers } from "../../../api/api-users";
import { gettingUser } from "../Message/gettingUser";
import { FindMembers } from "./ChannelSearchBars";
import ChannelHeader from "./ChannelHeader";
import Messages from "../Message/Messages";
import Modals from "./Modals";
import Buttons from "./Buttons";
import slackBot from "../../../Assets/Images/slackBot.png";
import { BsFillPersonPlusFill } from "react-icons/bs";
import "./channel.css";

function Channel({}) {
  let { channelId } = useParams();
  const [channels, setChannels] = useState();
  const [channelid, setchannelid] = useState("");
  const [channelName, setChannelName] = useState();
  const [isAddMembersModalOpen, setAddMembersModalOpen] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [currentMembers, setCurrentMembers] = useState([]);
  const [memberIds, setMemberIds] = useState([]);
  const [addedUsers, setAddedUsers] = useState([]);

  //function to identify channel name
  const getChannelName = (arr, id) => {
    let filteredArr = arr.filter((arr) => arr.id === id);
    let channelname = filteredArr[0].name;
    setChannelName(channelname);
  };

  //function to get current member ids
  const getCurrMemberIds = (arr) => {
    let ids = arr.map((member) => member.user_id);
    setMemberIds(ids);
    return ids;
  };

  //function to add members
  const addMember = (e) => {
    let id = parseInt(channelId);
    let member_id = parseInt(e.target.id);
    channelAddMember({ id, member_id });
    setAddModalOpen(false);
    setAddMembersModalOpen(false);
    window.location.reload();
  };

  //function to display current members upon modal open
  let members;
  let currList = [];

  const dispMembers = () => {
    members = memberIds;
    members.map((member) => {
      let memberObj = gettingUser(member);
      memberObj
        .then((obj) => {
          currList.push(obj);
          return currList;
        })
        .then((currList) => {
          if (currList.length === memberIds.length) {
            setCurrentMembers(currList);
            console.log(currList);
            console.log(currentMembers);
            return;
          }
        })
        .catch((err) => console.log(err));
    });
  };


  const handleOpenAddMembers = () => {
    setAddMembersModalOpen(true);
    dispMembers();
  };

  const handleCloseAddMembers = () => {
    setAddMembersModalOpen(false);
  };

  const handleOpen = () => {
    setAddModalOpen(true);
  };

  const handleClose = () => {
    setAddModalOpen(false);
  };

  useEffect(() => {
    let userDetails = JSON.parse(sessionStorage.getItem("userLoggedInDetails"));

    const headers = {
      token: userDetails["access-token"],
      client: userDetails.client,
      expiry: userDetails.expiry,
      uid: userDetails.uid,
    };

    const arg = {
      channelId,
      headers,
    };

    // Get all channels
    channelsGet(headers)
      .then((response) => {
        let channelObj = response.data.data;
        setChannels(channelObj);
        return channelObj;
      })
      .then((channelObj) => {
        if (channelId) {
          let id = parseInt(channelId);
          getChannelName(channelObj, id);
          setchannelid(id);
        }
      })
      .catch((err) => console.log(err));

    // get current list of channel members
    channelDetailsGet(arg)
      .then((result) => {
        let members = result.data.data.channel_members;
        setCurrentMembers(members);
        return members;
      })
      .then((members) => getCurrMemberIds(members))
      .catch((err) => console.log(err));

    // get list of all users
    getAllUsers()
      .then((response) => {
        let users = response.data.data;
        setAllUsers(users);
      })
      .catch((error) => error);
  }, [channelId, members]);

  return (
    <div className="channelPage">
      <Messages
        displayHeader={
          <ChannelHeader
            handleOpen={handleOpenAddMembers}
            channelName={channelName}
            membersNum={memberIds.length}
          />
        }
        receiverClass="Channel"
        receiverID={channelId}
      />
      {isAddMembersModalOpen && (
        <Modals
          modalTitle={`#${channelName}`}
          handleClose={handleCloseAddMembers}
          btnText="Done"
        >
          <hr className="hr-addMembers" />
          <div className="addMembers-btn" onClick={handleOpen}>
            <Buttons
              className="addMembers-btn-icon"
              title="addMembers-btn-icon"
            >
              <BsFillPersonPlusFill />
            </Buttons>
            <div className="addMembers-btn-text">Add People</div>
          </div>
          <div className="addMembers-currentMembers-list">
            {currentMembers &&
              currentMembers.map((member) => {
                return (
                  <div className="currentMembers-container" key={member.id}>
                    <img src={slackBot} height="32px" width="32px" />
                    <span className="email"> {member.email} </span>
                  </div>
                );
              })}
          </div>
        </Modals>
      )}

      {isAddModalOpen && (
        <Modals
          className="modal-searchAddMember"
          modalTitle="Add people"
          modalSubtitle={`#${channelName}`}
          handleClose={handleClose}
        >
          <FindMembers list={allUsers} addMember={addMember} />
          <div className="usersToBeAdded">
            {addedUsers &&
              addedUsers.map((user) => {
                <div className="filteredUserItems" key={user.id}>
                  <img src={slackBot} height="20px" width="20px" />
                  <span>{user.email} </span>
                </div>;
              })}
          </div>
        </Modals>
      )}
    </div>
  );
}

export default Channel;

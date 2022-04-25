import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import { sendMessage } from "../../../api/api-message";
import { gettingUser } from "./gettingUser";
import MessageBox from "./MessageBox";
import "./message.css";

const NewMessage = () => {
  const [messageParams, setMessageParams] = useState({});
  let { uid, id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (id) {
      gettingUser(id)
        .then((response) => {
          console.log(response);
          setMessageParams({
            receiver_id: response.id,
            receiver_class: "User",
            uid: response.uid,
          });
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  const handleSendMessage = (input) => {
    sendMessage({
      receiver_id: messageParams.receiver_id,
      receiver_class: messageParams.receiver_class,
      body: input,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
      .finally(() => {
        navigate(`../${uid}/messages/${id}`);
      });
  };
  return (
    <div className="messages-container">
      <div className="messages-container-header">
        <h1>New message</h1>
      </div>
      <div className="messages-search-user">
        <p>To:</p>
        {/* change selection behavior later */}
        <SearchBar
          className="messages-searchbar"
          type="messages"
          // headers={userHeaders}
        />
      </div>
      {messageParams.uid !== undefined ? (
        <div className="new-message empty-message-container">
          {`This is the beginning of your message history  ${` with ${messageParams.uid}`}`}
        </div>
      ) : (
        <div className=" empty-message-container"> </div>
      )}

      <MessageBox
        receiverName={messageParams.uid}
        onClick={(input) => {
          handleSendMessage(input)
        }}
      />
    </div>
  );
};

export default NewMessage;

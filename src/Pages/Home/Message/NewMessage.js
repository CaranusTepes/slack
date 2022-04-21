import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./newMessage.css";
import { sendMessage } from "../../../api/api-message";
import { gettingUser } from "./gettingUser";
import SendMessage from "./SendMessage";

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
      <div className="newMessage">
        <div className="newMessageHeader">
          <div className="headerName">
            {messageParams.uid !== undefined ? (
              <div>{`${`${messageParams.uid}`}`}</div>
            ) : (
              <div> New Message </div>
            )}{" "}
          </div>
        </div>
        <div className="newMessageSearch">
          <div className="newMessageSearchHeader"> To: </div>
          <SearchBar
            className="newMessageSearchBar"
            type="messages"
            // headers={userHeaders}
          />
        </div>
        {messageParams.uid !== undefined ? (
          <div className="new-message emptyTextBox">
            {`This is the beginning of your message history  ${` with ${messageParams.uid}`}`}
          </div>
        ) : (
          <div className="emptyTextBox"> </div>
        )}
      </div>
      <SendMessage
        receiverName={messageParams.uid}
        onClick={(input) => {
          handleSendMessage(input);
        }}
      />
    </div>
  );
};

export default NewMessage;

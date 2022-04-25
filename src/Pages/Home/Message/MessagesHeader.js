import React from 'react'
import slackBot from "../../../Assets/Images/slackBot.png"
import { FiChevronDown } from 'react-icons/fi'

const MessagesHeader = ({ messageGroupName }) => {
  return (
    <div className="messages-container-header">
      <img className="user-avatar" src={slackBot} />
      <div className="messages-receiver">
        {messageGroupName}
      </div>
    </div>
  )
}

export default MessagesHeader

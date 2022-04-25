import React from 'react';
import Buttons from './Buttons';
import { FaUserPlus } from "react-icons/fa";

function ChannelHeader({ handleOpen, channelName, membersNum }) {
    return (
        <div className='channel-header-container'>
            <div className='btn-container'>
                <div className={`btn-channel-title btn-rectangle-medium`} title='btn-channel-title'>
                    <span className='channelName'> # {channelName}</span>
                </div>
            </div>
            <div className='btn-container'onClick={handleOpen}>
                <Buttons className="buttonChannel" title='btn-channel-addUsers' >
                    <span className='icon-addMembers'><FaUserPlus /></span>
                    <span className='icon-membersNum'>{membersNum}</span>
                </Buttons>
            </div>
        </div>
    );
}

export default ChannelHeader;

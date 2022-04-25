import React from 'react';
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import slackBot from "../../../Assets/Images/slackBot.png"
import "./channel.css"

export function FindMembers ({ list, addMember, disable }) {
  const [searchInput, setSearchInput] = useState()  

  return (
        <div className='findmembers-search'>
          <div className='findmembers-search-input'>
            <div className='search-icon'>
              <FaSearch />
            </div>
            <input className='input-findmembers'
              value={searchInput}
              type="text"
              placeholder='Find members'
              onChange={(e) => {
                  setSearchInput(e.target.value)
              }}
              disabled={disable}
            />
          </div>
      {/* added a div wrapper */}
      {searchInput && searchInput.length > 0 ? (
        <div className="userlist">
          {list
            .filter(user => {
              if (searchInput == '') {
                return ''
              } else if (
                user.uid.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return user
              }
            })
            .map(user => {
              return (
                <div className='filtered-container' key={user.id} id={user.id}>
                  <img src={slackBot} height='30px' width='30px' onClick={addMember} id={user.id}/>
                  <span className='email' onClick={addMember} id={user.id}> {user.email} </span>
                </div>
              )
            })}
        </div>)
        : null}
    </div>
  );
}

import { format, render, cancel, register } from 'timeago.js';
import { useState } from 'react';
import axios from 'axios';



export default function Message({ own, name, content, createdAt, avatar, userId, currentUser, setClickedUserData, clickedUserData, clickedUserProfile, 
  setClickedUserProfile }) {// this state is to set the id of the clicked user


  const handleNameClick = async () => {
    try {
      console.log("viewing the users profile")
      // we need to send an id to the backend so that it could look it up and send it back
      // setClickedUserId(userId)
      console.log("user id ", userId)
     const foundUser = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/profile/${userId}`)
     console.log("data from backend ", foundUser)
     setClickedUserData(foundUser.data)
    if (currentUser.id !== foundUser.data._id) {
      setClickedUserProfile(true)
    }
    }catch(err) {
      console.log(err)
    }
  }
  // we need to get the id from the backend with an axios call
 
 
  return (
    // <div className={own ? "message own" : "message"}>
    <div className={own ? "message own" : "message"}>
      {/* // we have options on which div will be clickable
      // which makes more sense */}
      <div className="message-top">
        <div>
          <img
            className="message-img"
            src="https://ca.slack-edge.com/T0351JZQ0-U02TU059YNM-cd5a2958a485-512"
            alt="" />
          

        </div>
        <p className="message-text">{content}</p>
      </div>
      <div className="message-bottom" onClick={handleNameClick}>@{name}</div>
      <div className="message-bottom">{format(createdAt)}</div>
    </div>
  )
}
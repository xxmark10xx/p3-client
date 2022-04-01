import { format, render, cancel, register } from "timeago.js"
import { useState } from "react"
import axios from "axios"

export default function Message({
    own,
    name,
    content,
    createdAt,
    avatar,
    userId,
    currentUser,
    setClickedUserData,
    clickedUserData,
    clickedUserProfile,
    setClickedUserProfile,
}) {
    const handleNameClick = async () => {
        try {
            const foundUser = await axios.get(
                `${process.env.REACT_APP_SERVER_URL}/api-v1/profile/${userId}`
            )
            setClickedUserData(foundUser.data)
            if (currentUser.id !== foundUser.data._id) {
                setClickedUserProfile(true)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={own ? "message own" : "message"}>
            <div className="message-top">
                <div>
                    <img className="message-img" src={avatar} alt="" />
                </div>
                <div className="message-text">
                
                <p>{content}</p>
                <div className="message-bottom"><p className="mainchat-time-small">{format(createdAt)}</p></div>
                </div>
            
            </div>
            <div className="message-bottom" onClick={handleNameClick}>
                <h4 className="user-name-pointer">{name}</h4>
            </div>
        </div>
    )
}

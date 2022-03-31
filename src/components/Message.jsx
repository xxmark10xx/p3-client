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
                <p className="message-text">{content}</p>
            </div>
            <div className="message-bottom" onClick={handleNameClick}>
                @{name}
            </div>
            <div className="message-bottom">{format(createdAt)}</div>
        </div>
    )
}

import { useState, useEffect } from "react"
import axios from "axios"
import EditProfile from "./EditProfile"

export default function OtherUserProfile({
    clickedUserData,
    setClickedUserProfile,
}) {
    const [msg, setMsg] = useState("")
    const [openEdit, setOpenEdit] = useState(false)

    const handleEditPage = () => {
        setOpenEdit(!openEdit)
    }

    const handleBackToProfile = () => {
        setClickedUserProfile(false)
    }
    const normalProfile = (
        <div className="aside-profile-wrapper">
            <div className="go-back-btn" onClick={handleBackToProfile}>
                    <img
                        className="go-back-img"
                        src="arrow-left.svg"
                        alt="arrow left"
                        />
                </div>
            
            <div>
                <img
                    className="profile-img"
                    src={clickedUserData.avatar}
                    alt=""
                />
            </div>

            {/* <button onClick={handleBackToProfile}>go back</button> */}

            <div className="user-details-wrapper-profile">
                <h3>{clickedUserData.name}</h3>
                <div className="user-bio-wrapper">
                    <p className="user-bio">
                        {clickedUserData.bio}
                    </p>
                </div>
                <div className="followers-wrapper"></div>
            </div>
        </div>
    )

    return <>{normalProfile}</>
}

import { useState } from "react"
import ChatDetails from "./ChatDetails"
import Profile from "./Profile"
import { Link } from "react-router-dom"
import OtherUserProfile from "./OtherUserProfile"

export default function UserData({
    currentUser,
    handleLogout,
    clickedUserData,
    setClickedUserProfile,
}) {
    const [formState, setFormState] = useState(true)

    const handleState = () => {
        setFormState(!formState)
    }

    return (
        <div className="aside-component">
            <div className="aside-component-wrapper">
                <div className="aside-component-switches">
                    <h5 className={"signup active"}>User Profile</h5>
                </div>
                <div className="aside-component-content-wrap">
                    <OtherUserProfile
                        setClickedUserProfile={setClickedUserProfile}
                        clickedUserData={clickedUserData}
                    />
                </div>
                <div className="aside-footer">
                    <Link to="/">
                        <span className="logout-btn" onClick={handleLogout}>
                            log out
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

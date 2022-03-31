import { useState } from "react"
import Aside from "../Aside"
import Mainchat from "../Mainchat"
import UserData from "../UserData"

export default function Timeline({ currentUser, handleLogout }) {
    const [clickedUserData, setClickedUserData] = useState()
    const [clickedUserProfile, setClickedUserProfile] = useState(false)

    return (
        <>
            <div className="timeline-wrapper">
                {!clickedUserProfile ? (
                    <Aside
                        currentUser={currentUser}
                        handleLogout={handleLogout}
                    />
                ) : (
                    <UserData
                        setClickedUserProfile={setClickedUserProfile}
                        clickedUserData={clickedUserData}
                        currentUser={currentUser}
                    />
                )}
            </div>
            <div className="timeline-wrapper-rightside">
                <Mainchat
                    currentUser={currentUser}
                    setClickedUserData={setClickedUserData}
                    clickedUserData={clickedUserData}
                    clickedUserProfile={clickedUserProfile}
                    setClickedUserProfile={setClickedUserProfile}
                />
            </div>
        </>
    )
}

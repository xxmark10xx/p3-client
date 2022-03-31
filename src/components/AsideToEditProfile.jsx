import { useState } from "react"
import ProfileWithSaveBtn from "./ProfileWithSaveBtn"
import { useNavigate } from "react-router-dom"

export default function AsideToEditProfile({ currentUser, handleLogout }) {
    const [formState, setFormState] = useState(true)

    const handleState = () => {
        setFormState(!formState)
    }

    let navigate = useNavigate()
    const handleNavigateBack = () => {
        navigate("/timeline")
    }

    return (
        <div className="aside-component">
            <div className="asidetoeditprofile-component-wrapper">
                <div onClick={handleNavigateBack} className="go-back">
                    <img
                        className="arrow-go-back"
                        src="arrow-left.svg"
                        alt=""
                    />
                </div>
                <div className="asidetoeditprofile-component-content">
                    <ProfileWithSaveBtn currentUser={currentUser} />
                </div>
                <div className="aside-footer"></div>
            </div>
        </div>
    )
}

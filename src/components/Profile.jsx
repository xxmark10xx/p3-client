import { useState, useEffect } from "react"
import axios from "axios"
import EditProfile from "./EditProfile"

export default function Profile({ currentUser }) {
    const [msg, setMsg] = useState("")
    const [openEdit, setOpenEdit] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const token = localStorage.getItem("jwt")
                const options = {
                    headers: {
                        Authorization: token,
                    },
                }
                const response = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`,
                    options
                )
                // set the data from the server in state
                setMsg(response.data.msg)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    const handleEditPage = () => {
        setOpenEdit(!openEdit)
    }

    const normalProfile = (
        <div className="aside-profile-wrapper">
            <div>
                <img className="profile-img" src={currentUser.avatar} alt="" />
            </div>

            <div className="user-details-wrapper-profile">
                <h3>@{currentUser.name}</h3>
                <div className="user-bio-wrapper">
                    <p className="user-bio">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dolorem dolorum iste tenetur tempore suscipit
                        excepturi consectetur a cupiditate odio aliquam sunt
                        deleniti, possimus corporis molestias hic tempora
                        maiores perspiciatis consequatur.
                    </p>
                </div>
                <div className="followers-wrapper">
                    <div className="edit-profile-btn-wrapper">
                        <button
                            onClick={handleEditPage}
                            className="edit-profile-btn"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {openEdit ? (
                <EditProfile
                    handleEditPage={handleEditPage}
                    currentUser={currentUser}
                />
            ) : (
                normalProfile
            )}
        </>
    )
}

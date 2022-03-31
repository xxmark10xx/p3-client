import { useState, useEffect } from "react"
import axios from "axios"

export default function Profile({ currentUser }) {
    const [msg, setMsg] = useState("")
    useEffect(() => {
        ;(async () => {
            try {
                const token = localStorage.getItem("jwt")
                console.log("token", token)
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

    return (
        <>
            <div className="aside-profile-wrapper">
                <div>
                    <img
                        className="profile-img"
                        src="https://ca.slack-edge.com/T0351JZQ0-U02TU059YNM-cd5a2958a485-512"
                        alt=""
                    />
                </div>
                <a href="">change avatar</a>
                <div className="user-details-wrapper-profile">
                    <form>
                        <div className="login-form">
                            <label
                                className="label"
                                htmlFor="image-upload"
                            ></label>
                            <input
                                type="image"
                                src=""
                                alt=""
                                id="image-upload"
                                name="image-upload"
                            />

                            <label className="label" htmlFor="username">
                                :
                            </label>
                            <input />
                        </div>

                        <div className="login-form-password">
                            <label className="label" htmlFor="bio"></label>
                            <input />
                        </div>

                        <input className="submit-btn" type="submit" />
                    </form>
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
                            <button className="edit-profile-btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

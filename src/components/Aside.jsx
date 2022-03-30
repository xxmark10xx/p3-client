import { useState } from "react"
import ChatDetails from "./ChatDetails"
import Profile from "./Profile"
import { Link } from 'react-router-dom'

export default function Aside({ currentUser, handleLogout }) {

  const [formState, setFormState] = useState(true)

  const handleState = () => {
    setFormState(!formState)
  }

  return (
    <div className="aside-component">
      <div className="aside-component-wrapper">
          <div className="aside-component-switches">
            {/* <h5 onClick={handleState} className={formState ? "login active" : 'login'}>Chat Details</h5> */}
          {/* <h5 onClick={handleState} className={formState ? 'signup' : "signup active"}>Your Profile</h5> */}
          <h5 className={"signup active"}>Your Profile</h5>
        </div>
        {/* chat details should be wrapped with aside-component-content */}
        <div className="aside-component-content-wrap">
          {/* {formState ? <ChatDetails /> : <Profile currentUser={currentUser}/>} */}
          <Profile currentUser={currentUser}/>
        </div>
        <div className="aside-footer">
          <Link to="/">
            <span className="logout-btn" onClick={handleLogout}>log out</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
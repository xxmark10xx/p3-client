import { useState } from "react"
import ChatDetails from "./ChatDetails"
import Profile from "./Profile"
import ProfileWithSaveBtn from './ProfileWithSaveBtn'
import { Link, useNavigate } from 'react-router-dom'

export default function AsideToEditProfile({ currentUser, handleLogout }) {

  const [formState, setFormState] = useState(true)

  const handleState = () => {
    setFormState(!formState)
  }

  let navigate = useNavigate()
  const handleNavigateBack = () => {
    navigate('/timeline')
  }

  return (
    <div className="aside-component">
      <div className="asidetoeditprofile-component-wrapper">
        <div onClick={handleNavigateBack} className="go-back">
          <img className="arrow-go-back" src="arrow-left.svg" alt="" />
        </div>
        <div className="asidetoeditprofile-component-content">
         <ProfileWithSaveBtn currentUser={currentUser}/>
        </div>
        <div className="aside-footer">
          {/* <Link to="/">
            <span className="logout-btn" onClick={handleLogout}>log out</span>
          </Link> */}
        </div>
      </div>
    </div>
  )
}




{/* <div className="aside-component">
      <div className="aside-component-wrapper">
          <div className="aside-component-switches">
            <h5 onClick={handleState} className={formState ? "login active" : 'login'}>Chat Details</h5>
            <h5 onClick={handleState} className={formState ? 'signup' : "signup active"}>Your Profile</h5>
        </div>
        
        <div className="aside-component-content">
          {formState ? <ChatDetails /> : <Profile currentUser={currentUser}/>}
        </div>
        <div className="aside-footer">
          <Link to="/">
            <span className="logout-btn" onClick={handleLogout}>log out</span>
          </Link>
        </div>
      </div>
    </div> */}
import { useState } from "react"
import ChatDetails from "./ChatDetails"
import Profile from "./Profile"

export default function Aside({ currentUser }) {

  const [formState, setFormState] = useState(true)

  const handleState = () => {
    setFormState(!formState)
  }

  return (
    <div className="aside-component">
      <div className="aside-component-wrapper">
          <div className="aside-component-switches">
            <h5 onClick={handleState} className={formState ? "login active" : 'login'}>Chat Details</h5>
            <h5 onClick={handleState} className={formState ? 'signup' : "signup active"}>Your Profile</h5>
        </div>
        
        <div className="aside-component-content">
          {formState ? <ChatDetails /> : <Profile currentUser={currentUser}/>}
        </div>
      </div>
    </div>
  )
}
import { useState } from "react"

export default function Aside() {

  const [formState, setFormState] = useState(true)

  const handleState = () => {
    setFormState(!formState)
  }

  return (
    <div className="aside-component">
      <div className="aside-component-wrapper">
        <div className="aside-component-content">
          <div className="aside-component-switches">
            <h5 onClick={handleState} className={formState ? "login active" : 'login'}>Chat Details</h5>
            <h5 onClick={handleState} className={formState ? 'signup' : "signup active"}>Your Profile</h5>
          </div>
          
        </div>
      </div>
    </div>
  )
}
import Login from '../pages/Login'
import Register from '../pages/Register'
import { useState } from 'react'

export default function SignupLogin() {

  const [formState, setFormState] = useState(true)

  const handleState = () => {
    setFormState(!formState)
  }

  return (
    <div className="signuplogin-component">
      <div className="signuplogin-component-wrapper">
        <div className="signuplogin-component-content">
          <div className="signuplogin-component-switches">
            <h5 onClick={handleState} className={formState ? "login active" : 'login'}>Login</h5>
            <h5 onClick={handleState} className={formState ? 'signup' : "signup active"}>Signup</h5>
          </div>
          {formState ? <Login /> : <Register />}
          {/* <Login />
          <Register /> */}
        </div>  
      </div>
    </div>
  )
}
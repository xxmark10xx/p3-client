import Login from '../pages/Login'
import Register from '../pages/Register'
import { useState } from 'react'

export default function SignupLogin({ currentUser, setCurrentUser }) {

  const [formState, setFormState] = useState(true)

  const handleState = () => {
    setFormState(!formState)
  }

  const userNotSignedIn =
    <div className="signuplogin-component-content">
      <div className="signuplogin-component-switches">
        <h5 onClick={handleState} className={formState ? "login active" : 'login'}>Login</h5>
        <h5 onClick={handleState} className={formState ? 'signup' : "signup active"}>Signup</h5>
      </div>
      {formState ? <Login setCurrentUser={setCurrentUser} currentUser={currentUser}/> : <Register setCurrentUser={setCurrentUser}/>}
    </div>  

  const userSignedIn = <h5>User is signed in!</h5>
  return (
    <div className="signuplogin-component">
      <div className="signuplogin-component-wrapper">
        {currentUser ? userSignedIn : userNotSignedIn}
      </div>
    </div>
  )
}
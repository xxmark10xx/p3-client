import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Profile({ currentUser }) {
  const [msg, setMsg] = useState('') 
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('jwt')
        console.log('token', token)
        const options = {
          headers: {
            'Authorization': token
          }
        }
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, options)
        setMsg(response.data.msg)
      } catch (err) {
        console.log(err)
      }
    })()
   }, [])

  return (
    <div>
      <h3>{currentUser.name}'s Profile</h3>

      <p>your email is {currentUser.email}</p>

      <h4>The message from the auth locked route is:</h4>
      
      <h6>{msg}</h6>
    </div>
  )
}

// this page is no longer needed
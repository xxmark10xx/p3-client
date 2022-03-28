import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Profile({ currentUser }) {
  const [msg, setMsg] = useState('') 
  // use useEffect to get data from the back
  useEffect(() => {
    (async () => {
      try {
        // get token for local storage
        const token = localStorage.getItem('jwt')
        console.log('token', token)
        // make the auth headers
        const options = {
          headers: {
            'Authorization': token
          }
        }
        // hit the auth locked endpoint
        // axios.get(url, options)
        // axios.post(url, body, options) (same thing w put)
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, options)
        // set the data from the server in state
        setMsg(response.data.msg)
      } catch (err) {
        console.log(err)
      }
    })()
   }, [])

  console.log(currentUser)
  return (
    <>
      <div className='aside-profile-wrapper'>
        <div>
          <img className='profile-img' src="https://ca.slack-edge.com/T0351JZQ0-U02TU059YNM-cd5a2958a485-512" alt="" />
        </div>
        <a href="">change avatar</a>
        <div className='user-details-wrapper-profile'>
          <h3>@{currentUser.name}</h3>
          <div className='user-bio-wrapper'>
            <p className='user-bio'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolorum iste tenetur tempore suscipit excepturi consectetur a cupiditate odio aliquam sunt deleniti, possimus corporis molestias hic tempora maiores perspiciatis consequatur.</p>
          </div>
          <div className='followers-wrapper'>
            <div className='followers'>Fallowers: 1000</div>
            <div className='following'>Fallowing: 1000</div>
            <div className='edit-profile-btn-wrapper'>
              <button className='edit-profile-btn'>Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
import { useState, useEffect } from 'react'
import axios from 'axios'
import EditProfile from './EditProfile'

export default function OtherUserProfile({ clickedUserData }) {
  const [msg, setMsg] = useState('') 
  const [openEdit, setOpenEdit] = useState(false)

//   console.log("this is the current user ",currentUser)
  const normalProfile =
      <div className='aside-profile-wrapper'>
      <div>
        <img className='profile-img' src={clickedUserData.avatar} alt="" />
      </div>

      <h5>This is another user {clickedUserData.name}</h5>
      
      <div className='user-details-wrapper-profile'>
        <h3>@Mark</h3>
      <div className='user-bio-wrapper'>
        <p className='user-bio'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolorum iste tenetur tempore suscipit excepturi consectetur a cupiditate odio aliquam sunt deleniti, possimus corporis molestias hic tempora maiores perspiciatis consequatur.</p>
      </div>
      <div className='followers-wrapper'>
    
      </div>
    </div>
    </div>
  
  return (
    <>
      {normalProfile}
      
      
    </>
  )
}
import { useState } from "react"
import axios from "axios"

export default function EditProfile({ currentUser, handleEditPage }) {
  // setting state for the profile image
  const [ formImg, setFormImg ] = useState("")

  const handleSaveImg = async (e) => {
    e.preventDefault()
    try{
      const fd = new FormData()
      fd.append("image", formImg)

      // axios call to post the img to the database
      const uploadedImg = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/images`, fd, options)
    }catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className='aside-profile-wrapper'>
        <div className="go-back-btn" onClick={handleEditPage}><img className="go-back-img" src="arrow-left.svg" alt="arrow left" /></div>
        <div>
          <img className='profile-img' src="https://ca.slack-edge.com/T0351JZQ0-U02TU059YNM-cd5a2958a485-512" alt="" />
        </div>
        <div className='user-details-wrapper-profile'>
        <div className='login-form-email'>
        <form>
            <div className='login-form-email'>
              <label className='label' htmlFor="image-upload">Change Avatar</label>
              <input type="file" src="" alt="" id='image-upload' name="image-upload"/>

              <label className='label' htmlFor="username"></label>
              <input 
                
              />
            </div>
            <div className='user-bio-wrapper'>
              <label className='label' htmlFor="bio"></label>
              <input className="bio-text-input" type="text" />
            </div>
            

            <div className='edit-profile-btn-wrapper'>
                <button className='edit-profile-btn'>Save</button>
            </div>
          </form>
        </div>
        <div className='followers-wrapper'>
          {/* <div className='followers'>Rooms: 1000</div>
          <div className='followers'>Fallowers: 1000</div>
          <div className='following'>Fallowing: 1000</div> */}
          
        </div>
       </div>
      </div>
    </>
  )
}
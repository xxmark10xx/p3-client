export default function EditProfile({ currentUser, handleEditPage }) {
  return (
    <>
      <div className='aside-profile-wrapper'>
        <div className="go-back-btn" onClick={handleEditPage}><img className="go-back-img" src="arrow-left.svg" alt="arrow left" /></div>
        <div>
          <img className='profile-img' src="https://ca.slack-edge.com/T0351JZQ0-U02TU059YNM-cd5a2958a485-512" alt="" />
        </div>
        <a href="">change avatar</a>
        <div className='user-details-wrapper-profile'>
        <div className='login-form-email'>
          <label className='label' htmlFor="username"></label>
          <input 
            type="email"
            id="username"
            value={currentUser.name}
            placeholder='enter your email...'
          />
        </div>
        <div className='user-bio-wrapper'>
          <p className='user-bio'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dolorum iste tenetur tempore suscipit excepturi consectetur a cupiditate odio aliquam sunt deleniti, possimus corporis molestias hic tempora maiores perspiciatis consequatur.</p>
        </div>
        <div className='followers-wrapper'>
          {/* <div className='followers'>Rooms: 1000</div>
          <div className='followers'>Fallowers: 1000</div>
          <div className='following'>Fallowing: 1000</div> */}
          <div className='edit-profile-btn-wrapper'>
            <button className='edit-profile-btn'>Save</button>
          </div>
        </div>
       </div>
      </div>
    </>
  )
}
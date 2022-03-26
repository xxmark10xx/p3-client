import { Link } from 'react-router-dom'

export default function Navbar({ handleLogout, currentUser }) {
  // if the user is logged in
  const loggedIn = (
    <>
      {/* if the user is loggerd in..... */}

      <Link className='links right-side-links' to="/profile">Profile</Link>
      <Link className='links right-side-links' to="/timeline">Timeline</Link>
      <Link className='links right-side-links' to="/">
        {/* todo: app function to logout */}
        <span onClick={handleLogout}>log out</span>
      </Link>
    </>
  )

  // if the user is logged out
  const loggedOut = (
    <>
      {/* if the user in logged out..... */}
      <Link className='links right-side-links' to="/register">register</Link>

      <Link className='links right-side-links' to="/login">login</Link>
    </>
  )

  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='home-link-wrapper'>
            <Link className='links' to="/">Home</Link>
        </div>
        <div className='right-side-wrapper'>
          {currentUser ? loggedIn : loggedOut}
        </div>
      </div>
    </nav>
  )
}
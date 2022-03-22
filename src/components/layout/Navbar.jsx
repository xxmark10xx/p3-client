import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">User App</Link>

      {/* if the user is loggerd in..... */}
      <Link to="/">
        {/* todo: app function to logout */}
        <span>log out</span>
      </Link>

      <Link to="/profile">Profile</Link>

      {/* if the user in logged out..... */}
      <Link to="/register">register</Link>

      <Link to="/login">login</Link>
    </nav>
  )
}
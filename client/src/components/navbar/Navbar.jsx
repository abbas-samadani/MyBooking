import './navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext.js'

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext)
  const handleClick = (e) => {
    e.preventDefault()
    dispatch({ type: 'LOGOUT' })
  }
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">MyBooking</span>
        </Link>

        {user ? (
          <>
            <div className="logout">
              <p>{user.username}</p>
              <button onClick={handleClick} className="navButton">
                LogOut
              </button>
            </div>
          </>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  )
}

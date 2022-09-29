import { useContext } from 'react'
import { FaHome, FaPencilAlt, FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Context } from '../context/Context';
function Header() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/")
  }
  return (
    <div className="navbar bg-base-300 fixed z-50">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">🪙 Ũdhamini App</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 dropdown-content mt-3 ">
          <li><Link className='my-0' to="/"><FaHome />Home</Link></li>
          <li><Link to="/about"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            About</Link></li>
          <li><Link to="/register"><FaPencilAlt /> Register</Link></li>
          <li><Link to="/login"><FaSignInAlt /> Login</Link></li>
          {
            user && (
              <li>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="avatar">
                    <FaUser className="w-10 rounded-full text-xl" />
                  </label>

                  <ul tabIndex={0} className="mt-10 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-30">
                    <li><Link to={`/profile/${user?._id}`} className="justify-between">Profile</Link></li>
                    <li><Link to={`/profile/update/${user?._id}`}>Settings</Link></li>
                    <li><a onClick={handleLogout}>Logout</a></li>
                  </ul>
                </div>
              </li>
            )
          }
        </ul>
      </div>

    </div>
  )
}

export default Header
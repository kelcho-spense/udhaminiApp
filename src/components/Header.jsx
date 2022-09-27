import React from 'react'
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
function Header() {
  const user = {
    name: "kevin",
    age: 34
  }
  return (
    <div className="navbar bg-base-300 fixed z-50">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">🪙 Udhamini App</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><Link className='my-0' to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar">
                <FaUser className="w-10 rounded-full text-xl" />
              </label>
              {
                user && (
                  <ul tabIndex={0} className="mt-10 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-30">
                    <li><Link to="/profile/5472" className="justify-between">Profile</Link></li>
                    <li><Link to="/profile/update/5472">Settings</Link></li>
                    <li><a>Logout</a></li>
                  </ul>
                )
              }
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
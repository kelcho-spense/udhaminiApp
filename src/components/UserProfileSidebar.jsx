import React from 'react'
import { FaUser, FaCog, FaMoneyCheckAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";

function UserProfileSidebar() {
    return (
        <ul className="menu bg-base-300  items-start justify-start text-3xl mt-20px h-full">
            <li className='w-full'><Link to="/profile/5472"><FaUser /> Profile</Link></li>
            <li><Link to="/profile/scolarship/5472"><FaMoneyCheckAlt /> Scolarships</Link></li>
            <li><Link to="/profile/update/5472"><FaCog />Edit Profile</Link></li>
        </ul>
    )
}

export default UserProfileSidebar
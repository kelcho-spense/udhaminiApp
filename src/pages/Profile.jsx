import React from 'react';
import UserProfileSidebar from '../components/UserProfileSidebar'
import imagePlaceholder from '../images/placeholder.png'
function Profile() {
  return (
    <div className='flex flex-row mt-60px '>
      <UserProfileSidebar />
      <main className='container  grid md:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center md:h-screen sm:h-full mx-2 mb-3'>
        <div class="avatar">
          <div class="w-3/4 mask mask-hexagon grid mx-auto">
            <img className='place-self-center' src={imagePlaceholder} />
          </div>
        </div>
        <ul className="menu menu-vertical bg-base-200 rounded-box p-2 text-xl">
          <li><a>Full Names : KEVIN COMBA GATIMU</a></li>
          <li><a>Age : 28</a></li>
          <li><a>Gender : Male</a></li>
          <li><a>Email : Kelchospnse88@gmail.com</a></li>
          <li><a>G.P.A : 3.8</a></li>
          <li><a>Education Level : Udergraduate</a></li>
          <li><a>Country of Residence : Kenya</a></li>
        </ul>
        <ul className="menu menu-vertical bg-base-200 rounded-box p-2 text-xl justify-center">
          <li><a>Username : Kelchospense</a></li>
          <li><a>Password  : ******</a></li>
        </ul>
      </main>
    </div>
  )
}

export default Profile
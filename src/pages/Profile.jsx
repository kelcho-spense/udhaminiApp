import { useState, useEffect, useContext } from 'react';
import UserProfileSidebar from '../components/UserProfileSidebar';
import imagePlaceholder from '../images/placeholder.png';
import { Context } from '../context/Context';
import axios from 'axios';
function Profile() {
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [userData, setUserdata] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`/users/${user._id}`);
      res.data && setUserdata(res.data);
    };
    getUser();
  }, [user._id])

  return (
    <div className='flex flex-row mt-60px md:h-full '>
      <UserProfileSidebar />
      <main className='container  grid md:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center md:h-full sm:h-full mx-2 mb-3'>
        <div className="avatar ">
          <div className="w-3/4 mask mask-hexagon grid mx-auto">
            {
              userData.profilepic ? (
                <img src={PF + userData.profilepic} className="w-full h-full object-cover" alt='no pic' />
              ) : (
                <img className='place-self-center' src={imagePlaceholder} alt='no pic' />
              )
            }

          </div>
        </div>
        <ul className="menu menu-vertical bg-base-200 rounded-box p-2 text-xl">
          <li><a href='#'>Full Names : {userData?.fullname}</a></li>
          <li><a href='#'>Age : {userData?.age}</a></li>
          <li><a href='#'>Gender : {userData?.gender}</a></li>
          <li><a href='#'>Email : {userData?.email}</a></li>
          <li><a href='#'>G.P.A : {userData?.gpa}</a></li>
          <li><a href='#'>Education Level : {userData?.education_level}</a></li>
          <li><a href='#'>Country of Residence : {userData?.country}</a></li>
        </ul>
        <ul className="menu menu-vertical bg-base-200 rounded-box p-2 text-xl justify-center">
          <li><a>Username : {userData?.username}</a></li>
          <li><a>Password  : ******</a></li>
        </ul>
      </main>
    </div>
  )
}

export default Profile
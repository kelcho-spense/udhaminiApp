import React from 'react'
import Header from '../components/Header';
import imagePlaceholder from '../images/placeholder.png'
function Register() {
  return (
    <div>
      <Header />
      <main className='h-screen bg-base-200'>
        <div className="hero-content">
          <h1 className="text-5xl font-bold">✍️Register now!</h1>
        </div>
        <div className="hero max-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <div className="card">
                <div className="card-body">
                  <label className="label"> <span className="label-text">Username</span></label>
                  <input type="text" placeholder="Enter username" className="input input-bordered input-md w-full max-w-xs" />
                  <label className="label"><span className="label-text">Password</span></label>
                  <input type="password" placeholder="Enter password**" className="input input-bordered input-md w-full max-w-xs" />
                  <label className="label"><span className="label-text">Country of residence</span></label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Select country of residence</option>
                    <option>kenya</option>
                    <option>Uganda</option>
                    <option>Uganda</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card ">
              <div className='card-header'>
                <div className="avatar grid">
                  <div className="w-24 mask mask-hexagon place-self-center" >
                    <img src={imagePlaceholder} />
                  </div>
                </div>
              </div>
              <div className="card-body md:flex-row sm:flex-col lg:flex-row">
                <div>
                  <label className="label"><span className="label-text">Full Names</span></label>
                  <input type="text" placeholder="Enter your names" className="input input-bordered " />
                  <label className="label"><span className="label-text">Age</span></label>
                  <input type="text" placeholder="Enter your age" className="input input-bordered" />
                  <label className="label"><span className="label-text">GPA</span></label>
                  <input type="text" placeholder="Enter your gpa" className="input input-bordered" />
                </div>
                <div className='md:ml-4 lg:ml-4'>
                  <label className="label"><span className="label-text">Gender</span></label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Select your gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <label className="label"><span className="label-text">Email</span></label>
                  <input type="text" placeholder="Enter your email" className="input input-bordered" />
                  <label className="label"><span className="label-text">Education level</span></label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Select education level</option>
                    <option>Postgraduate</option>
                    <option>Undergraduate</option>
                    <option>Senior Secondary School</option>
                  </select>
                </div>
              </div>
              <div className="form-control mt-6 grid">
                <button className="btn  max-w-md place-self-center w-full">Login</button>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Register
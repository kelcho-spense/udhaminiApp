import React from 'react';
import Header from '../components/Header';
function Login() {
  return (
    <div className='grid'>
      <Header />
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-10 bg-base-200 place-self-center mt-10">
        <div className="card-header">
          <h1 className="text-5xl font-bold">Login🔐</h1>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="input input-warning input-lg input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input type="text" placeholder="Enter password" className="input input-warning input-lg input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline btn-warning">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
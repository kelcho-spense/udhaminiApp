import React from 'react';
import { useForm } from "react-hook-form";
function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className='grid mt-60px'>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-10 bg-base-200 place-self-center m-3">
        <div className="card-header">
          <h1 className="text-5xl font-bold">Login🔐</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Username</span>
              </label>
              <input type="text" {...register("username", { required: true })} placeholder="Enter username" className="input input-warning input-lg input-bordered" />
              {errors.username?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">username is required 😶</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Password</span>
              </label>
              <input type="text" {...register("password", { required: true })} placeholder="Enter password" className="input input-warning input-lg input-bordered" />
              {errors.password?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">password is required😶</p>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-outline btn-warning">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
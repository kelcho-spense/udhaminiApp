import React from 'react'
import UserProfileSidebar from '../components/UserProfileSidebar'
import imagePlaceholder from '../images/placeholder.png'
import { useForm } from "react-hook-form";
function ProfileEdit() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex flex-row mt-60px'>
            <UserProfileSidebar />
            <main className='container flex-1  h-full mt-2'>
                <div className="hero-content">
                    <h1 className="text-5xl font-bold">Update User Profile</h1>
                </div>
                <div className="hero">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="text-center lg:text-left">
                                <div className="card">

                                    <div className="card-body">
                                        <label className="label"> <span className="label-text">Username</span></label>
                                        <input type="text" {...register("username", { required: true })} placeholder="Enter username" className="input input-bordered input-md w-full max-w-xs" />
                                        {errors.username?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">username is required 😶</p>}
                                        <label className="label"><span className="label-text">Password</span></label>
                                        <input {...register("password", { required: true })} type="password" placeholder="Enter password**" className="input input-bordered input-md w-full max-w-xs" />
                                        {errors.password?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">password is required😶</p>}
                                        <label className="label"><span className="label-text">Country of residence</span></label>
                                        <select {...register("country", { required: true })} className="select select-bordered w-full max-w-xs">
                                            <option selected disabled value="">Select country of residence</option>
                                            <option value="kenya">Kenya</option>
                                            <option value="uganda">Uganda</option>
                                            <option value="tanzania">Tanzania</option>
                                        </select>
                                        {errors.country?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">country is required😶</p>}
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
                                        <input type="text" {...register("fullname", { required: true })} placeholder="Enter your names" className="input input-bordered " />
                                        {errors.fullname?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">fullname is required 😶</p>}
                                        <label className="label"><span className="label-text">Age</span></label>
                                        <input type="text" {...register("age", { required: true })} placeholder="Enter your age" className="input input-bordered" />
                                        {errors.age?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">age is required 😶</p>}
                                        <label className="label"><span className="label-text">GPA</span></label>
                                        <input type="text" {...register("gpa", { required: true })} placeholder="Enter your gpa" className="input input-bordered" />
                                        {errors.gpa?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">gpa is required 😶</p>}
                                    </div>
                                    <div className='md:ml-4 lg:ml-4'>
                                        <label className="label"><span className="label-text">Gender</span></label>
                                        <select {...register("gender", { required: true })} className="select select-bordered w-full max-w-xs">
                                            <option selected disabled value="" >Select your gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.gender?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">gender is required 😶</p>}
                                        <label className="label"><span className="label-text">Email</span></label>
                                        <input {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} type="text" placeholder="Enter your email" className="input input-bordered" />
                                        {errors.email?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">email is required 😶</p>}{errors.email?.type === 'pattern' && <p className="label-text-alt text-red-400 pt-2">invalid email😶</p>}
                                        <label className="label"><span className="label-text">Education level</span></label>
                                        <select {...register("educationlevel", { required: true })} className="select select-bordered w-full max-w-xs">
                                            <option selected disabled value="">Select education level</option>
                                            <option value="postgraduate">Postgraduate</option>
                                            <option value="undergraduate">Undergraduate</option>
                                            <option value="seniorsecondaryschool">Senior Secondary School</option>
                                        </select>
                                        {errors.educationlevel?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">education level is required 😶</p>}
                                    </div>
                                </div>
                                <div className="form-control mt-3 grid">
                                    <button type="submit" className="btn  max-w-md place-self-center w-full">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default ProfileEdit
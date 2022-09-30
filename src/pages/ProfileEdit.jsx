import { useState, useContext, useEffect } from 'react'
import UserProfileSidebar from '../components/UserProfileSidebar'
import imagePlaceholder from '../images/placeholder.png'
import { useForm } from "react-hook-form";
import { Context } from '../context/Context';
import axios from 'axios';

function ProfileEdit() {
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [userData, setUserdata] = useState({});
    const [file, setFile] = useState(null);
    const onSubmit = async (data) => {
        const newUser = {
            fullname: data.fullname,
            age: data.age,
            gender: data.gender,
            education_level: data.education_level,
            gpa: data.gpa,
            country: data.country,
            username: data.username,
            email: data.email,
            password: data.password,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newUser.profilepic = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            await axios.put("/users/" + user._id, { ...newUser, userId: user._id })
            setSuccess(true);
            setTimeout(() => setError(false), 3000);
        } catch (error) {
            setError(true);
            setTimeout(() => setError(false), 4000);
        }
    };
    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get(`/users/${user._id}`);
            if (res.data) {
                setUserdata(res.data);
            }
        };
        getUser();
    }, [success])

    return (
        <div className='flex flex-row mt-60px'>
            <UserProfileSidebar />
            <main className='container flex-1  h-full mt-2'>
                {
                    error === true && (
                        <div className="alert alert-error mt-60px shadow-lg w-fit z-50 text-center text-white absolute top-0 right-0" >
                            <div><span className='text-2xl'>😒</span>
                                <span>Error! On User Update Please try Again</span>
                            </div>
                        </div >
                    )
                }
                {
                    success === true && (
                        <div className="alert alert-success mt-60px shadow-lg w-fit z-50 text-center text-white absolute top-0 right-0" >
                            <div><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>User Update Successful!</span>
                            </div>
                        </div >
                    )
                }
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
                                        <input type="text" {...register("username", { required: true })} placeholder={userData?.username} className="input input-bordered input-md w-full max-w-xs" />
                                        {errors.username?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">username is required 😶</p>}
                                        <label className="label"><span className="label-text">Password</span></label>
                                        <input {...register("password", { required: true })} type="password" placeholder="Enter password**" className="input input-bordered input-md w-full max-w-xs" />
                                        {errors.password?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">password is required😶</p>}
                                        <label className="label"><span className="label-text">Country of residence</span></label>
                                        <select {...register("country", { required: true })} className="select select-bordered w-full max-w-xs">
                                            <option selected disabled value="">{userData?.country}</option>
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
                                            <label htmlFor="fileInput">
                                                {
                                                    file ? (
                                                        <img
                                                            className="cursor-pointer"
                                                            src={URL.createObjectURL(file)}
                                                            alt="invalid Imagefile😒"
                                                        />
                                                    ) : (
                                                        <img className='cursor-pointer' src={PF + userData.profilepic} />
                                                    )
                                                }
                                            </label>
                                            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body md:flex-row sm:flex-col lg:flex-row">
                                    <div>
                                        <label className="label"><span className="label-text">Full Names</span></label>
                                        <input type="text" {...register("fullname", { required: true })} placeholder={userData?.fullname} className="input input-bordered " />
                                        {errors.fullname?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">fullname is required 😶</p>}
                                        <label className="label"><span className="label-text">Age</span></label>
                                        <input type="text" {...register("age", { required: true })} placeholder={userData?.age} className="input input-bordered" />
                                        {errors.age?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">age is required 😶</p>}
                                        <label className="label"><span className="label-text">GPA</span></label>
                                        <input type="text" {...register("gpa", { required: true })} placeholder={userData?.gpa} className="input input-bordered" />
                                        {errors.gpa?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">gpa is required 😶</p>}
                                    </div>
                                    <div className='md:ml-4 lg:ml-4'>
                                        <label className="label"><span className="label-text">Gender</span></label>
                                        <select {...register("gender", { required: true })} className="select select-bordered w-full max-w-xs">
                                            <option selected disabled value="" >{userData?.gender}</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.gender?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">gender is required 😶</p>}
                                        <label className="label"><span className="label-text">Email</span></label>
                                        <input {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} type="text" placeholder={userData?.email} className="input input-bordered" />
                                        {errors.email?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">email is required 😶</p>}{errors.email?.type === 'pattern' && <p className="label-text-alt text-red-400 pt-2">invalid email😶</p>}
                                        <label className="label"><span className="label-text">Education level</span></label>
                                        <select {...register("educationlevel", { required: true })} className="select select-bordered w-full max-w-xs">
                                            <option selected disabled value="">{userData?.education_level}</option>
                                            <option value="postgraduate">Postgraduate</option>
                                            <option value="undergraduate">Undergraduate</option>
                                            <option value="seniorsecondaryschool">Senior Secondary School</option>
                                        </select>
                                        {errors.educationlevel?.type === 'required' && <p className="label-text-alt text-red-400 pt-2">education level is required 😶</p>}
                                    </div>
                                </div>
                                <div className="form-control mt-3 grid">
                                    <button type="submit" className="btn  max-w-md place-self-center w-full">Update User Data</button>
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
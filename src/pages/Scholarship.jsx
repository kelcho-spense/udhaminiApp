import { useState, useEffect } from 'react';
import UserProfileSidebar from '../components/UserProfileSidebar'
import scolar2 from '../images/scholar2.jpg'
import { useParams } from "react-router-dom";
import axios from 'axios';
function Scholarship() {
    const [scholarshipData, setScholarshipData] = useState();
    const params = useParams();
    useEffect(() => {
        return async () => {
            const res = await axios.get(`/scholarship/${params.scholarshipId}`);
            res.data && setScholarshipData(res.data);
        }
    }, [])
    return (
        <div className='flex flex-row mt-60px'>
            <UserProfileSidebar />
            <main className='container  ml-3 my-3 justify-center items-center h-full mt-6'>
                <div className="mockup-window border bg-base-300">
                    <div className="flex justify-center px-4 py-16 bg-base-200">
                        <div className="hero  bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={scolar2} className="max-w-lg rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl uppercase font-bold">{scholarshipData?.name}</h1>
                                    <div className="badge badge-secondary badge-lg my-2 text-xl">Scolarship Amount :{scholarshipData?.amount}</div>
                                    <div className="py-2 md:text-lg lg:text-xl justify-center">
                                        <p>👉Study-Level : {scholarshipData?.study_level}</p>
                                        <p>👉Origin-Country : {scholarshipData?.origin_country}</p>
                                        <p>👉Deadline : {scholarshipData?.deadline_day}</p>
                                    </div>
                                    <a href={scholarshipData?.link} className="btn btn-primary">Application Form Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Scholarship
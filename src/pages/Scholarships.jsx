import { useState, useEffect } from 'react';
import UserProfileSidebar from '../components/UserProfileSidebar';
import Scholarship from '../components/Scholarship';
import axios from 'axios';

function Scholarships() {
    const [scholarships, setScholarships] = useState([]);
    useEffect(() => {
        return async () => {
            const res = await axios.get("/scholarship/all");
            setScholarships(res.data);
        }
    }, [])
    return (
        <div className='flex flex-row mt-60px h-fit'>
            <UserProfileSidebar />
            <main className='flex flex-row flex-wrap sm:my-4   gap-4 justify-around items-center'>
                {
                    scholarships ? (
                        scholarships.map((scholarship, index) => (
                            <Scholarship data={scholarship} key={index} />
                        ))
                    ) : <div> No Scholarships Found</div>
                }

            </main>

        </div>
    )
}

export default Scholarships
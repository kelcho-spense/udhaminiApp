import React from 'react'
import imagePlaceholder from '../images/placeholder.png'
import { Link } from 'react-router-dom'
function Scolarship() {
    return (
        <div className="card w-80 bg-base-200 shadow-xl">
            <figure className='w-24 justify-center mx-auto pt-2 rounded-2'><img src={imagePlaceholder} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Gathuthini Foundation!
                    <div className="badge badge-secondary">$20000</div>
                </h2>
                <p>Deadline : december 24th</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline"><Link to="/profile/scolarship/single/64565">View</Link></div>
                    <div className="badge badge-outline">Save</div>
                </div>
            </div>
        </div>
    )
}

export default Scolarship
import React from 'react'
import UserProfileSidebar from '../components/UserProfileSidebar'
import imagePlaceholder from '../images/placeholder.png'
function Scolarship() {
    return (
        <div className='flex flex-row mt-60px'>
            <UserProfileSidebar />
            <main className='container  ml-3 my-3 justify-center items-center h-screen'>
                <div className="mockup-window border bg-base-300">
                    <div className="flex justify-center px-4 py-16 bg-base-200">
                        <div className="hero  bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={imagePlaceholder} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">Gathuthini Foundation Scolarship</h1>
                                    <p className="py-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex molestiae nesciunt ipsa quibusdam eligendi. Ipsam modi sint facere quo et possimus quibusdam harum ad similique fugiat nihil, cupiditate, dicta nam.
                                    </p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Scolarship
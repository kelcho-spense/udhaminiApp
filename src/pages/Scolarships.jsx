import React from 'react'
import UserProfileSidebar from '../components/UserProfileSidebar'
import Scolarship from '../components/Scolarship'
function Scolarships() {
    return (
        <div className='flex flex-row mt-60px'>
            <UserProfileSidebar />
            <main className='flex flex-row flex-wrap  ml-3 my-3 gap-8 justify-center items-center'>
                <Scolarship />
                <Scolarship />
                <Scolarship />
                <Scolarship />
                <Scolarship />
                <Scolarship />
                <Scolarship />
                <Scolarship />
                <Scolarship />
                <Scolarship />
                <Scolarship />
                <Scolarship />
            </main>

        </div>
    )
}

export default Scolarships
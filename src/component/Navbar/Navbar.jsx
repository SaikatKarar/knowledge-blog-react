import React, { useState } from 'react'
import Profile from '../Profile/Profile'

function Navbar() {

    return (
        <header className='flex justify-between items-center p-4 border-b-2  max-w-6xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <Profile />
        </header>
    )
}

export default Navbar
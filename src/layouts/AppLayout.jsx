import React from 'react'
import Navbar from '../components/layout/Navbar'
import { Outlet } from 'react-router-dom'

function AppLayout({ darkMode, toggleDarkMode }) {
    return (
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <div className='main-content-wrapper'>
                <Outlet />
            </div>
        </>


    )
}

export default AppLayout

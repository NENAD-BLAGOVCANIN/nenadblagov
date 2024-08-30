import React from 'react'
import Navbar from '../components/layout/Navbar'
import { Outlet } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from '../assets/img/profile-pic-2.png'

function AppLayout({ darkMode, toggleDarkMode }) {
    return (
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <div className='main-content-wrapper'>
                <Outlet />
            </div>

            <FloatingWhatsApp
                phoneNumber='38766934835'
                accountName='Nenad Blagov'
                avatar={avatar}
                chatMessage="Hello there! 🤝 How can I help?"
                statusMessage='Available'
            />

        </>


    )
}

export default AppLayout

import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { MoonFill, SunFill } from 'react-bootstrap-icons'

function Navbar({ darkMode, toggleDarkMode }) {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent justify-content-center">
            <button className="navbar-toggler btn bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-white"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="container navbar-nav m-auto justify-content-between w-100">
                    <li>
                        <Link className="d-flex align-items-center h-100 logo-image-wrapper" to="/">
                            <img id="logo-image" src={logo} alt="Logo" />
                        </Link>
                    </li>

                    <div className='navbar-nav'>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/work">My Work</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cv">CV</NavLink>
                        </li>
                    </div>

                    <div className="nav-item nav-link position-relative d-flex align-items-center">
                        <div className="one-quarter" id="switch">
                            <input 
                                type="checkbox" 
                                className="checkbox" 
                                id="chk" 
                                checked={darkMode} 
                                onChange={toggleDarkMode} 
                            />
                            <label className="label" htmlFor="chk">
                                <MoonFill className='moon' />
                                <SunFill className='sun' />
                                <div className="ball"></div>
                            </label>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

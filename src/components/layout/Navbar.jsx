import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-transparent justify-content-center">
            <button class="navbar-toggler btn bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-white"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav m-auto justify-content-center">
                    <li>
                        <Link class="d-flex align-items-center h-100 logo-image-wrapper" to="/">
                            <img id="logo-image" src={logo} alt="" />
                        </Link>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/work">My Work</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/cv">CV</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

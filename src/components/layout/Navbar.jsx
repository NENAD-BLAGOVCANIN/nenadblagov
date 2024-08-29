import React from 'react'
import logo from '../../assets/img/logo.png'

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
                        <a class="d-flex align-items-center h-100 logo-image-wrapper" href="/">
                            <img id="logo-image" src={logo} alt="" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="work.html">My Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cv.html">CV</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

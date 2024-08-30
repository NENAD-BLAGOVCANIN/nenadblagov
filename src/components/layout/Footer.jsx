import React from 'react'

function Footer() {
    return (
        <footer className="mt-5">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                    <p className="col-md-4 mb-0 txt-light">Nenad Blagovčanin</p>

                    <a href="/"
                        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <img src="/assets/img/logo.png" style={{ maxHeight: 45 }} className="h-100" alt="" />
                    </a>

                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><a href="/" className="nav-link px-2 txt-light">Home</a></li>
                        <li className="nav-item"><a href="work.html" className="nav-link px-2 txt-light">My Work</a></li>
                        <li className="nav-item"><a href="contact.html" className="nav-link px-2 txt-light">Contact</a></li>
                        <li className="nav-item"><a href="about.html" className="nav-link px-2 txt-light">About</a></li>
                        <li className="nav-item"><a href="cv.html" className="nav-link px-2 txt-light">CV</a></li>
                    </ul>
                </div>

            </div>

        </footer>
    )
}

export default Footer

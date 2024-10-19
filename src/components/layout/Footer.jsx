import React from 'react'
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons'

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

                    <ul className="nav col-md-4 justify-content-center">
                        <li className="nav-item">
                            <a href="https://www.instagram.com/nenadblagov/" className="nav-link px-2">
                                <Instagram />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.facebook.com/profile.php?id=100082837047911" className="nav-link px-2">
                                <Facebook />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/nenad-blagovcanin/" className="nav-link px-2">
                                <Linkedin />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </footer>
    )
}

export default Footer
